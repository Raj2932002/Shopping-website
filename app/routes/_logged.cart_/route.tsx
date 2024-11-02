import {
  Typography,
  Button,
  InputNumber,
  Empty,
  Card,
  Row,
  Col,
  message,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ShoppingCartPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  // Fetch cart with items and product details
  const { data: cart, refetch } = Api.cart.findFirst.useQuery({
    where: {
      userId: user?.id,
      status: 'ACTIVE',
    },
    include: {
      cartItems: {
        include: {
          product: true,
        },
      },
    },
  })

  // Mutations
  const { mutateAsync: updateCartItem } = Api.cartItem.update.useMutation()
  const { mutateAsync: deleteCartItem } = Api.cartItem.delete.useMutation()
  const { mutateAsync: createOrder } = Api.order.create.useMutation()
  const { mutateAsync: createOrderItem } = Api.orderItem.create.useMutation()
  const { mutateAsync: updateCart } = Api.cart.update.useMutation()

  // Calculate total
  const total =
    cart?.cartItems?.reduce((sum, item) => {
      return sum + parseFloat(item.product?.price || '0') * item.quantity
    }, 0) || 0

  // Handle quantity change
  const handleQuantityChange = async (itemId: string, quantity: number) => {
    try {
      await updateCartItem({
        where: { id: itemId },
        data: { quantity },
      })
      refetch()
    } catch (error) {
      message.error('Failed to update quantity')
    }
  }

  // Handle item removal
  const handleRemoveItem = async (itemId: string) => {
    try {
      await deleteCartItem({
        where: { id: itemId },
      })
      refetch()
    } catch (error) {
      message.error('Failed to remove item')
    }
  }

  // Handle checkout
  const handleCheckout = async () => {
    if (!cart || !cart.cartItems.length) return

    try {
      // Group items by brand
      const itemsByBrand = cart.cartItems.reduce((acc: any, item) => {
        const brandId = item.product?.brandId
        if (!brandId) return acc
        if (!acc[brandId]) acc[brandId] = []
        acc[brandId].push(item)
        return acc
      }, {})

      // Create order for each brand
      for (const brandId of Object.keys(itemsByBrand)) {
        const items = itemsByBrand[brandId]
        const orderTotal = items.reduce(
          (sum: number, item: any) =>
            sum + parseFloat(item.product?.price || '0') * item.quantity,
          0,
        )

        const order = await createOrder({
          data: {
            userId: user?.id || '',
            brandId,
            status: 'PENDING',
            total: orderTotal.toString(),
          },
        })

        // Create order items
        for (const item of items) {
          await createOrderItem({
            data: {
              orderId: order.id,
              productId: item.product?.id || '',
              quantity: item.quantity,
              price: item.product?.price || '0',
            },
          })
        }
      }

      // Update cart status
      await updateCart({
        where: { id: cart.id },
        data: { status: 'COMPLETED' },
      })

      message.success('Order placed successfully!')
      navigate('/orders')
    } catch (error) {
      message.error('Failed to place order')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i
            className="las la-shopping-cart"
            style={{ marginRight: '8px' }}
          ></i>
          Shopping Cart
        </Title>
        <Text type="secondary">
          Review and modify your selected items before checkout
        </Text>

        {!cart?.cartItems || cart.cartItems.length === 0 ? (
          <Empty
            description="Your cart is empty"
            style={{ marginTop: '40px' }}
          />
        ) : (
          <div style={{ marginTop: '24px' }}>
            <Row gutter={[16, 16]}>
              {cart.cartItems.map(item => (
                <Col xs={24} key={item.id}>
                  <Card>
                    <Row align="middle" gutter={16}>
                      <Col xs={24} sm={12}>
                        <Text strong>{item.product?.name}</Text>
                      </Col>
                      <Col xs={24} sm={4}>
                        <Text>${item.product?.price}</Text>
                      </Col>
                      <Col xs={24} sm={4}>
                        <InputNumber
                          min={1}
                          value={item.quantity}
                          onChange={value =>
                            handleQuantityChange(item.id, value || 1)
                          }
                        />
                      </Col>
                      <Col xs={24} sm={4}>
                        <Button
                          danger
                          onClick={() => handleRemoveItem(item.id)}
                          icon={<i className="las la-trash-alt"></i>}
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>

            <Card style={{ marginTop: '24px' }}>
              <Row justify="space-between" align="middle">
                <Col>
                  <Text strong>Total: ${total.toFixed(2)}</Text>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    size="large"
                    onClick={handleCheckout}
                    icon={<i className="las la-credit-card"></i>}
                  >
                    Proceed to Checkout
                  </Button>
                </Col>
              </Row>
            </Card>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
