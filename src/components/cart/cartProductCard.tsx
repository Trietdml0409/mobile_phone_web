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

///Cart Product Carts
export default function CartProductCard({ product, onRemove }: CartProductCardProps) {
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
            ${product.price}
          </Text>
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