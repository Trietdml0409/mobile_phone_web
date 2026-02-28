"use client";

import { useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { BreadcrumbContext } from "@/shared/context/breadcrumbContext";

export function NavigationTracker() {
  const pathname = usePathname();
  const { breadcrumbs, addBreadcrumb, clearBreadcrumbs } =
    useContext(BreadcrumbContext);

  useEffect(() => {
    // Don't track root path changes
    if (pathname === "/") {
      clearBreadcrumbs();
      return;
    }

    // Get page name from pathname
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const pageName = decodeURIComponent(lastSegment).replace(/-/g, " ");

    // Always add breadcrumb when pathname changes
    // (addBreadcrumb handles duplicates internally)
    addBreadcrumb({
      label: pageName,
      href: pathname,
    });
  }, [pathname, addBreadcrumb, clearBreadcrumbs]);

  return null;
}
