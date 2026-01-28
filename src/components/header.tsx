import { useContext } from "react";
import Account from "./home/account";
import Cart from "./home/cart";
import CategoriesButton from "./home/categories_button";
import SearchBox from "./search_box";
import Link from "next/link";
import { CartContext } from "@/shared/context/cartContext";

export default function Header() {
  const { productIds: cartProductIds } = useContext(CartContext);
  
  return (
    <div
      className="header"
      style={{
        backgroundColor: "white",
        height: "64px",
        display: "flex",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href="/" className="cursor-pointer">
          <img
            style={{ width: "90px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQSpo-QHOmMpJ1go7HJjuPedQf4YP-BppRQ&s"
          />
        </Link>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CategoriesButton />
      </div>
      <div
        style={{
          flex: "3",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchBox />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
        }}
      >
        <Account />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <Link
          href="/cart"
          className="relative flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <Cart />
          {cartProductIds.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px]">
              {cartProductIds.length > 99 ? "99+" : cartProductIds.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
