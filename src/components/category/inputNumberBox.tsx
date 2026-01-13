"use client";

import React from "react";
import type { InputNumberProps } from "antd";
import { Button, Flex, InputNumber } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const onChange: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value);
};

const sharedProps = {
  mode: "spinner" as const,
  min: 1,
  max: 10,
  defaultValue: 3,
  onChange,
  style: { width: 150 },
};

const InputNumberBox = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
}) => {
  return (
    <Flex gap="small">
      <InputNumber
        {...sharedProps}
        placeholder="Outlined"
        value={quantity}
        onChange={(value) => setQuantity(Number(value))}
      />
      <Button
        icon={<ShoppingCartOutlined />}
        onClick={() => setQuantity(quantity + 1)}
      >
        ADD TO CART
      </Button>
    </Flex>
  );
};

export default InputNumberBox;
