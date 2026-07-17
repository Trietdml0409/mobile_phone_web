"use client";

import { CartProvider } from "./CartProvider";
import {LikedProvider} from "./LikedProvider";
import { ConfigProvider } from "antd";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#e21d2b",
          colorInfo: "#e21d2b",
          colorLink: "#d71920",
          colorText: "#171717",
          colorTextSecondary: "#666666",
          colorBgBase: "#ffffff",
          colorBorder: "#dedede",
          borderRadius: 8,
          controlHeight: 42,
          fontFamily: "Arial, Helvetica, sans-serif",
        },
        components: {
          Button: {
            fontWeight: 700,
            primaryShadow: "none",
            dangerShadow: "none",
          },
          Card: {
            borderRadiusLG: 10,
            boxShadowTertiary: "0 5px 18px rgba(0, 0, 0, 0.07)",
          },
          Input: {
            activeBorderColor: "#e21d2b",
            hoverBorderColor: "#e21d2b",
          },
          Select: {
            activeBorderColor: "#e21d2b",
            hoverBorderColor: "#e21d2b",
          },
          Pagination: {
            itemActiveBg: "#e21d2b",
          },
        },
      }}
    >
      <CartProvider>
        <LikedProvider>{children}</LikedProvider>
      </CartProvider>
    </ConfigProvider>
  );
}

