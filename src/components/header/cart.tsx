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
    >
      <ShoppingCartOutlined style={{ fontSize: 30, color: "white" }} />
      {isSmallScreen && totalQuantityInCart > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[30%] min-h-[50%]">
          {totalQuantityInCart > 99 ? "99+" : totalQuantityInCart}
        </span>
      )}
      {!isSmallScreen && totalQuantityInCart > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[30%] min-h-[50%]">
          {totalQuantityInCart > 99 ? "99+" : totalQuantityInCart}
        </span>
      )}
      {!isSmallScreen && <p style={{ fontWeight: "bold" }}>Cart</p>}
    </Flex>
  );
}
