"use client";

import { useContext } from "react";
import { CartContext } from "@/shared/context/cartContext";
import { IProduct } from "@/shared/types/common.types";
import { Button, InputNumber, Card, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface CartProductCardProps {
  product: IProduct;
}

///Cart Product Carts
export default function CartProductCard({ product }: CartProductCardProps) {
  const {
    removeProductByOneFromCart,
    addProductToCart,
    removeProductFromCart,
    cartProducts,
  } = useContext(CartContext);
  const productQuantity = cartProducts[product.id]?.quantity || 0;

  const onChange = (value: number | null) => {
    console.log("xxx001 changed", value);
    // value > current quantity => add product to cart
    if (value && value > productQuantity) {
      addProductToCart(product, 1);
    }
    // value < current quantity => remove product from cart
    if (value && value < productQuantity) {
      removeProductByOneFromCart(product.id);
    }
  };

  const onRemove = (productId: number) => {
    removeProductFromCart(productId);
  };

  return (
    <Card
      hoverable
      style={{ marginBottom: 16 }}
      //Remove button
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
          {/*This is Product Name*/}
          <Title level={4} style={{ marginBottom: 8 }}>
            {product.name}
          </Title>
          {/*This is Product Price*/}
          <Text
            style={{ fontSize: "16px", fontWeight: "bold", color: "#1890ff" }}
          >
            {product.price.toLocaleString()} VND
          </Text>

          <br />

          {/* cartProducts[product.id].quantity */}
          <InputNumber
            size="small"
            min={1}
            max={100000}
            defaultValue={productQuantity}
            onChange={onChange}
          />

          <br />
          {/*This is to know if it is Best seller*/}
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
