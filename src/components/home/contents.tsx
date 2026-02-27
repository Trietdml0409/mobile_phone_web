"use client;";

import { IProduct } from "@/shared/types/common.types";
import { Button, Card, Grid } from "antd";
import { Flex } from "antd";
import {
  EyeOutlined,
  SearchOutlined,
  ZoomInOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { ConfigProvider, Popover, Modal } from "antd";
import { useState, useContext } from "react";
import InputNumberBox from "../common/inputNumberBox";
import { LikedContext } from "@/shared/context/likedContext";

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
          isProductInLiked
            ? removeLikedProductIds(product.id)
            : addLikedProductIds(product.id);
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
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={product.image}
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            {product.name}
          </p>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Card
          hoverable
          onClick={(e) => router.push(`/product-details?id=${product.id}`)}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Popover content={popoverContent} trigger="hover">
            <img
              src={product.image}
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />
          </Popover>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            {product.name}
          </p>
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
