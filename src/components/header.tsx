import Account from "./home/account";
import Cart from "./home/cart";
import CategoriesButton from "./home/categories_button";
import SearchBox from "./search_box";
import Link from "next/link";

export default function Header({
  totalCartProducts,
}: {
  totalCartProducts: number;
}) {
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
        <p style={{ color: "red" }}>{totalCartProducts}</p>
        <Cart />
      </div>
    </div>
  );
}
