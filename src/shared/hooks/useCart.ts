import { useState } from "react";
import { IProduct } from "../types/common.types";

// custom hook to get cart products
export function useCart() {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  // get local storage cart products

  // set local storage cart products

  // get total cart quantity
  const getTotalCartQuantity = () => {
    return cartProducts.length;
  };

  return {
    cartProducts,

    // increase cart product quantity
    // decrease cart product quantity
    // clear cart
    // get total cart quantity
    getTotalCartQuantity,
  };
}
