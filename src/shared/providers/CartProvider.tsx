import { useState } from "react";
import { CartContext } from "../context/cartContext";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [productIds, setProductIds] = useState<number[]>([]);

  const addProductId = (productId: number) => {
    console.log("addProductId", productId);
    // setProductIds((prev) => [...prev, productId]);
    const newProductIds = [...productIds, productId];
    setProductIds(newProductIds);
  };

  const removeProductId = (productId: number) => {
    console.log("removeProductId", productId);
    setProductIds((prev: number[]) =>
      prev.filter((id: number) => id !== productId)
    );
  };

  const clearCart = () => {
    console.log("clearCart");
    setProductIds([]);
  };
  return (
    <CartContext.Provider
      value={{ productIds, addProductId, removeProductId, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
