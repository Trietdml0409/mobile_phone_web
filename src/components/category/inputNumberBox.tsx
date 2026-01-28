"use client";

import React from "react";
import type { InputNumberProps } from "antd";
import { Button, Flex, InputNumber } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {useContext} from "react";
import {CartContext} from "@/shared/context/cartContext"
import {IProduct} from "@/shared/types/common.types"


const onChange: InputNumberProps["onChange"] = (value) => {
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
  product,
  quantity,
  setQuantity,
}: {
  product: IProduct;
  quantity: number;
  setQuantity: (quantity: number) => void;
}) => {
  const {productIds: cartProductIds,addProductId: addCartProductId,removeProductId:removeCartProductId,clearCart:clearCart} = useContext(CartContext)
  const isProductAddToCart: boolean = cartProductIds.includes(product.id)

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
        style={{
          backgroundColor: isProductAddToCart ? "red" : "royalblue",
          color: "white", // ensure text is visible
        }}
        onClick={()=>
          isProductAddToCart 
          ? removeCartProductId(product.id)
          : addCartProductId(product.id)
        }
      >
        {isProductAddToCart ? "Remove" : "Add"}
      </Button>
    </Flex>
  );
};


export default InputNumberBox;
