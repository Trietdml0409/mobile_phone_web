"use client";

import Banner from "@/components/home/banner";
import Contents from "@/components/home/contents";
import MessageBanner from "@/components/MessageBanner";
import SegmentDiscount from "@/components/home/segmentedDiscount/segmentDiscount";
import Blog from "@/components/blog/blog";
import { useProduct } from "@/shared/hooks/useProducts";
import { IProduct } from "@/shared/types/common.types";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [localProducts, setLocalProducts] = useState<IProduct[]>([]);
  const { products } = useProduct();

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  useEffect(() => {
    setVisitCount((previousCount) => previousCount + 1);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f3f5f7",
        padding: "24px 16px 56px",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <section
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "12px",
            marginBottom: "24px",
            boxShadow: "0 4px 18px rgba(20, 33, 61, 0.07)",
            overflow: "hidden",
          }}
        >
          <Banner />
        </section>

        <section
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 4px 18px rgba(20, 33, 61, 0.07)",
          }}
        >
          <div
            style={{
              borderLeft: "7px solid #e51d2a",
              paddingLeft: "16px",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 34px)",
                fontWeight: 900,
                color: "#151515",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Store policies
            </h2>
            <p style={{ color: "#6b7280", fontSize: "16px", margin: "5px 0 0" }}>
              Warranty, installation and delivery information
            </p>
          </div>
          <Blog />
        </section>

        <section
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 4px 18px rgba(20, 33, 61, 0.07)",
          }}
        >
          <div
            style={{
              borderLeft: "7px solid #e51d2a",
              paddingLeft: "16px",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 34px)",
                fontWeight: 900,
                color: "#151515",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Discount
            </h2>
            <p style={{ color: "#6b7280", fontSize: "16px", margin: "5px 0 0" }}>
              Limited offers and special prices selected for you
            </p>
          </div>

          <img
            src="https://file.hstatic.net/200000420363/file/flash-sale-banner-cho-nh_m-hot-promotion-copy.png"
            alt="Flash sale"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />

          <SegmentDiscount />
        </section>

        <section
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 4px 18px rgba(20, 33, 61, 0.07)",
          }}
        >
          <div
            style={{
              borderLeft: "7px solid #e51d2a",
              paddingLeft: "16px",
              marginBottom: "22px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 34px)",
                fontWeight: 900,
                color: "#151515",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Best sellers
            </h2>
            <p style={{ color: "#6b7280", fontSize: "16px", margin: "5px 0 0" }}>
              Popular products chosen by our customers
            </p>
          </div>

          <Row gutter={[16, 16]}>
            {localProducts
              .filter((product: IProduct) => product.isBestSeller)
              .map((product: IProduct) => (
                <Col key={product.id} xs={12} sm={8} lg={4}>
                  <Contents product={product} />
                </Col>
              ))}
          </Row>
        </section>

        <section
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px 24px",
            boxShadow: "0 4px 18px rgba(20, 33, 61, 0.07)",
          }}
        >
          <MessageBanner visitCount={visitCount} />
        </section>
      </div>
    </main>
  );
}
