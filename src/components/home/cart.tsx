import { ShoppingCartOutlined } from "@ant-design/icons";
import { Flex } from "antd";

export default function Cart() {
  return (
    <Flex gap={6} justify="center" align="center">
      <ShoppingCartOutlined style={{ fontSize: "24px", color: "white" }} />
      <span style={{fontSize: "12px", color: "white",fontWeight:500 }}>Cart</span>
    </Flex>
    
  );
}
