"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import { NavigationTracker } from "./NavigationTracker";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const shouldShowFooter = !pathname.startsWith("/checkouts");

  return (
    <>
      <NavigationTracker />
      {children}
      {shouldShowFooter && <Footer />}
    </>
  );
}
