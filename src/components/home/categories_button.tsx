import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { Button } from "antd";
import Link from "next/link";
import { CarOutlined, MenuOutlined, ShopOutlined } from "@ant-design/icons";

const CategoriesButton = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/category" className="cursor-pointer">
          <ShopOutlined /> Category
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/product-details" className="cursor-pointer">
          <CarOutlined /> Product Details
        </Link>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Button type="text">
        <MenuOutlined /> Menu
      </Button>
    </Dropdown>
  );
};

export default CategoriesButton;
