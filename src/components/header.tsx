
import { useContext } from "react";
import Account from "./header/account";
import Cart from "./header/cart";
import CategoriesButton from "./header/menu";
import SearchBox from "./header/search_box";
import Link from "next/link";
import { CartContext } from "@/shared/context/cartContext";
import { Row, Col, Flex, Button, Grid } from "antd";
import SmallScreenHeader from "./header/smallScreenHeader";
import LargeScreenHeader from "./header/largeScreenHeader";

const { useBreakpoint } = Grid

export default function Header() {

  const screens = useBreakpoint();

  const isSmallScreen = screens.xs || (screens.sm && !screens.md);
  if (isSmallScreen) {
    return <SmallScreenHeader />;
  } else {
    return <LargeScreenHeader />;
  }

}
