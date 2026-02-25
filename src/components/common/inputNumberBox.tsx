"use client";

import React, { useState } from "react";
import type { InputNumberProps } from "antd";
import { Button, Flex, InputNumber } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { CartContext } from "@/shared/context/cartContext";
import { IProduct } from "@/shared/types/common.types";

const onChange: InputNumberProps["onChange"] = (value) => {};

const sharedProps = {
  mode: "spinner" as const,
  min: 1,
  max: 10,
  defaultValue: 3,
  onChange,
  style: { width: 150 },
};

const InputNumberBox = ({ product }: { product: IProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  return (
    <Flex gap="small">
      <InputNumber
        {...sharedProps}
        placeholder="Quantity"
        min={1}
        max={10}
        value={quantity}
        onChange={(value) => setQuantity(Number(value) || 1)}
      />

      <Button
        icon={<ShoppingCartOutlined />}
        style={{
          backgroundColor: "royalblue",
          color: "white", // ensure text is visible
        }}
        onClick={() => addProductToCart(product, quantity)}
      >
        Add to Cart
      </Button>
    </Flex>
  );
};

export default InputNumberBox;
