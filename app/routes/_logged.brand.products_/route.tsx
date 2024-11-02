import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Space,
} from 'antd'
import { useState } from 'react'
import type { Product, Brand } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ProductManagementPage() {
  const { user } = useUserContext()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [form] = Form.useForm()
  const { mutateAsync: upload } = useUploadPublic()

  // Fetch products for the brand
  const { data: brand } = Api.brand.findFirst.useQuery({
    where: { userId: user?.id },
    include: { products: true },
  })

  // Mutations
  const createProduct = Api.product.create.useMutation()
  const updateProduct = Api.product.update.useMutation()
  const deleteProduct = Api.product.delete.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      if (editingProduct) {
        await updateProduct.mutateAsync({
          where: { id: editingProduct.id },
          data: {
            name: values.name,
            description: values.description,
            price: values.price.toString(),
            category: values.category,
            stock: values.stock,
            featured: values.featured === 'true',
            trending: values.trending === 'true',
          },
        })
        message.success('Product updated successfully')
      } else {
        await createProduct.mutateAsync({
          data: {
            name: values.name,
            description: values.description,
            price: values.price.toString(),
            category: values.category,
            stock: values.stock,
            featured: values.featured === 'true',
            trending: values.trending === 'true',
            brandId: brand?.id || '',
          },
        })
        message.success('Product created successfully')
      }
      setIsModalOpen(false)
      form.resetFields()
      setEditingProduct(null)
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const handleDelete = async (productId: string) => {
    try {
      await deleteProduct.mutateAsync({ where: { id: productId } })
      message.success('Product deleted successfully')
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
      render: (stock: number) => stock.toString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Product) => (
        <Space>
          <Button
            type="primary"
            onClick={() => {
              setEditingProduct(record)
              form.setFieldsValue({
                ...record,
                featured: record.featured.toString(),
                trending: record.trending.toString(),
              })
              setIsModalOpen(true)
            }}
          >
            <i className="las la-edit" /> Edit
          </Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            <i className="las la-trash" /> Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <Title level={2}>Product Management</Title>
          <Button
            type="primary"
            onClick={() => {
              setEditingProduct(null)
              form.resetFields()
              setIsModalOpen(true)
            }}
          >
            <i className="las la-plus" /> Add New Product
          </Button>
        </div>

        <Table dataSource={brand?.products} columns={columns} rowKey="id" />

        <Modal
          title={editingProduct ? 'Edit Product' : 'Add New Product'}
          open={isModalOpen}
          onCancel={() => {
            setIsModalOpen(false)
            form.resetFields()
            setEditingProduct(null)
          }}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="category" label="Category">
              <Input />
            </Form.Item>
            <Form.Item name="stock" label="Stock" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="featured" label="Featured">
              <Select>
                <Select.Option value="true">Yes</Select.Option>
                <Select.Option value="false">No</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="trending" label="Trending">
              <Select>
                <Select.Option value="true">Yes</Select.Option>
                <Select.Option value="false">No</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={createProduct.isLoading || updateProduct.isLoading}
              >
                {editingProduct ? 'Update' : 'Create'} Product
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
