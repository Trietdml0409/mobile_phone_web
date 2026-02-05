import { createContext } from "react";
import { CartProductState, IProduct } from "../types/common.types";

interface CartContextType {
  productIds: number[];
  addProductId: (productId: number) => void;
  removeProductId: (productId: number) => void;
  clearCart: () => void;
  cartProducts: CartProductState;
  addProductToCart: (product: IProduct, quantity: number) => void;
  removeProductFromCart: (productId: number) => void;
  removeProductByeOneFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType>({
  productIds: [],
  addProductId: () => {},
  removeProductId: () => {},
  clearCart: () => {},
  cartProducts: {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  removeProductByeOneFromCart: () => {},
});






