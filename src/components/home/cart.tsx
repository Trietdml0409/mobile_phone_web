import { ShoppingCartOutlined } from "@ant-design/icons";
import { Flex } from "antd";

export default function Cart() {
  return (
    <Flex gap={6} justify="center" align="center">
      <ShoppingCartOutlined style={{ fontSize: "150%", color: "white" }} />
      <span style={{fontSize: "100%", color: "white",fontWeight:"bold" }}>Cart</span>
    </Flex>
    
  );
}
