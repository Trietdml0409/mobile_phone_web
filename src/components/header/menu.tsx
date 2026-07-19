import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Grid, Flex } from "antd";
import { Button } from "antd";
import Link from "next/link";
import { HeartOutlined, MenuOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

const categoryLink = (label: string, productType: string) => (
  <Link href={`/category?product_type=${productType}`}>{label}</Link>
);

const CategoriesButton = () => {
  const screens = useBreakpoint();
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

  const items: MenuProps["items"] = [
    {
      key: "computer",
      label: "Computer",
      children: [
        {
          key: "PC_Gaming",
          label: categoryLink("PC Gaming", "PC_Gaming"),
        },
        {
          key: "Office_PC",
          label: categoryLink("Office PC", "Office_PC"),
        },
        {
          key: "laptop",
          label: categoryLink("Laptop", "laptop"),
        },
      ],
    },
    {
      key: "components",
      label: "Components",
      children: [
        { key: "cpu", label: categoryLink("CPU", "cpu") },
        { key: "VGA", label: categoryLink("VGA", "VGA") },
        { key: "RAM", label: categoryLink("RAM", "RAM") },
        { key: "SSD", label: categoryLink("SSD", "SSD") },
        { key: "HDD", label: categoryLink("HDD", "HDD") },
        {
          key: "MainBoard",
          label: categoryLink("Mainboard", "MainBoard"),
        },
      ],
    },
    {
      key: "phone-and-tablet",
      label: "Phone and Tablet",
      children: [
        { key: "phone", label: categoryLink("Phone", "phone") },
        { key: "tablet", label: categoryLink("Tablet", "tablet") },
      ],
    },
    {
      key: "Gear",
      label: categoryLink("Gear", "Gear"),
    },
    {
      key: "Accesories",
      label: categoryLink("Accessories", "Accesories"),
    },
    {
      type: "divider",
    },
    {
      key: "liked",
      label: (
        <Link href="/liked">
          <HeartOutlined /> Liked Products
        </Link>
      ),
    },
  ];

  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items,
        triggerSubMenuAction: isSmallScreen ? "click" : "hover",
      }}
      overlayStyle={{ minWidth: isSmallScreen ? "190px" : "220px" }}
    >
      <div style={{ width: "100%" }}>
        <Button
          style={{
            height: isSmallScreen ? "42px" : "46px",
            width: "100%",
            color: isSmallScreen ? "#151515" : "white",
            backgroundColor: isSmallScreen ? "#f3f3f3" : "#151515",
            border: "none",
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: "90%",
            borderRadius: "6px",
          }}
        >
          {isSmallScreen ? (
            <Flex vertical justify="center" align="center">
              <MenuOutlined style={{ fontSize: "23px" }} />
            </Flex>
          ) : (
            <Flex gap="small" justify="center" align="center">
              <MenuOutlined style={{ fontSize: "20px" }} />
              <p style={{ fontSize: "15px", margin: 0 }}>
                Product categories
              </p>
            </Flex>
          )}
        </Button>
      </div>
    </Dropdown>
  );
};

export default CategoriesButton;
