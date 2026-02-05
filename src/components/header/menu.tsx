import React from "react";
import type { MenuProps } from "antd";
import { Dropdown,Grid,Flex } from "antd";
import { Button } from "antd";
import Link from "next/link";
import { HeartOutlined, CarOutlined, MenuOutlined, ShopOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid


const CategoriesButton = () => {
  const screens = useBreakpoint()
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

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
        <div style={{width:"100%",height:"60%"}}>
        <Button 
        type={"text"}
        style={{
          height: "100%",
          width: "100%", 
          color:"white",
          display:"flex",
          justifyContent:"center",
          fontWeight: 600,
          fontSize:"90%"
        }}>
          {isSmallScreen && (
            <Flex vertical justify={"center"} align="center">
              <MenuOutlined style={{fontSize:"30px"}} />
            </Flex>
            )}
            {!isSmallScreen && (
            <Flex gap={"small"} justify={"center"} align={"center"}>
              <MenuOutlined style={{fontSize:"20px"}} />
              <p style={{fontSize:"15px"}}>Menu</p>
            </Flex>
            )}

        </Button>
        </div>
      </Dropdown>
      
    
  );
};

export default CategoriesButton;
