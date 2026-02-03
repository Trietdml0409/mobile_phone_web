"use client";
import ProductInformation from "@/components/checkouts/productInformation";
import DiscountCode from "@/components/checkouts/discountCode";
import { Flex, Divider, Row, Col, Grid } from "antd";
import { useState, useEffect } from "react";
import { FormProps } from "antd";
import {
  Space,
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  InputNumber,
} from "antd";
import { useRouter } from "next/navigation"; // for App Router
import { LoadingOutlined } from "@ant-design/icons";
import ListCardProducts from "@/components/checkouts/listCardProducts";

const CheckoutTitle = ({ title }: { title: string }) => {
  return (
    <div style={{ padding: "10px" }}>
      <p style={{ fontSize: "20px", color: "black", fontWeight: "bold" }}>
        {title}
      </p>
    </div>
  );
};

const { useBreakpoint } = Grid;

export default function Payment() {
  const screens = useBreakpoint();

  //  xs: independent
  //  sm < md < lg < xl < xxl.
  // => lg = true => md, sm = true
  // => md true => sm =true
  // => sm =true
  // sm = true => xs = false (special case)

  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

  return (
    <Flex
      vertical
      style={{
        background: "white",
        minHeight: "100vh",
        minWidth: "100vw",
        padding: "24px",
      }}
    >
      {isSmallScreen && (
        <CheckoutTitle title="Thông tin Checkout for small screen" />
      )}
      {/* // grid layout 60%- 40% for large screen, 100% for md/sm screen  */}
      <Row>
        <Col
          xs={{
            span: 24,
            order: 2,
          }}
          sm={{
            span: 24,
            order: 2,
          }}
          md={{
            span: 12,
            order: 2,
          }}
          lg={{
            span: 16,
            order: 2,
          }}
          xl={{
            span: 16,
            order: 2,
          }}
          style={{
            height: "100%",
            color: "blueviolet",
            backgroundColor: "rgba(128,128,128,0.1)",
          }}
        >
          {!isSmallScreen && (
            <CheckoutTitle title="Thông tin Checkout for larger screen" />
          )}
          Thong tin giao hang
        </Col>
        <Col
          xs={{
            span: 24,
            order: 1,
          }}
          sm={{
            span: 24,
            order: 1,
          }}
          md={{
            span: 12,
            order: 2,
          }}
          lg={{
            span: 8,
            order: 2,
          }}
          xl={{
            span: 8,
            order: 2,
          }}
          style={{}}
        >
          <ListCardProducts />
        </Col>
      </Row>
    </Flex>
  );
}
