import { Typography, Card, Rate, Button, Row, Col, Space, message } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function BrandStorePage() {
  const { brandId } = useParams()
  const navigate = useNavigate()
  const { user, isLoggedIn } = useUserContext()

  const { data: brand, refetch: refetchBrand } = Api.brand.findFirst.useQuery({
    where: { id: brandId },
    include: {
      products: true,
      brandFollowers: {
        include: { user: true },
      },
    },
  })

  const isFollowing = brand?.brandFollowers?.some(
    follower => follower.userId === user?.id,
  )

  const { mutateAsync: followBrand } = Api.brandFollower.create.useMutation()
  const { mutateAsync: unfollowBrand } =
    Api.brandFollower.deleteMany.useMutation()

  const handleFollowToggle = async () => {
    if (!isLoggedIn) {
      message.warning('Please login to follow brands')
      return
    }

    if (!user?.id || !brandId) {
      message.error('Unable to process request')
      return
    }

    try {
      if (isFollowing) {
        await unfollowBrand({
          where: {
            userId: user.id,
            brandId: brandId,
          },
        })
      } else {
        await followBrand({
          data: {
            userId: user.id,
            brandId: brandId,
          },
        })
      }
      message.success(isFollowing ? 'Brand unfollowed' : 'Brand followed')
      refetchBrand()
    } catch (error) {
      message.error('An error occurred')
    }
  }

  if (!brand) {
    return (
      <PageLayout layout="narrow">
        <Title level={3}>Brand not found</Title>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} sm={8}>
              {brand.logoUrl && (
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  style={{
                    width: '100%',
                    maxWidth: '200px',
                    borderRadius: '8px',
                  }}
                />
              )}
            </Col>
            <Col xs={24} sm={16}>
              <Space direction="vertical" size="small">
                <Title level={2}>{brand.name}</Title>
                <Paragraph>{brand.description}</Paragraph>
                <Space>
                  <Rate
                    disabled
                    value={parseFloat(brand.rating || '0')}
                    allowHalf
                  />
                  <Text>({brand.rating || '0'})</Text>
                </Space>
                <Text type="secondary">
                  <i className="las la-clock"></i> Joined{' '}
                  {dayjs(brand.createdAt).format('MMMM D, YYYY')}
                </Text>
                <Button
                  type={isFollowing ? 'default' : 'primary'}
                  onClick={handleFollowToggle}
                  icon={
                    <i
                      className={`las ${
                        isFollowing ? 'la-user-minus' : 'la-user-plus'
                      }`}
                    ></i>
                  }
                >
                  {isFollowing ? 'Unfollow' : 'Follow'}
                </Button>
              </Space>
            </Col>
          </Row>
        </Card>

        <div>
          <Title level={3}>
            <i className="las la-shopping-bag"></i> Products
          </Title>
          <Row gutter={[16, 16]}>
            {brand.products?.map(product => (
              <Col xs={24} sm={12} md={8} key={product.id}>
                <Card
                  hoverable
                  onClick={() => navigate(`/products/${product.id}`)}
                  cover={
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                      <i
                        className="las la-box"
                        style={{ fontSize: '48px' }}
                      ></i>
                    </div>
                  }
                >
                  <Card.Meta
                    title={product.name}
                    description={
                      <Space direction="vertical">
                        <Text>${product.price}</Text>
                        <Text type="secondary">
                          Stock: {product.stock.toString()}
                        </Text>
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <Title level={3}>
            <i className="las la-users"></i> Followers (
            {brand.brandFollowers?.length || 0})
          </Title>
          <Row gutter={[16, 16]}>
            {brand.brandFollowers?.map(follower => (
              <Col xs={24} sm={12} md={8} key={follower.id}>
                <Card size="small">
                  <Card.Meta
                    avatar={
                      <img
                        src={follower.user?.pictureUrl}
                        alt={follower.user?.name}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                        }}
                      />
                    }
                    title={follower.user?.name}
                    description={`Since ${dayjs(follower.createdAt).format(
                      'MMM D, YYYY',
                    )}`}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Space>
    </PageLayout>
  )
}
