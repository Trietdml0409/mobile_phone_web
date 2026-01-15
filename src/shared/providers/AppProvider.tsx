"use client";

import { CartProvider } from "./CartProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
