import type { Metadata } from "next";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { AppProvider } from "@/shared/providers/AppProvider";
import LayoutWrapper from "@/components/layout-wrapper";

export const metadata: Metadata = {
  title: "TechGear Pro",
  description: "Your trusted destination for premium mobile phones and accessories.",
};
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <AppProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </AppProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
