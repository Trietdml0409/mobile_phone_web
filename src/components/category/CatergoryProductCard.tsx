import { CartContext } from "@/shared/context/cartContext";
import { LikedContext } from "@/shared/context/likedContext";
import { IProduct } from "@/shared/types/common.types";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Flex, Button,Card } from "antd";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface CatergoryProductCardProps {
  product: IProduct;
}

export default function CatergoryProductCard({
  product,
}: CatergoryProductCardProps) {
  const router = useRouter();

  const { cartProducts, addProductToCart, removeProductFromCart } =
    useContext(CartContext);
  const { likedProductIds, addLikedProductIds, removeLikedProductIds } =
    useContext(LikedContext);

  const isProductInCart = product.id in cartProducts;
  const isProductInLiked = likedProductIds.includes(product.id);

  return (
  <Card
    hoverable
    key={product.id}
    style={{
    height: "100%",
    width: "100%",
    borderRadius: "6px",
    cursor: "pointer",
    display:"flex",
    alignItems: "center",
    justifyContent:"start",
    flexDirection: "column"
    }}
    onClick={() => router.push(`/product-details?id=${product.id}`)}>
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
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "15%",
              objectFit: "contain",
            }}
            src={product.image}
          />
        </div>
      </Flex>

      <p style={{ color: "black", fontSize: "100%", fontWeight: "bold" }}>
        {product.name}
      </p>
      {/* price */}
      <p
        style={{
          fontSize: "100%",
          fontWeight: "bold",
          textAlign: "center",
          color: "rosybrown",
        }}
      >
        {/*Changing the currency to local string */}
        {product.price.toLocaleString()} VND
      </p>
      {/* Action Button */}
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
          onClick={(e) => {
            e.stopPropagation();
            isProductInCart
              ? removeProductFromCart(product.id)
              : addProductToCart(product, 1);
          }}
        >
          {isProductInCart ? "Remove" : "Add"}
        </Button>
        <Button
          size="small"
          icon={
            <HeartOutlined
              style={{
                ...(isProductInLiked
                  ? {
                      color: "red",
                      transform: "scale(1.5)",
                      transition: "all 0.3s ease",
                    }
                  : {}),
              }}
            />
          }
          onClick={(e) => {
            e.stopPropagation();
            isProductInLiked
              ? removeLikedProductIds(product.id)
              : addLikedProductIds(product.id);
          }}
        ></Button>
    </Flex>
  </Card>
  );
}
