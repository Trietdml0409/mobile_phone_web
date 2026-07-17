import React from "react";
import type { MenuProps } from "antd";
import { Dropdown,Grid,Flex } from "antd";
import { Button } from "antd";
import Link from "next/link";
import { HeartOutlined, MenuOutlined, ShopOutlined } from "@ant-design/icons";

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
          height: isSmallScreen ? "42px" : "46px",
          width: "100%", 
          color: isSmallScreen ? "#151515" : "white",
          backgroundColor: isSmallScreen ? "#f3f3f3" : "#151515",
          border: "none",
          display:"flex",
          justifyContent:"center",
          fontWeight: 600,
          fontSize:"90%",
          borderRadius: "6px",
        }}>
          {isSmallScreen && (
            <Flex vertical justify={"center"} align="center">
              <MenuOutlined style={{fontSize:"23px"}} />
            </Flex>
            )}
            {!isSmallScreen && (
            <Flex gap={"small"} justify={"center"} align={"center"}>
              <MenuOutlined style={{fontSize:"20px"}} />
              <p style={{fontSize:"15px", margin: 0}}>Product categories</p>
            </Flex>
            )}

        </Button>
        </div>
      </Dropdown>
      
    
  );
};

export default CategoriesButton;
