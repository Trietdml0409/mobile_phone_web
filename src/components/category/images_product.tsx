import { Button, Flex, Image } from "antd";
import React from "react";
import { FormOutlined, InfoOutlined, SafetyOutlined } from "@ant-design/icons";

export default function ProductImage({ image }: { image: string }) {
  return (
    <Flex
      justify="start"
      align="center"
      vertical
      style={{ backgroundColor: "white", padding: "10px" }}
    >
      <Flex
        justify="center"
        align="center"
        style={{ width: "300px", height: "250px" }}
      >
        <Image
          // width={250}
          src={image}
          alt="product image"
          preview={false}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Flex>
      <Flex
        gap="small"
        justify="center"
        align="center"
        style={{ height: "20%", width: "90%", backgroundColor: "white" }}
      >
        <Flex
          justify="start"
          align="center"
          style={{ flex: 1, color: "black" }}
          vertical
        >
          <Button shape="default" icon={<FormOutlined />} />
          Comment
        </Flex>
        <Flex
          justify="start"
          align="center"
          style={{ flex: 1, color: "black" }}
          vertical
        >
          <Button shape="default" icon={<SafetyOutlined />} />
          Noticeable
        </Flex>
        <Flex
          justify="start"
          align="center"
          style={{ flex: 1, color: "black" }}
          vertical
        >
          <Button shape="default" icon={<InfoOutlined />} />
          Information
        </Flex>
      </Flex>
    </Flex>
  );
}
