"use client";

import ProductImage from "@/components/category/images_product";
import ProductInformation from "@/components/category/information";
import Header from "@/components/header";
import { Flex, Skeleton, Grid, Row, Col } from "antd";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { IProduct } from "@/shared/types/common.types";
import { useProductDetail } from "@/shared/hooks/useProductDetail";

// TODO: @triet import useSearchParams từ next/navigation để lấy productId từ URL
// TODO: @triet import useState và useEffect từ react

// TODO: @triet tạo interface IProduct tương tự như trong category/page.tsx
// Hoặc có thể import từ một file chung nếu muốn tái sử dụng

<<<<<<< HEAD

const { useBreakpoint } = Grid


=======
const { useBreakpoint } = Grid;
>>>>>>> a4ff74dee84fbd61d403a23995b86bd08c64777c

export default function ProductDetails() {
  //URL là /product-details?id=1 thì lấy id=1
  const searchParams = useSearchParams();
  const productIdParam = searchParams.get("id");
  const productId = productIdParam ? Number(productIdParam) : null;
  const screens = useBreakpoint();
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

  // get product detail from api
  // TODO: @triet sử dụng useEffect để fetch thông tin sản phẩm dựa trên productId
  const { product } = useProductDetail({ id: productId });

  // TODO: @triet tạo state để lưu thông tin sản phẩm hiện tại

  // TODO: @triet tạo state để lưu số lượng sản phẩm muốn mua
  const [quantity, setQuantity] = useState<number>(1);

  // TODO: @triet sử dụng useEffect để fetch thông tin sản phẩm dựa trên productId
  // Hint: useEffect(() => { ... }, [productId])
  //You want it to re-run whenever products or productId changes.

  // Trong useEffect, tìm sản phẩm từ PRODUCTS_INITIALIZE (hoặc từ API nếu có)
  // và setProduct với sản phẩm tìm được

  // TODO: @triet tạo hàm handleBuyNow để xử lý khi click nút "BUY NOW"
  // Hint: có thể console.log hoặc hiển thị alert với thông tin sản phẩm và số lượng

  // TODO: @triet tạo hàm handleAddToCart để xử lý khi click nút "ADD TO CART"
  // Hint: tương tự handleBuyNow

  // TODO: @triet nếu product === null, hiển thị loading hoặc "Product not found"
  // Hint: sử dụng conditional rendering: if (!product) return <div>Loading...</div>

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "white",
        padding: "16px",
      }}
    >
      <Header />

      <Row>
        <Col span={isSmallScreen ? 24 : 8}>
          {product ? (
            <ProductImage image={product.image} />
          ) : (
            <Skeleton active />
          )}
        </Col>
        <Col span={isSmallScreen ? 24 : 16}>
          {product ? (
            <ProductInformation
              product={product}
              quantity={1}
              setQuantity={() => {}}
              handleBuyNow={() => {}}
              handleAddToCart={() => {}}
            />
          ) : (
            <Skeleton active />
          )}
        </Col>
      </Row>
    </div>
  );
}
