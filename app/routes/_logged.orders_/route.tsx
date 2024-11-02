import { Typography, Table, Button, Tag, Space, message } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function OrdersPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  // Fetch orders with included relations
  const { data: orders, isLoading } = Api.order.findMany.useQuery({
    where: { userId: user?.id },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
      brand: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  // Create cart mutation for reordering
  const { mutateAsync: createCart } = Api.cart.create.useMutation()
  const { mutateAsync: createCartItem } = Api.cartItem.create.useMutation()

  const handleReorder = async (orderId: string) => {
    try {
      const order = orders?.find(o => o.id === orderId)
      if (!order) return

      // Create new cart
      const cart = await createCart({
        data: {
          status: 'ACTIVE',
          userId: user?.id as string,
        },
      })

      // Add items to cart
      await Promise.all(
        order.orderItems.map(item =>
          createCartItem({
            data: {
              quantity: item.quantity,
              cartId: cart.id,
              productId: item.productId,
            },
          }),
        ),
      )

      message.success('Items added to cart successfully')
      navigate('/cart')
    } catch (error) {
      message.error('Failed to reorder items')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case 'PENDING':
        return 'orange'
      case 'PROCESSING':
        return 'blue'
      case 'SHIPPED':
        return 'cyan'
      case 'DELIVERED':
        return 'green'
      case 'CANCELLED':
        return 'red'
      default:
        return 'default'
    }
  }

  const columns = [
    {
      title: 'Order Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('MMM D, YYYY'),
    },
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
      render: (id: string) => <Text copyable>{id}</Text>,
    },
    {
      title: 'Store',
      dataIndex: 'brand',
      key: 'brand',
      render: (brand: any) => brand.name,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{status.toUpperCase()}</Tag>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total: string) => `$${total}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Space>
          <Button
            type="primary"
            icon={<i className="las la-sync-alt" />}
            onClick={() => handleReorder(record.id)}
          >
            Reorder
          </Button>
        </Space>
      ),
    },
  ]

  const expandedRowRender = (record: any) => {
    const items = record.orderItems.map((item: any) => ({
      key: item.id,
      name: item.product.name,
      quantity: item.quantity.toString(),
      price: `$${item.price}`,
    }))

    const itemColumns = [
      { title: 'Product', dataIndex: 'name', key: 'name' },
      { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
      { title: 'Price', dataIndex: 'price', key: 'price' },
    ]

    return <Table columns={itemColumns} dataSource={items} pagination={false} />
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2}>
              <i className="las la-shopping-bag" /> Order History
            </Title>
            <Text type="secondary">
              View and manage your past orders, check their status, or reorder
              items
            </Text>
          </div>

          <Table
            loading={isLoading}
            columns={columns}
            dataSource={orders}
            rowKey="id"
            expandable={{
              expandedRowRender,
              expandRowByClick: true,
            }}
            pagination={{ pageSize: 10 }}
          />
        </Space>
      </div>
    </PageLayout>
  )
}
