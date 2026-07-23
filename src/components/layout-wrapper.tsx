"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import Header from "./header";
import BreadcrumbNavigation from "./breadcrumb";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const shouldShowFooter = !pathname.startsWith("/checkouts");
  const shouldShowHeader = !pathname.startsWith("/checkouts");

  return (
    <>
      {shouldShowHeader && <Header />}
      <div className={pathname === "/" ? "site-home" : "site-page"}>
        {shouldShowHeader && <BreadcrumbNavigation />}
        {children}
      </div>
      {shouldShowFooter && <Footer />}
    </>
  );
}
