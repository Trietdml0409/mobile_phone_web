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
import ListCardProducts from "@/components/checkouts/listCartProducts";

const CheckoutTitle = ({ title }: { title: string }) => {
  return (

      <p style={{ paddingBottom:"10px",fontSize: "20px", color: "black", fontWeight: "bold" }}>
        {title}
      </p>
    
  );
};

const { useBreakpoint } = Grid;

type FieldType = {
  username?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};
const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{ width: 70 }}
      placeholder={"86"}
      options={[
        { label: "+86", value: "86" },
        { label: "+87", value: "87" },
      ]}
    />
  </Form.Item>
);

const region = (
  <Form.Item name="region" noStyle>
    <Select
      size="large"
      placeholder={"Choose your region/city"}
      options={[
        { label: "HCMC", value: "hcmc" },
        { label: "Hanoi", value: "hanoi" },
      ]}
    />
  </Form.Item>
);

const payment = (
  <Form.Item name="paymentMethod" noStyle>
    <Select
      size="large"
      placeholder={"Choose your payment method"}
      options={[
        { label: "COD", value: "Cash on deliver" },
        { label: "Online banking", value: "onlineBanking" },
        { label: "ATM/Visa/Master/JCB/Amex/QR Code", value: "card" },
      ]}
    />
  </Form.Item>
);

const ward = (
  <Form.Item name="ward" noStyle>
    <Select
      size="large"
      placeholder={"Choose your ward"}
      options={[
        { label: "An Hoi Tay", value: "anHoiTay" },
        { label: "Cho Lon", value: "choLon" },
      ]}
    />
  </Form.Item>
);





export default function Payment() {
  const screens = useBreakpoint();

  //  sm < md < lg < xl < xxl.
  //  xs: independent
  // => lg = true => md, sm = true
  // => md true => sm =true
  // => sm =true
  // sm = true => xs = false (special case)

  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

  return (
    <Flex
      vertical
      gap="small"
      style={{
        background: "white",
        minHeight: "100vh",
        minWidth: "100vw",
        padding: "24px",
      }}
    >
      {isSmallScreen && (
        <CheckoutTitle title="Thông tin Checkout" />
      )}
      {/* // grid layout 60%- 40% for large screen, 100% for md/sm screen  */}
      <Row gutter={[24, 24]}>
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
            <CheckoutTitle title="Checkout Information" />
          )}

          <Form
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[10,16]}>

            
              <Col span={24}>
                <p style={{fontSize: "20px", color: "royalblue" }}>
                  Delivery information
                </p>
              </Col>
              
              {/* INPUT THE USERNAME HERE */}
              <Col span={24}>
                <Form.Item<FieldType>
                  name="username"
                  rules={[{ required: true, message: "Please input your name" }]}
                >
                  <Input placeholder="Username" size="large" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail"!,
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Email" size="large" />
                </Form.Item>
                </Col>

              <Col span={24}>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                    {
                      pattern: /^[0-9]{9,11}$/,
                      message: "The input is not valid phone number!",
                    },
                  ]}
                >
                  {/* Demo only, real usage should wrap as custom component */}
                  <Space.Compact block>
                    {prefixSelector}
                    <Input
                      placeholder="Phone Number"
                      style={{ width: "100%" }}
                      size="large"
                    />
                  </Space.Compact>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address!",
                    },
                  ]}
                >
                  <Input placeholder="Email" size="large" />
                </Form.Item>
              </Col>

              <Col span="12" style={{display:"flex", justifyContent:"flex-start"}}>{region}</Col>
              <Col span="12" style={{display:"flex", justifyContent:"flex-start"}}>{ward}</Col>
              
              <Col span={24}>
                <p style={{ fontSize: "20px", color: "royalblue" }}>
                  Payment Method
                </p>
              </Col>
              
              <Col span="24">{payment}</Col>

              <Col span="24">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Col span="24">
            <Button type="primary" style={{ width: "100%" }}>Return to card</Button>
            </Col>
          </Form>
          


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
