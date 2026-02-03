import { CartContext } from "@/shared/context/cartContext";
import { Button, Divider, Flex, Input } from "antd";
import { useContext } from "react";
import { PriceDisplay } from "../common/priceDisplay";

// get all product in card use context CartContext
export default function ListCardProducts() {
  const { productIds } = useContext(CartContext);

  console.log("xxx003 productIds", productIds);
  return (
    <Flex vertical style={{ height: "100%" }}>
      <Flex vertical gap="small">
        {productIds.map((productId) => (
          <div
            key={productId}
            style={{
              padding: "10px",
              border: "1px solid rgba(246, 107, 107, 0.3)",
              borderRadius: "5px",
              marginBottom: "10px",
              minHeight: "50px",
            }}
          >
            {productId}
          </div>
        ))}
      </Flex>
      <Divider />
      <Flex
        justify="space-between"
        align="center"
        gap="small"
        style={{ width: "100%", height: "48px" }}
      >
        <Input
          placeholder="Enter discount code"
          style={{ width: "100%", height: "100%" }}
        />
        <Button type="primary" style={{ flex: 1 }}>
          Apply
        </Button>
      </Flex>

      <Divider />
      <Flex>
        <div>Chuong Trinh than thiet</div>
        <Button> Login</Button>
      </Flex>

      <Divider />
      {/* Summary */}
      <Flex vertical gap="small">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>Summary</div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Product</th>
              <th style={{ width: "30%" }}>Price</th>
              <th style={{ width: "20%" }}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product A</td>
              <td style={{ textAlign: "center", backgroundColor: "#e6f7ff" }}>
                <PriceDisplay price={100000} />
              </td>
              <td style={{ textAlign: "right" }}>x1</td>
            </tr>
            {/* align right */}
            <tr>
              <td>Product B</td>
              <td style={{ textAlign: "center", backgroundColor: "#e6f7ff" }}>
                <PriceDisplay price={140000} />
              </td>
              <td style={{ textAlign: "right" }}>x2</td>
            </tr>
          </tbody>
        </table>
      </Flex>
      <Divider />
      <Flex justify="space-between" align="center">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>Total</div>
        <PriceDisplay price={2400000} fontSize="26px" />
      </Flex>
    </Flex>
  );
}
