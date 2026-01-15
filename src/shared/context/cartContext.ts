import { createContext } from "react";

interface CartContextType {
  productIds: number[];
  addProductId: (productId: number) => void;
  removeProductId: (productId: number) => void;
  clearCart: () => void;
}
export const CartContext = createContext<CartContextType>({
  productIds: [],
  addProductId: () => {},
  removeProductId: () => {},
  clearCart: () => {},
});
