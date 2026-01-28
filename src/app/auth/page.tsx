"use client";

import { useState } from "react";
//Including importing Form
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
  //Form.useForm return an Array
  //Right now it only return form  instancem wrapped in an array for consistency
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
      {/*This form is in a type of card */}
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
        {/*TITLE*/}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Title level={2} style={{ marginBottom: "8px" }}>
            Welcome Back
          </Title>
          <Text type="secondary" style={{ fontSize: "16px" }}>
            Sign in to your account
          </Text>
        </div>


        {/*Form begin here */}
        <Form
          //- Passing form={form} into <Form> tells Ant Design: “Use this specific form instance to control the form.
          form={form}
          layout="vertical"
          size="large"
          autoComplete="off"
          scrollToFirstError={true} 
          variant="underlined" 
        >
          {/*Item is a sub component of Form that represents a single fields
          connect input component to the form instance and handle labels, validation, layout
          
          We can pass Rules for 
          */}
          <Form.Item
            name="email"
            //Label
            label={
              <Text strong style={{ fontSize: "14px" , padding: '10px 12px'}}>
                Email Address
              </Text>
            }
            //Some rules
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
            {/*Input inside the form*/}
            <Input
              //Prefic and suffix
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
          
          {/*Second form item*/}
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
                //Visible or Invisible
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
