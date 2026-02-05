import { Button, Flex, Image } from "antd";
import React from "react";
import { FormOutlined, InfoOutlined, SafetyOutlined } from "@ant-design/icons";

export default function ProductImage({ image }: { image: string }) {
  return (
    <Flex
      justify="start"
      align="center"
      vertical
      style={{ height:"100%",backgroundColor: "white", padding: "10px" }}
    >

      <div
        style={{
        width: "100%",        // size khung
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <img src={image}
            style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain"}}/>
      </div>
      <Flex style={{width:"100%"}} align="center" justify={"space-evenly"}>
        {/* Noticeable */}
        <Button 
          style={{
            width: 50,
            height: 50,
            padding: 0,
          }}
        >
        <img
          src="https://theme.hstatic.net/200000420363/1001333448/14/diemnoibat.png?v=6283"
          alt="Noticeable"
          style={{
            maxWidth: "70%",
            maxHeight: "70%",
            objectFit: "contain",
          }}
        />
      </Button>
      {/* Scale */}
      <Button 
          style={{
            width: 50,
            height: 50,
            padding: 0,
          }}
        >
        <img
          src="https://theme.hstatic.net/200000420363/1001333448/14/thongso.png?v=6283"
          alt="Noticeable"
          style={{
            maxWidth: "70%",
            maxHeight: "70%",
            objectFit: "contain",
          }}
        />
      </Button>
      {/* Comment */}
      <Button 
          style={{
            width: 50,
            height: 50,
            padding: 0,
          }}
        >
        <img
          src="https://theme.hstatic.net/200000420363/1001333448/14/iconarticle.png?v=6283"
          alt="Noticeable"
          style={{
            maxWidth: "70%",
            maxHeight: "70%",
            objectFit: "contain",
          }}
        />
      </Button>

      </Flex>

    </Flex>
  );
}
