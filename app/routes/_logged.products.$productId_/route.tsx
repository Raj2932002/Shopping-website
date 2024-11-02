import {
  Typography,
  Card,
  Rate,
  Button,
  InputNumber,
  message,
  Spin,
  Divider,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ProductDetailsPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch product with brand and reviews
  const { data: product, isLoading } = Api.product.findFirst.useQuery({
    where: { id: productId },
    include: {
      brand: true,
      reviews: {
        include: {
          user: true,
        },
      },
    },
  })

  // Fetch user's active cart
  const { data: cart, refetch: refetchCart } = Api.cart.findFirst.useQuery({
    where: { userId: user?.id, status: 'ACTIVE' },
  })

  // Mutations
  const { mutateAsync: createCart } = Api.cart.create.useMutation()
  const { mutateAsync: addToCart } = Api.cartItem.create.useMutation()
  const { mutateAsync: createReview } = Api.review.create.useMutation()

  const [quantity, setQuantity] = React.useState(1)
  const [reviewRating, setReviewRating] = React.useState(5)
  const [reviewComment, setReviewComment] = React.useState('')

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  if (!product) {
    return (
      <PageLayout layout="narrow">
        <Title level={4}>Product not found</Title>
      </PageLayout>
    )
  }

  const handleAddToCart = async () => {
    try {
      let activeCart = cart
      if (!activeCart) {
        activeCart = await createCart({
          data: {
            userId: user?.id!,
            status: 'ACTIVE',
          },
        })
      }

      await addToCart({
        data: {
          cartId: activeCart.id,
          productId: product.id,
          quantity,
        },
      })

      await refetchCart()
      message.success('Product added to cart')
    } catch (error) {
      message.error('Failed to add product to cart')
    }
  }

  const handleSubmitReview = async () => {
    try {
      await createReview({
        data: {
          productId: product.id,
          userId: user?.id!,
          rating: reviewRating,
          comment: reviewComment,
        },
      })
      message.success('Review submitted successfully')
      setReviewComment('')
      setReviewRating(5)
    } catch (error) {
      message.error('Failed to submit review')
    }
  }

  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
      : 0

  return (
    <PageLayout layout="narrow">
      <Card>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={2}>{product.name}</Title>
          <Text type="secondary">by {product.brand?.name}</Text>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ flex: 1, minWidth: '300px' }}>
            <Paragraph>{product.description}</Paragraph>
            <div style={{ marginTop: '20px' }}>
              <Title level={4}>Price: ${product.price}</Title>
              <Text>Stock: {product.stock.toString()}</Text>
              <div style={{ marginTop: '20px' }}>
                <InputNumber
                  min={1}
                  max={product.stock}
                  value={quantity}
                  onChange={value => setQuantity(value || 1)}
                  style={{ marginRight: '10px' }}
                />
                <Button
                  type="primary"
                  onClick={handleAddToCart}
                  disabled={!user}
                >
                  <i className="las la-shopping-cart"></i> Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        <div>
          <Title level={3}>Reviews</Title>
          <div style={{ marginBottom: '20px' }}>
            <Text>Average Rating: </Text>
            <Rate disabled defaultValue={averageRating} />
            <Text> ({product.reviews.length} reviews)</Text>
          </div>

          {user && (
            <Card size="small" style={{ marginBottom: '20px' }}>
              <Title level={4}>Write a Review</Title>
              <Rate value={reviewRating} onChange={setReviewRating} />
              <textarea
                value={reviewComment}
                onChange={e => setReviewComment(e.target.value)}
                style={{ width: '100%', margin: '10px 0', padding: '8px' }}
                rows={4}
                placeholder="Write your review here..."
              />
              <Button type="primary" onClick={handleSubmitReview}>
                Submit Review
              </Button>
            </Card>
          )}

          {product.reviews?.map(review => (
            <Card key={review.id} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Text strong>{review.user?.name}</Text>
                  <Rate
                    disabled
                    defaultValue={review.rating}
                    style={{ marginLeft: '10px' }}
                  />
                </div>
                <Text type="secondary">
                  {dayjs(review.createdAt).format('MMMM D, YYYY')}
                </Text>
              </div>
              <Paragraph style={{ marginTop: '10px' }}>
                {review.comment}
              </Paragraph>
            </Card>
          ))}
        </div>
      </Card>
    </PageLayout>
  )
}
