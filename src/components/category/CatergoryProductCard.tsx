import { IProduct } from "@/shared/types/common.types";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Flex, Button } from "antd";
import { useRouter } from "next/navigation";

export default function CatergoryProductCard({
  product,
  likedName,
  setLikedName,
}: {
  product: IProduct;
  likedName: string | null;
  setLikedName: (name: string) => void;
}) {
  const router = useRouter();

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
          style={{ backgroundColor: "royalblue", color: "white" }}
          // TODO: @triet thêm onClick handler để thêm sản phẩm vào cart
          // Hint: tạo hàm handleAddToCart(productId) và cập nhật cart state
        >
          Add to Cart
        </Button>
        <Button
          icon={
            <HeartOutlined
              style={{
                ...(product.name === likedName ? { color: "red" } : {}),
              }}
            />
          }
          onClick={() => setLikedName(product.name)}
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
