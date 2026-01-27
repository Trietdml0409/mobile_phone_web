"use client";

import { CartProvider } from "./CartProvider";
import {LikedProvider} from "./LikedProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (<CartProvider>
    <LikedProvider>
      {children}
    </LikedProvider>
    </CartProvider>);
}

