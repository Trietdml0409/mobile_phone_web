import { IProduct } from "@/shared/types/common.types";
import { Button, Flex } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { LikedContext } from "@/shared/context/likedContext";
import { CartContext } from "@/shared/context/cartContext";
import { useRouter } from "next/navigation";

export default function LikedProductCard({ product }: { product: IProduct }) {
  const router = useRouter();

  const { removeLikedProductIds, likedProductIds } = useContext(LikedContext);
  const { cartProducts, addProductToCart, removeProductFromCart } =
    useContext(CartContext);

  const isProductInCart = product.id in cartProducts;
  const isProductInLiked = likedProductIds.includes(product.id);

  return (
    <Flex
      key={product.id}
      align="center"
      justify="start"
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "6px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        border: "1px solid rgb(224, 224, 224)",
      }}
      vertical
    >
      <Flex justify="center" align="center">
        <div
          style={{
            height: "160px",
            width: "80%",
            padding: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "15%",
              objectFit: "contain",
            }}
            src={product.image}
            alt={product.name}
          />
        </div>
      </Flex>

      <p style={{ color: "black", fontSize: "100%", fontWeight: "bold" }}>
        {product.name}
      </p>
      <p
        style={{
          fontSize: "100%",
          fontWeight: "bold",
          textAlign: "center",
          color: "rosybrown",
        }}
      >
        {product.price.toLocaleString()} VND
      </p>
      <p
        style={{
          fontSize: "100%",
          fontWeight: "bold",
          textAlign: "center",
          color: "grey",
        }}
      >
        {product.brandName}
      </p>

      <Flex
        justify="center"
        align="center"
        style={{ padding: "10px" }}
        gap="small"
      >
        <Button
          size="small"
          icon={<ShoppingCartOutlined />}
          style={
            !isProductInCart
              ? { backgroundColor: "royalblue", color: "white" }
              : { backgroundColor: "red", color: "white" }
          }
          onClick={() =>
            isProductInCart
              ? removeProductFromCart(product.id)
              : addProductToCart(product, 1)
          }
        >
          {isProductInCart ? "Remove" : "Add"}
        </Button>

        <Button
          size="small"
          icon={
            <HeartOutlined
              style={
                isProductInLiked
                  ? {
                      color: "red",
                      transform: "scale(1.5)",
                      transition: "all 0.3s ease",
                    }
                  : {}
              }
            />
          }
          onClick={() => removeLikedProductIds(product.id)}
        ></Button>

        <Button
          size="small"
          icon={<EyeOutlined />}
          onClick={() => router.push(`/product-details?id=${product.id}`)}
        ></Button>
      </Flex>
    </Flex>
  );
}
