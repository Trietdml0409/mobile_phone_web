import { useState,useEffect } from "react";
import { IProduct } from "../types/common.types";

// custom hook to get cart products
export function useCart() {
  const [cartProductIds,setCartProductIds] = useState<number[]>([])

  useEffect(() => {
    console.log("to UseCart")
    // only run once when the component is mounted -(render first time)
    const savedCartProductIds: string | null =localStorage.getItem("key_cartProducts");

    if (savedCartProductIds) {
      try {
        const values = JSON.parse(savedCartProductIds) as number[];
        setCartProductIds(values);
      } catch (error) {
        console.error("Error parsing cart product ids: ", error);
      }
    }
  }, []);


  function handleCartProductIds({
    new_product_id,
  }: {
    new_product_id: number;
  }): void {
    console.log("CartButtonPressed")
    let cart: number[] = [];
    if (cartProductIds.includes(new_product_id)) {
      cart = cartProductIds.filter((product) => product !== new_product_id);
    } else {
      cart = [...cartProductIds, new_product_id];
    }
    setCartProductIds(cart);
    localStorage.setItem("key_cartProducts", JSON.stringify(cart));

  }





  return {cartProductIds,handleCartProductIds}

}
