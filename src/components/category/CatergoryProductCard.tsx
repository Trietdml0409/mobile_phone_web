import { CartContext } from "@/shared/context/cartContext";
import { IProduct } from "@/shared/types/common.types";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Flex, Button } from "antd";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface CatergoryProductCardProps {
  product: IProduct;
  isLiked: boolean;
  toggleLike: () => void;
}

export default function CatergoryProductCard({
  product,
  isLiked,
  toggleLike,
}: CatergoryProductCardProps) {
  const router = useRouter();

  const { productIds, addProductId, removeProductId } = useContext(CartContext);

  const isProductInCart = productIds.includes(product.id);

  return (
    <Flex
      key={product.id} // unique key to distinguish each product
      align="center"
      justify="start"
      style={{
        height: "350px",
        width: "220px",
        borderRadius: "6px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        border: "1px solid rgb(224, 224, 224)",
      }}
      vertical
    >
      <Flex justify="center" align="center" style={{ height: "240px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          style={{
            height: "auto",
            width: "200px",
            borderRadius: "15%",
            objectFit: "fill",
          }}
          src={product.image}
        />
      </Flex>
      {/* TODO: @triet thêm onClick vào tên sản phẩm để navigate đến product-details */}
      {/* Hint: có thể wrap trong một div hoặc thẻ có thể click được */}
      <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
        {product.name}
      </p>
      {/* price */}
      <p
        style={{
          fontSize: "24px",
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
        style={{ height: "50px" }}
        gap="small"
      >
        <Button
          icon={<ShoppingCartOutlined />}
          style={
            !isProductInCart
              ? { backgroundColor: "royalblue", color: "white" }
              : { backgroundColor: "red", color: "white" }
          }
          onClick={() =>
            isProductInCart
              ? removeProductId(product.id)
              : addProductId(product.id)
          }
        >
          {isProductInCart ? "Remove" : "Add"}
        </Button>
        <Button
          icon={
            <HeartOutlined
              style={{
                ...(isLiked
                  ? {
                      color: "red",
                      transform: "scale(1.5)",
                      transition: "all 0.3s ease",
                    }
                  : {}),
              }}
            />
          }
          onClick={toggleLike}
          // TODO: @triet thêm onClick handler để toggle favorite
          // Hint: tạo hàm handleToggleFavorite(productId)
          // Nếu productId đã có trong favorites thì xóa, nếu chưa thì thêm vào
          // TODO: @triet thay đổi màu button khi sản phẩm đã được yêu thích
          // Hint: kiểm tra product.id có trong favorites state không
        ></Button>
        <Button
          icon={<EyeOutlined />}
          // Hint: sử dụng useRouter từ next/navigation và router.push('/product-details?id=' + product.id)
          onClick={() => router.push(`/product-details?id=${product.id}`)}
        ></Button>
      </Flex>
    </Flex>
  );
}
