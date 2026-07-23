"use client";

import ProductImage from "@/components/category/images_product";
import ProductInformation from "@/components/category/information";
import { Skeleton, Grid, Row, Col } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { useProductDetail } from "@/shared/hooks/useProductDetail";
import { CartContext } from "@/shared/context/cartContext";

// TODO: @triet import useSearchParams từ next/navigation để lấy productId từ URL
// TODO: @triet import useState và useEffect từ react

// TODO: @triet tạo interface IProduct tương tự như trong category/page.tsx
// Hoặc có thể import từ một file chung nếu muốn tái sử dụng

const { useBreakpoint } = Grid;

export default function ProductDetails() {
  const router = useRouter();
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
  const { addProductToCart } = useContext(CartContext);

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
        backgroundColor: "white",
        padding: "16px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <Row gutter={[24, 24]}>
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
              handleBuyNow={() => {
                addProductToCart(product, 1);
                router.push("/checkouts");
              }}
            />
          ) : (
            <Skeleton active />
          )}
        </Col>
        <Col span={24}>
          {product ? (
            <section
              style={{
                borderTop: "3px solid #e21d2b",
                padding: isSmallScreen ? "20px 4px" : "28px 24px",
              }}
            >
              <h2
                style={{
                  color: "#151515",
                  fontSize: isSmallScreen ? "25px" : "32px",
                  fontWeight: "bold",
                  marginTop: 0,
                }}
              >
                Product description
              </h2>

              {product.FullDes.map((description, index) =>
                Object.entries(description).map(([header, text]) => (
                  <div key={`${header}-${index}`} style={{ marginBottom: "22px" }}>
                    <h3
                      style={{
                        color: "#e21d2b",
                        fontSize: isSmallScreen ? "20px" : "23px",
                        marginBottom: "8px",
                      }}
                    >
                      {header}
                    </h3>
                    <p
                      style={{
                        color: "#333333",
                        fontSize: "16px",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                )),
              )}
            </section>
          ) : (
            <Skeleton active />
          )}
        </Col>
      </Row>
    </div>
  );
}
