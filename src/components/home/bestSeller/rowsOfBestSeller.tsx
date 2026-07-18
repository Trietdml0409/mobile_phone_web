"use client";

import Contents from "../contents";
import { IProduct } from "@/shared/types/common.types";
import { Col, Empty, Pagination, Row } from "antd";
import { useState } from "react";

const PRODUCTS_PER_PAGE = 6;

export default function RowsOfBestSeller({
  products,
}: {
  products: IProduct[];
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const firstProductIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const displayedProducts = products.slice(
    firstProductIndex,
    firstProductIndex + PRODUCTS_PER_PAGE,
  );

  if (products.length === 0) {
    return <Empty description="No best sellers in this category" />;
  }

  return (
    <div style={{ width: "100%" }}>
      <Row gutter={[12, 12]}>
        {displayedProducts.map((product) => (
          <Col key={product.id} xs={12} sm={8} lg={4}>
            <Contents product={product} />
          </Col>
        ))}
      </Row>

      {products.length > PRODUCTS_PER_PAGE && (
        <Pagination
          current={currentPage}
          pageSize={PRODUCTS_PER_PAGE}
          total={products.length}
          showSizeChanger={false}
          onChange={(page) => setCurrentPage(page)}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        />
      )}
    </div>
  );
}
