"use client";
import Header from "@/components/header";
import { useContext, useEffect, useState } from "react";
import { LikedContext } from "@/shared/context/likedContext";
import { Flex, Button, Empty, Typography, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { IProduct } from "@/shared/types/common.types";
import { useProduct } from "@/shared/hooks/useProducts";
import { useRouter } from "next/navigation";
import LikedProductCard from "@/components/liked/likedProductCard";
import Link from "next/link";
import { ShoppingOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SORT_BY_OPTIONS: Array<{ label: string; value: string }> = [
  { label: "Price: Increase", value: "price-increase" },
  { label: "Price: Decrease", value: "price-decrease" },
  { label: "Name: From A-Z", value: "name-a-z" },
  { label: "Name: From Z-A", value: "name-z-a" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Best seller", value: "best-seller" },
];
export default function Favourite() {
  const { likedProductIds, clearAll } = useContext(LikedContext); // [product2_id]
  const router = useRouter();

  const { products } = useProduct(); // [product1, product2, product3]
  // const likedProducts = products.filter((product) =>
  //   likedProductIds.includes(product.id),
  // ); // [product2]

  const [localLikedProducts, setLocalLikedProducts] = useState<IProduct[]>([]); // change 1: [] => change 2: [product2]
  const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null);

  // useEffect(() => {
  //   setLocalLikedProducts(likedProducts);

  //   setSelectedSortBy(null);
  // }, [likedProducts]); // change 1: [] => change 2: [product2]

  useEffect(() => {
    const newLikedProducts = products.filter((product) =>
      likedProductIds.includes(product.id),
    );
    console.log("xxx001 newLikedProducts", {
      newLikedProducts,
      likedProductIds,
      products,
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalLikedProducts(newLikedProducts);
    setSelectedSortBy(null);
  }, [likedProductIds, products]);

  const handleSortBy = (newValue: string) => {
    setSelectedSortBy(newValue);

    let newProducts: IProduct[] = [...localLikedProducts];

    switch (newValue) {
      case "price-increase":
        newProducts = [...localLikedProducts].sort((a, b) => a.price - b.price);
        break;
      case "price-decrease":
        newProducts = [...localLikedProducts].sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        newProducts = [...localLikedProducts].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        break;
      case "name-z-a":
        newProducts = [...localLikedProducts].sort((a, b) =>
          b.name.localeCompare(a.name),
        );
        break;
      case "newest":
        newProducts = [...localLikedProducts].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case "oldest":
        newProducts = [...localLikedProducts].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        );
        break;
      case "best-seller":
        newProducts = [...localLikedProducts].filter(
          (product) => product.isBestSeller === true,
        );
        break;
      default:
        break;
    }

    setLocalLikedProducts(newProducts);
  };

  return (
    <>
      <div
        style={{
          background: "white",
          minHeight: "100vh",
          minWidth: "100wh",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "0 10px",
        }}
      >
        <Header />

        {likedProductIds.length === 0 ? (
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
                  <Title level={3}>No favourite products</Title>
                  <Text type="secondary">
                    Add some products to get started!
                  </Text>
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
        ) : (
          <>
            <Flex wrap gap="middle" justify="space-between" align="center">
              <p
                style={{ color: "black", fontWeight: "bold", fontSize: "40px" }}
              >
                Liked Product ({likedProductIds.length})
              </p>
              <Flex wrap gap="small">
                <Button
                  onClick={() => clearAll()}
                  danger
                  icon={<DeleteOutlined style={{ color: "red" }} />}
                  style={{ color: "red" }}
                  size="large"
                >
                  Clear all
                </Button>
                <Button onClick={() => router.push("/")} size="large">
                  Continue Shopping
                </Button>
              </Flex>
            </Flex>
            <Flex wrap gap="small" style={{ paddingTop: 12 }}>
              <p
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginRight: 8,
                }}
              >
                Sorted By:
              </p>
              {SORT_BY_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handleSortBy(option.value)}
                  style={{
                    backgroundColor:
                      selectedSortBy === option.value ? "royalblue" : "white",
                    color: selectedSortBy === option.value ? "white" : "black",
                    border: "1px solid rgb(224, 224, 224)",
                    borderRadius: "6px",
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {option.label}
                </Button>
              ))}
            </Flex>

            <Row gutter={4} style={{ paddingTop: 12 }}>
              {localLikedProducts.map((product: IProduct) => (
                <Col key={product.id} xs={12} sm={8} md={6} lg={4}>
                  <LikedProductCard product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </div>
    </>
  );
}
