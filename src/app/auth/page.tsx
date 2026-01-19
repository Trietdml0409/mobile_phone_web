"use client";

import { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  Space,
  Divider,
} from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function AuthPage() {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "440px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
        bodyStyle={{
          padding: "40px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Title level={2} style={{ marginBottom: "8px" }}>
            Welcome Back
          </Title>
          <Text type="secondary" style={{ fontSize: "16px" }}>
            Sign in to your account
          </Text>
        </div>

        <Form
          form={form}
          layout="vertical"
          size="large"
          autoComplete="off"
          scrollToFirstError={true}
          variant="underlined"
        >
          <Form.Item
            name="email"
            label={
              <Text strong style={{ fontSize: "14px" , backgroundColor: '#f0f0f0', padding: '10px 12px'}}>
                Email Address
              </Text>
            }
            rules={[
              {
                required: true,
                message: "Please enter your email address",
              },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: "#bfbfbf" }} />}
              suffix={<InfoCircleOutlined style={{ color: "#bfbfbf" , cursor: 'pointer'}} />}
              allowClear={true}
              placeholder="Enter your email"
              style={{
                borderRadius: "8px",
                padding: "10px 12px",
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={
              <Text strong style={{ fontSize: "14px" }}>
                Password
              </Text>
            }
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? (
                  <EyeTwoTone style={{ color: "#bfbfbf" }} />
                ) : (
                  <EyeInvisibleOutlined style={{ color: "#bfbfbf" }} />
                )
              }
              style={{
                borderRadius: "8px",
                padding: "10px 12px",
              }}
            />
          </Form.Item>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "24px",
            }}
          >
            <Button
              type="link"
              style={{
                padding: 0,
                height: "auto",
                fontSize: "14px",
              }}
            >
              Forgot password?
            </Button>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                height: "48px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <Divider style={{ margin: "24px 0" }}>
          <Text type="secondary" style={{ fontSize: "14px" }}>
            OR
          </Text>
        </Divider>

        <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
          <Text
            type="secondary"
            style={{
              textAlign: "center",
              display: "block",
              fontSize: "14px",
            }}
          >
            Don&apos;t have an account?{" "}
            <Button
              type="link"
              style={{
                padding: 0,
                height: "auto",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Sign up
            </Button>
          </Text>
        </Space>
      </Card>
    </div>
  );
}
