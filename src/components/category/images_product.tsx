import { Button, Flex } from "antd";
import React from "react";
import { FormOutlined, InfoOutlined, SafetyOutlined } from "@ant-design/icons";

export default function ImagesProduct({image}:{image:string}) {
  return (
    <Flex
      justify="start"
      align="center"
      vertical
      style={{ backgroundColor: "white", flex: 1 }}
    >
      <img
        style={{ height: "70%", width: "90%" }}
        src={image}
      />
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
