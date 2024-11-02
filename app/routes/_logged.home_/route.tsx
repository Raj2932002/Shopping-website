import {
  Typography,
  Card,
  Input,
  Select,
  InputNumber,
  Row,
  Col,
  Space,
  Spin,
  Empty,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

  // Fetch all products with their brands
  const { data: products, isLoading } = Api.product.findMany.useQuery({
    include: {
      brand: true,
    },
  })

  // Fetch all brands for the filter
  const { data: brands } = Api.brand.findMany.useQuery()

  // Get unique categories from products
  const categories = [
    ...new Set(products?.map(product => product.category).filter(Boolean)),
  ]

  // Filter products based on search criteria
  const filteredProducts = products?.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory
    const matchesBrand = !selectedBrand || product.brandId === selectedBrand
    const price = parseFloat(product.price)
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice
  })

  // Separate featured and trending products
  const featuredProducts = filteredProducts?.filter(product => product.featured)
  const trendingProducts = filteredProducts?.filter(product => product.trending)

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`)
  }

  const ProductCard = ({ product }: { product: any }) => (
    <Card
      hoverable
      onClick={() => handleProductClick(product.id)}
      cover={
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <i className="las la-box la-3x"></i>
        </div>
      }
    >
      <Card.Meta
        title={product.name}
        description={
          <>
            <Text strong>${product.price}</Text>
            <br />
            <Text type="secondary">{product.brand?.name}</Text>
          </>
        }
      />
    </Card>
  )

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2}>
            <i className="las la-store"></i> Welcome to Our Store
          </Title>
          <Text type="secondary">
            Discover amazing products at great prices
          </Text>
        </div>

        {/* Filters */}
        <Card>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Input
              prefix={<i className="las la-search"></i>}
              placeholder="Search products..."
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Row gutter={16}>
              <Col xs={24} sm={8}>
                <Select
                  style={{ width: '100%' }}
                  placeholder="Select Category"
                  allowClear
                  onChange={value => setSelectedCategory(value)}
                >
                  {categories.map(category => (
                    <Select.Option key={category} value={category}>
                      {category}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} sm={8}>
                <Select
                  style={{ width: '100%' }}
                  placeholder="Select Brand"
                  allowClear
                  onChange={value => setSelectedBrand(value)}
                >
                  {brands?.map(brand => (
                    <Select.Option key={brand.id} value={brand.id}>
                      {brand.name}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} sm={8}>
                <Space>
                  <InputNumber
                    min={0}
                    max={999999}
                    placeholder="Min"
                    onChange={value =>
                      setPriceRange([value || 0, priceRange[1]])
                    }
                  />
                  <InputNumber
                    min={0}
                    max={999999}
                    placeholder="Max"
                    onChange={value =>
                      setPriceRange([priceRange[0], value || 1000])
                    }
                  />
                </Space>
              </Col>
            </Row>
          </Space>
        </Card>

        {/* Featured Products */}
        <div>
          <Title level={3}>
            <i className="las la-star"></i> Featured Products
          </Title>
          {featuredProducts?.length ? (
            <Row gutter={[16, 16]}>
              {featuredProducts.map(product => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <Empty description="No featured products found" />
          )}
        </div>

        {/* Trending Products */}
        <div>
          <Title level={3}>
            <i className="las la-fire"></i> Trending Products
          </Title>
          {trendingProducts?.length ? (
            <Row gutter={[16, 16]}>
              {trendingProducts.map(product => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <Empty description="No trending products found" />
          )}
        </div>
      </Space>
    </PageLayout>
  )
}
