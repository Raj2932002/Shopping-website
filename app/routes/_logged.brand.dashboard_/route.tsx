import {
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Table,
  Avatar,
  Button,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function BrandDashboardPage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch brand data for the current user
  const { data: brand } = Api.brand.findFirst.useQuery({
    where: { userId: user?.id },
    include: {
      products: true,
      orders: {
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  })

  // Calculate statistics
  const totalProducts = brand?.products?.length || 0
  const totalOrders = brand?.orders?.length || 0
  const totalRevenue =
    brand?.orders?.reduce((sum, order) => sum + parseFloat(order.total), 0) || 0

  // Recent orders table columns
  const orderColumns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => <Text copyable>{text}</Text>,
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => dayjs(date).format('MMM D, YYYY'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total: string) => `$${total}`,
    },
  ]

  // Top products table columns
  const productColumns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Avatar
            size="large"
            src={record.imageUrl || 'https://placeholder.com/100'}
          />
          {text}
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: string) => `$${price}`,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Title level={2}>
            <i className="las la-store" style={{ marginRight: '8px' }}></i>
            Brand Dashboard
          </Title>
          <Text type="secondary">
            Manage your store, track sales, and process orders
          </Text>
        </div>

        {/* Statistics Cards */}
        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-box"></i> Total Products
                  </>
                }
                value={totalProducts}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-shopping-cart"></i> Total Orders
                  </>
                }
                value={totalOrders}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-dollar-sign"></i> Total Revenue
                  </>
                }
                value={totalRevenue}
                precision={2}
                prefix="$"
              />
            </Card>
          </Col>
        </Row>

        {/* Store Profile */}
        <Card
          title={
            <>
              <i className="las la-store-alt"></i> Store Profile
            </>
          }
          style={{ marginBottom: '24px' }}
          extra={
            <Button type="primary" onClick={() => navigate('/brand/profile')}>
              Edit Profile
            </Button>
          }
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Avatar size={64} src={brand?.logoUrl} />
              <Title level={4} style={{ marginTop: '16px' }}>
                {brand?.name}
              </Title>
              <Text>{brand?.description}</Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text strong>Rating: </Text>
              <Text>{brand?.rating || 'No ratings yet'}</Text>
            </Col>
          </Row>
        </Card>

        {/* Recent Orders */}
        <Card
          title={
            <>
              <i className="las la-clipboard-list"></i> Recent Orders
            </>
          }
          style={{ marginBottom: '24px' }}
          extra={
            <Button type="link" onClick={() => navigate('/orders')}>
              View All
            </Button>
          }
        >
          <Table
            dataSource={brand?.orders?.slice(0, 5)}
            columns={orderColumns}
            rowKey="id"
            pagination={false}
          />
        </Card>

        {/* Top Products */}
        <Card
          title={
            <>
              <i className="las la-box"></i> Top Products
            </>
          }
          extra={
            <Button type="link" onClick={() => navigate('/brand/products')}>
              Manage Products
            </Button>
          }
        >
          <Table
            dataSource={brand?.products?.slice(0, 5)}
            columns={productColumns}
            rowKey="id"
            pagination={false}
          />
        </Card>
      </div>
    </PageLayout>
  )
}
