"use client;";

import { IProduct } from "@/shared/types/common.types";
import { Button, Card, Grid } from "antd";
import { Flex } from "antd";
import {
  EyeOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Popover, Modal } from "antd";
import { useState, useContext } from "react";
import InputNumberBox from "../common/inputNumberBox";
import { LikedContext } from "@/shared/context/likedContext";
import { CartContext } from "@/shared/context/cartContext";
import ProductPrice from "../common/productPrice";


const { useBreakpoint } = Grid;

export default function Contents({ product }: { product: IProduct }) {
  //Set the state for the Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const router = useRouter();
  const screens = useBreakpoint();
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

  const { likedProductIds, addLikedProductIds, removeLikedProductIds } =
    useContext(LikedContext);
  const isProductInLiked = likedProductIds.includes(product.id);

  const { cartProducts, addProductToCart, removeProductFromCart } =
    useContext(CartContext);
  const isProductInCart = product.id in cartProducts;

  const popoverContent = (
    <Flex gap="small">
      <Button
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/product-details?id=${product.id}`);
        }}
        shape="circle"
        style={{
          color: "#e21d2b",
          border: "1px solid #e21d2b",
        }}
      >
        <EyeOutlined />
      </Button>
      <Button
        shape="circle"
        style={{
          color: "#e21d2b",
          border: "1px solid #e21d2b",
        }}
        onClick={(e) => {
          e.stopPropagation();
          showModal(e);
        }}
      >
        <SearchOutlined />
      </Button>


      <Button
        shape="circle"
        style={isProductInLiked ? {
          backgroundColor: "#e21d2b",
          color: "white",
          border: "1px solid #e21d2b",
        }
        :{
          color: "#e21d2b",
          border: "1px solid #e21d2b",
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (isProductInLiked) {
            removeLikedProductIds(product.id);
          } else {
            addLikedProductIds(product.id);
          }
        }}
      >
        <HeartOutlined
          style={
            isProductInLiked
              ? {
                  color: "white",
                  transform: "scale(1.3)",
                  transition: "all 0.3s ease",
                }
              : {}
          }
        />
      </Button>
    </Flex>
  );

  if (isSmallScreen) {
    return (
      <>
        <Card
  hoverable
  onClick={() => router.push(`/product-details?id=${product.id}`)}
  style={{
    height: "100%",
    width: "100%",
  }}
  styles={{
    body: {
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "12px",
    },
  }}
>
  <Popover content={popoverContent} trigger="hover">
    <div
      style={{
        width: "100%",
        height: "130px",
        padding: "3px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  </Popover>

  <div
    style={{
      margin: "2px",
      width: "100%",
      height: "54px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <p
      style={{
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "18px",
        margin: 0,
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {product.name}
    </p>
  </div>

  <p
    style={{
      fontSize: "11px",
      textAlign: "center",
      color: "gray",
      margin: "2px 0",
      minHeight: "18px",
    }}
  >
    {product.brandName}
  </p>

  <div style={{ margin: "2px 0 8px", height: "42px" }}>
    <ProductPrice product={product} fontSize="12px" />
  </div>

  <Button
    icon={<ShoppingCartOutlined />}
    style={{
      backgroundColor: isProductInCart ? "#151515" : "#e21d2b",
      color: "white",
      width: "100%",
      marginTop: "auto",
    }}
    onClick={(e) => {
      e.stopPropagation();
      isProductInCart
        ? removeProductFromCart(product.id)
        : addProductToCart(product, 1);
    }}
  >
    {isProductInCart ? "Remove" : "Add"}
  </Button>
</Card>
      </>
    );
  } else {
    return (
      <>
        <Card
          hoverable
          onClick={() => router.push(`/product-details?id=${product.id}`)}
          style={{
            height: "100%",
            width: "100%",
          }}
          styles={{
            body: {
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
            },
          }}
        >
          <Popover content={popoverContent} trigger="hover">
                      <div
            style={{
              height: "160px",
              width: "100%",
              padding: "3px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >   
          <img
              src={product.image}
              alt={product.name}
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                objectFit: "contain",
              }}
            />
          </div>
          </Popover>

          <div style={{
            margin:"2px",
            width:"100%",
            height:"54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "center",
              lineHeight: "18px",
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.name}
          </p>
          </div>

          <p
            style={{
              fontSize: "11px",
              textAlign: "center",
              color: "gray",
              margin: "2px 0",
              minHeight: "18px",
            }}
          >
            {product.brandName}
          </p>
          <div style={{ margin: "2px 0 8px", height: "42px" }}>
            <ProductPrice product={product} fontSize="12px" />
          </div>
          <Button
            icon={<ShoppingCartOutlined />}
            style={
              !isProductInCart
                ? {
                    backgroundColor: "#e21d2b",
                    color: "white",
                    marginTop: "auto",
                    width:"100%"
                  }
                : { backgroundColor: "#151515", color: "white", marginTop: "auto", width:"100%"}
            }
            onClick={(e) => {
              e.stopPropagation();
              isProductInCart
                ? removeProductFromCart(product.id)
                : addProductToCart(product, 1);
            }}
          >
            {isProductInCart ? "Remove" : "Add"}
          </Button>
        </Card>

        {/* The modal */}
        <Modal
          title="Basic Modal"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
        >
          <Flex gap="small">
            <img
              src={product.image}
              alt="cover"
              style={{
                width: "50%",
                height: "50%",
                objectFit: "contain", // scales image to fit without distortion
              }}
            />
            <Flex vertical>
              <p
                style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                {product.name}
              </p>
              <ProductPrice product={product} fontSize="15px" textAlign="left" />
              <p>{product.ShortDes}</p>
              <p>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Brand:
                </span>{" "}
                {product.brandName}
              </p>
              <p>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  ID:
                </span>{" "}
                {product.id}
              </p>

              <span style={{ margin: "10px" }}>
                <InputNumberBox product={product} />
              </span>
            </Flex>
          </Flex>
        </Modal>
      </>
    );
  }
}
