"use client";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/shared/context/cartContext";
import { useProduct } from "@/shared/hooks/useProducts";
import { IProduct } from "@/shared/types/common.types";
import Link from "next/link";
import {
  Button,
  message,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Empty,
} from "antd";
import {
  DeleteOutlined,
  ClearOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

interface CartProductCardProps {
  product: IProduct;
  onRemove: (productId: number) => void;
}

function CartProductCard({ product, onRemove }: CartProductCardProps) {
  return (
    <Card
      hoverable
      style={{ marginBottom: 16 }}
      actions={[
        <Button
          key="remove"
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => onRemove(product.id)}
        >
          Remove
        </Button>,
      ]}
    >
      <div style={{ display: "flex", gap: "16px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <div style={{ flex: 1 }}>
          <Title level={4} style={{ marginBottom: 8 }}>
            {product.name}
          </Title>
          <Text
            style={{ fontSize: "16px", fontWeight: "bold", color: "#1890ff" }}
          >
            ${product.price}
          </Text>
          <br />
          <Text type="secondary">{product.brandName}</Text>
          {product.isBestSeller && (
            <div style={{ marginTop: 4 }}>
              <span
                style={{
                  backgroundColor: "#f6ffed",
                  color: "#52c41a",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Best Seller
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function CartPage() {
  const {
    productIds: cartProductIds,
    removeProductId,
    clearCart,
  } = useContext(CartContext);

  // get all products from API
  const { products: allProducts } = useProduct();
  // state save cart products
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // Filter products that are in the cart
    const filteredProducts = allProducts.filter((product) =>
      cartProductIds.includes(product.id)
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCartProducts(filteredProducts);
  }, [cartProductIds, allProducts]);

  const handleRemoveProduct = (productId: number) => {
    removeProductId(productId);
    message.success("Product removed from cart");
  };

  const handleClearCart = () => {
    clearCart();
    message.success("Cart cleared");
  };

  const totalPrice = cartProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  if (cartProducts.length === 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "white",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <div>
              <Title level={3}>Your cart is empty</Title>
              <Text type="secondary">Add some products to get started!</Text>
            </div>
          }
        >
          <Link href="/">
            <Button type="primary" icon={<ShoppingOutlined />}>
              Continue Shopping
            </Button>
          </Link>
        </Empty>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        padding: "20px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          marginBottom: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={2}>Shopping Cart ({cartProducts.length} items)</Title>
        <Space>
          <Button
            danger
            icon={<ClearOutlined />}
            onClick={handleClearCart}
            disabled={cartProducts.length === 0}
          >
            Clear Cart
          </Button>
          <Link href="/">
            <Button icon={<ShoppingOutlined />}>Continue Shopping</Button>
          </Link>
        </Space>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          {cartProducts.map((product) => (
            <CartProductCard
              key={product.id}
              product={product}
              onRemove={handleRemoveProduct}
            />
          ))}
        </Col>

        <Col xs={24} lg={8}>
          <Card
            title="Order Summary"
            style={{ position: "sticky", top: "20px" }}
          >
            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Text>Subtotal ({cartProducts.length} items):</Text>
                <Text strong>${totalPrice.toFixed(2)}</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Text>Shipping:</Text>
                <Text>Free</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <Text>Tax:</Text>
                <Text>${(totalPrice * 0.1).toFixed(2)}</Text>
              </div>
              <div
                style={{
                  borderTop: "1px solid #f0f0f0",
                  paddingTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Text strong style={{ fontSize: "16px" }}>
                  Total:
                </Text>
                <Text strong style={{ fontSize: "18px", color: "#1890ff" }}>
                  ${(totalPrice * 1.1).toFixed(2)}
                </Text>
              </div>
            </div>
            <Button
              type="primary"
              size="large"
              block
              style={{ marginTop: "16px" }}
              onClick={() =>
                message.info("Checkout functionality would be implemented here")
              }
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
