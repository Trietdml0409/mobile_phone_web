"use client";
import ProductInformation from "@/components/checkouts/productInformation";
import DiscountCode from "@/components/checkouts/discountCode";
import { Flex, Divider } from "antd";
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
      defaultValue={"86"}
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
      defaultValue={"Choose your region/city"}
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
      defaultValue={"Choose your payment method"}
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
      defaultValue={"Choose your ward"}
      options={[
        { label: "An Hoi Tay", value: "anHoiTay" },
        { label: "Cho Lon", value: "choLon" },
      ]}
    />
  </Form.Item>
);

//Responsive Box
function ResponsiveBox({ isSmallScreen }: { isSmallScreen: boolean }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(128,128,128,0.1)",
        width: isSmallScreen ? "100%" : "50%",
        height: "auto",
        order: isSmallScreen ? 0 : 0,
        marginLeft: isSmallScreen ? 0 : "auto",
      }}
    >
      <ProductInformation />
      <DiscountCode />
      <div
        style={{
          padding: "10px",
          borderLeft: "2px solid rgba(128, 128, 128, 0.3)",
          borderRight: "2px solid rgba(128, 128, 128, 0.3)",
          borderBottom: "2px solid rgba(128, 128, 128, 0.3)",
        }}
      >
        <p style={{ fontSize: "20px", color: "royalblue" }}>Delivery Fee</p>
        <p style={{ color: "black" }}>
          The Delivery fee will be charged after the delivery complete
          <br />
          Shipping inside Vietnam
        </p>
      </div>
      <div
        style={{
          padding: "10px",
          borderLeft: "2px solid rgba(128, 128, 128, 0.3)",
          borderRight: "2px solid rgba(128, 128, 128, 0.3)",
          borderBottom: "2px solid rgba(128, 128, 128, 0.3)",
        }}
      >
        <Flex justify="space-between" align="center" style={{ gap: "40px" }}>
          <p
            style={{ fontSize: "20px", color: "royalblue", fontWeight: "bold" }}
          >
            Total Amount:
          </p>
          <p style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
            Price
          </p>
        </Flex>
      </div>
    </div>
  );
}

export default function Payment() {
  const router = useRouter();

  //checks if the screen width is less than 800px to decide if it’s a small screen.
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth < 800 : false
  );

  useEffect(() => {
    //checks if the screen width is less than 800px to decide if it’s a small screen.
    const handleResize = () =>
      setIsSmallScreen(
        typeof window !== "undefined" ? window.innerWidth < 800 : false
      );
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () =>
      typeof window !== "undefined" &&
      window?.removeEventListener("resize", handleResize);
  }, []);

  // conditional
  if (typeof window === "undefined")
    return (
      <>
        <LoadingOutlined />
        Loading...
      </>
    );

  return (
    <>
      <div
        style={{
          background: "white",
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflowY: "auto",
        }}
      >
        <Flex vertical style={{ flex: 1 }}>
          <Flex gap={10} style={{ paddingLeft: "10px" }}>
            <p
              style={{
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "30px",
                color: "black",
              }}
            >
              Webpage.com
            </p>
          </Flex>
          {isSmallScreen && <ResponsiveBox isSmallScreen={isSmallScreen} />}
          <Flex gap={10} style={{ paddingLeft: "10px" }} vertical>
            <Form
              name="basic"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <p style={{ color: "black" }}>
                <p style={{ fontSize: "20px", color: "royalblue" }}>
                  Delivery information
                </p>
              </p>
              <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: "Please input your name" }]}
              >
                <Input placeholder="Username" size="large" />
              </Form.Item>
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
              <Flex style={{ gap: "10px" }}>
                {region}
                {ward}
              </Flex>
              <p style={{ color: "black" }}>
                <p style={{ fontSize: "20px", color: "royalblue" }}>
                  Payment Method
                </p>
              </p>
              {payment}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <Button
              style={{ width: "70%" }}
              onClick={() => router.push(`/cart`)}
            >
              Back to Cart
            </Button>
          </Flex>
        </Flex>
        {!isSmallScreen && <ResponsiveBox isSmallScreen={isSmallScreen} />}
      </div>
    </>
  );
}
