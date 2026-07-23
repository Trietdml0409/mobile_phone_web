"use client";

import { Col, Empty, Pagination, Row } from "antd";
import Contents from "../contents";
import { IProduct } from "@/shared/types/common.types";
import { useState } from "react";

const PRODUCTS_PER_PAGE = 6;

export default function RowsOfDiscount({
  DiscountTypeProducts,
}: {
  DiscountTypeProducts: IProduct[];
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const firstProductIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const lastProductIndex = firstProductIndex + PRODUCTS_PER_PAGE;
  const displayedProducts = DiscountTypeProducts.slice(
    firstProductIndex,
    lastProductIndex,
  );

  if (DiscountTypeProducts.length === 0) {
    return <Empty description="No products for this discount" />;
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Row gutter={[12, 12]}>
        {displayedProducts.map((product) => (
          <Col key={product.id} xs={12} sm={8} lg={4} style={{ display: "flex" }}>
            <Contents product={product} />
          </Col>
        ))}
      </Row>

      {DiscountTypeProducts.length > PRODUCTS_PER_PAGE && (
        <Pagination
          current={currentPage}
          pageSize={PRODUCTS_PER_PAGE}
          total={DiscountTypeProducts.length}
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
