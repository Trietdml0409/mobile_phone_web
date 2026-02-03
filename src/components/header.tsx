import { useContext } from "react";
import Account from "./home/account";
import Cart from "./home/cart";
import CategoriesButton from "./home/menu";
import SearchBox from "./search_box";
import Link from "next/link";
import { CartContext } from "@/shared/context/cartContext";
import { Row, Col, Flex, Button, Grid } from "antd";

const { useBreakpoint } = Grid;

function SmallScreenHeader() {
  return (
    <Row style={{ height: 64, backgroundColor: "lightblue" }}>
      <div>Logo</div>
      <div>search box</div>
      <div>cart</div>
      <div>menu button</div>
    </Row>
  );
}

function LargeScreenHeader() {
  return (
    <Row style={{ height: 100, backgroundColor: "lightblue" }}>
      <div>Large ScreenHeader</div>
      <div>search box</div>
      <div>cart</div> <div>menu button</div>
    </Row>
  );
}

export default function Header() {
  const { productIds: cartProductIds } = useContext(CartContext);
  const screens = useBreakpoint();

  const isSmallScreen = screens.xs || (screens.sm && !screens.md);
  if (isSmallScreen) {
    return <SmallScreenHeader />;
  } else {
    return <LargeScreenHeader />;
  }
  return (
    <div
      className="header"
      style={{
        backgroundColor: "white",
        height: "70px",
      }}
    >
      <Row gutter={16}>
        {/*Logo*/}
        <Col span={2}>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/" className="cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQSpo-QHOmMpJ1go7HJjuPedQf4YP-BppRQ&s"
                style={{ width: "85%", height: "auto" }}
              />
            </Link>
          </div>
        </Col>

        {/*Menu*/}
        <Col span={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // ensure full width of the Col
              height: "100%",
            }}
          >
            <CategoriesButton />
          </div>
        </Col>

        {/*Search box*/}
        <Col span={10}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // ensure full width of the Col
              height: "100%",
            }}
          >
            <SearchBox />
          </div>
        </Col>

        {/*Log In/ Sign up*/}
        <Col span={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // ensure full width of the Col
              height: "100%",
            }}
          >
            <Account />
          </div>
        </Col>

        {/*Cart*/}
        <Col span={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // ensure full width of the Col
              height: "100%",
            }}
          >
            <div
              style={{
                width: "700%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Link
                style={{ display: "block", width: "100%", height: "100%" }}
                href="/cart"
                className="relative flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Button
                  style={{
                    border: "1.5px solid royalblue",
                    height: "90%",
                    width: "100%",
                    color: "white",
                    background: "royalblue",
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 600,
                  }}
                >
                  <Cart />
                  {cartProductIds.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[30%] min-h-[50%]">
                      {cartProductIds.length > 99
                        ? "99+"
                        : cartProductIds.length}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
