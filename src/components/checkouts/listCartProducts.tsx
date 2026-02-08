import { CartContext } from "@/shared/context/cartContext";
import { Button, Divider, Flex, Input } from "antd";
import { useContext } from "react";
import { PriceDisplay } from "../common/priceDisplay";
import {useProduct} from "@/shared/hooks/useProducts"
import DiscountCode from "./discountCode";
import CheckoutProductCard from "./checkoutProductCard";

// get all product in card use context CartContext
export default function ListCardProducts() {
  const { cartProducts, getTotalPriceInCart} = useContext(CartContext);
  const {products} = useProduct()

  const filterProducts = products.filter(product => Object.keys(cartProducts).includes(product.id.toString()))
  console.log("xxx003 productIds", cartProducts);
  return (
    
    <Flex vertical style={{ height: "100%" }}>
      <Flex vertical gap="small">
        {filterProducts.map((product) => (
          <div
            key={product.id}
          >
            <CheckoutProductCard product={product}/>
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

        <DiscountCode/>

      </Flex>

      <Divider />
      <Flex justify={"space-between"}>
        <div style={{color:"royalblue",fontWeight:"bold"}}>Chuong Trinh than thiet</div>
        <Button> Login</Button>
      </Flex>

      <Divider />
      {/* Summary */}
      <Flex vertical gap="small">
        <div style={{ fontSize: "20px", fontWeight: "bold",color:"black" }}>Summary</div>
        <table  style={{ width: "100%", color:"black" }}>
          <thead>
            <tr>
              <th style={{ width: "30%",textAlign: "left"  }}>Product</th>
              <th style={{ width: "30%",  textAlign: "left"}}>Price</th>
              <th style={{ width: "30%",  textAlign: "left"}}> Total Price</th>
              <th style={{ width: "10%",  textAlign: "right" }}>Quantity</th>
            </tr>
          </thead>
          <tbody>

              {Object.values(cartProducts).map((item)=>(
                <>
                  <tr>

                    <td >{item.productId}</td>
                    <td style={{ textAlign: "center"}}>
                      <PriceDisplay price={item.price} />
                    </td>
                    <td><PriceDisplay price={item.totalPrice}/></td>
                    <td style={{ textAlign: "right" }}>{item.quantity}</td>
                  </tr>
                </>
              ))}

            {/* align right */}

          </tbody>
        </table>
      </Flex>
      <Divider />
      <Flex justify="space-between" align="center">
        <div style={{ fontSize: "20px", fontWeight: "bold", color:"royalblue" }}>Total</div>
        <PriceDisplay price={getTotalPriceInCart()} fontSize="26px" />
      </Flex>
    </Flex>
  );
}
