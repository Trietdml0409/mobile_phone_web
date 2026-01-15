import { useState,useEffect } from "react";
import Account from "./home/account";
import Cart from "./home/cart";
import CategoriesButton from "./home/categories_button";
import SearchBox from "./search_box";
import Link from "next/link";
import { useCart } from "@/shared/hooks/useCart";

export default function Header() {
  //Importing the cartProductIds
  const {cartProductIds} = useCart()
  console.log("This is the header ", {cartProductIds})
  // const [cartLocalProductIds, setLocalCartProductIds] = useState<number[]>([]);
  useEffect(()=>{
    // setLocalCartProductIds(cartProductIds)
    console.log("xxx",cartProductIds)
  },[cartProductIds])

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
        }}
      >
        <p style={{ color: "red" }}>{cartProductIds.length}</p>
        <Cart />
      </div>
    </div>
  );
}
