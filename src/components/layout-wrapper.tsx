"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const shouldShowFooter = !pathname.startsWith("/checkouts");

  return (
    <>
      {children}
      {shouldShowFooter && <Footer />}
    </>
  );
}
