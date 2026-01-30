import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { Button } from "antd";
import Link from "next/link";
import { HeartOutlined, CarOutlined, MenuOutlined, ShopOutlined } from "@ant-design/icons";

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
    {
      key: "3",
      label: (
        <Link href="/liked" className="cursor-pointer">
          <HeartOutlined /> Liked Products
        </Link>
      )
    }
  ];

  return (

      <Dropdown  trigger={["click"]} menu={{ items }}>
        <div style={{width:"100%"}}>
        <Button 
        style={{
          border: "1.5px solid royalblue",
          height: "38px",
          width: "100%", 
          color:"royalblue",
          display:"flex",
          justifyContent:"center",
          fontWeight: 600,
          background:"royalblue",
          color:"white",
        }}>
          <MenuOutlined /><span style={{color:"white"}}>Menu</span> 
        </Button>
        </div>
      </Dropdown>
      
    
  );
};

export default CategoriesButton;
