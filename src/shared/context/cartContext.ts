import { createContext } from "react";
import { CartProductState, IProduct } from "../types/common.types";

interface CartContextType {

  clearCart: () => void;
  cartProducts: CartProductState;
  addProductToCart: (product: IProduct, quantity: number) => void;
  removeProductFromCart: (productId: number) => void;
  removeProductByeOneFromCart: (productId: number) => void;

  getTotalQuantityInCart: () => number;
  getTotalPriceInCart: () => number;
}

export const CartContext = createContext<CartContextType>({

  clearCart: () => {},
  cartProducts: {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  removeProductByeOneFromCart: () => {},
  getTotalQuantityInCart: () => 0,
  getTotalPriceInCart: () => 0,
});






