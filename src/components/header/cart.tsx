import { ShoppingCartOutlined } from "@ant-design/icons";
import { Flex, Grid } from "antd";
import { useContext } from "react";
import { CartContext } from "@/shared/context/cartContext";
import { useRouter } from "next/navigation"; // for App Route

const { useBreakpoint } = Grid;

export default function Cart() {
  const router = useRouter();
  const screens = useBreakpoint();
  const { getTotalQuantityInCart } = useContext(CartContext);
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);
  const totalQuantityInCart = getTotalQuantityInCart();

  return (
    <Flex
      className="relative"
      gap={1}
      justify={"center"}
      align={"center"}
      onClick={() => router.push("/cart")}
      style={{cursor:"pointer", color: "#151515"}}
    >
      <Flex
  gap={1}
  justify="center"
  align="center"
  onClick={() => router.push("/cart")}
  style={{
    position: "relative",
    cursor: "pointer",
    color: "#151515",
  }}
>
  <ShoppingCartOutlined
    style={{
      fontSize: "40px",
      color: "#151515",
      marginRight: "10px"
    }}
  />

  {totalQuantityInCart > 0 && (
    <span
      style={{
        position: "absolute",
        top: "-5px",
        right: "-10px",
        minWidth: "20px",
        height: "20px",
        padding: "0 10px",
        borderRadius: "50px",
        backgroundColor: "#e21d2b",
        color: "white",
        fontSize: "12px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {totalQuantityInCart > 99 ? "99+" : totalQuantityInCart}
    </span>
  )}

  {!isSmallScreen && (
    <p
      style={{
        fontSize: "14px", fontWeight: "bold", margin: "3px 0 0" 
      }}
    >
      Cart
    </p>
  )}
</Flex>
    </Flex>
  );
}
