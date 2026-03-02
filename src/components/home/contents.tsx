"use client;";

import { IProduct } from "@/shared/types/common.types";
import { Button, Card, Grid } from "antd";
import { Flex } from "antd";
import {
  EyeOutlined,
  SearchOutlined,
  ZoomInOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Popover, Modal } from "antd";
import { useState, useContext } from "react";
import InputNumberBox from "../common/inputNumberBox";
import { LikedContext } from "@/shared/context/likedContext";
import { CartContext } from "@/shared/context/cartContext";

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
          color: "royalblue", // makes the icon white
          border: "1px solid royalblue", // removes default border
        }}
      >
        <EyeOutlined />
      </Button>
      <Button
        shape="circle"
        style={{
          color: "royalblue", // makes the icon white
          border: "1px solid royalblue", // removes default border
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
        style={{
          color: "royalblue", // makes the icon white
          border: "1px solid royalblue", // removes default border
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ZoomInOutlined />
      </Button>

      <Button
        shape="circle"
        style={{
          color: "royalblue",
          border: "1px solid royalblue",
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
                  color: "red",
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            minHeight: "260px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            {product.name}
          </p>
          <p
            style={{
              fontSize: "11px",
              textAlign: "center",
              color: "gray",
              margin: "2px 0",
            }}
          >
            {product.brandName}
          </p>
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              color: "rosybrown",
              fontWeight: "bold",
              margin: "2px 0 8px",
            }}
          >
            {product.price.toLocaleString()} VND
          </p>
          <Button
            size="small"
            icon={<ShoppingCartOutlined />}
            style={
              !isProductInCart
                ? {
                    backgroundColor: "royalblue",
                    color: "white",
                    marginTop: "auto",
                    width:"100%"
                  }
                : { backgroundColor: "red", color: "white", marginTop: "auto",width:"100%" }
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
      </>
    );
  } else {
    return (
      <>
        <Card
          hoverable
          onClick={() => router.push(`/product-details?id=${product.id}`)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            minHeight: "260px",
          }}
        >
          <Popover content={popoverContent} trigger="hover">
            <img
              src={product.image}
              alt={product.name}
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
          </Popover>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            {product.name}
          </p>
          <p
            style={{
              fontSize: "11px",
              textAlign: "center",
              color: "gray",
              margin: "2px 0",
            }}
          >
            {product.brandName}
          </p>
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              color: "rosybrown",
              fontWeight: "bold",
              margin: "2px 0 8px",
            }}
          >
            {product.price.toLocaleString()} VND
          </p>
          <Button
            icon={<ShoppingCartOutlined />}
            style={
              !isProductInCart
                ? {
                    backgroundColor: "royalblue",
                    color: "white",
                    marginTop: "auto",
                    width:"100%"
                  }
                : { backgroundColor: "red", color: "white", marginTop: "auto", width:"100%"}
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
              <p
                style={{
                  color: "rosybrown",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Price: {product.price}
              </p>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown.
              </p>
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
