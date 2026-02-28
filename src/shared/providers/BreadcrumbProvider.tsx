"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  BreadcrumbContext,
  BreadcrumbItem,
} from "@/shared/context/breadcrumbContext";


const MAX_BREADCRUMBS = 10;

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  //Use the Path name
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: "Home", href: "/" },
  ]);

  // Load breadcrumbs from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("breadcrumbs");
      if (saved) {
        try {
          setBreadcrumbs(JSON.parse(saved));
        } catch (e) {
          setBreadcrumbs([{ label: "Home", href: "/" }]);
        }
      }
    }
  }, []);

  // Save breadcrumbs to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("breadcrumbs", JSON.stringify(breadcrumbs));
    }
  }, [breadcrumbs]);

  const addBreadcrumb = (item: BreadcrumbItem) => {
    setBreadcrumbs((prev) => {
      // Remove duplicates (if user clicks same page again, don't re-add)
      const filtered = prev.filter((b) => b.href !== item.href);
      // Limit to MAX_BREADCRUMBS
      const updated = [...filtered, item];
      if (updated.length > MAX_BREADCRUMBS) {
        // Keep Home, remove oldest, keep newest
        return [
          updated[0],
          ...updated.slice(updated.length - MAX_BREADCRUMBS + 1),
        ];
      }
      return updated;
    });
  };

  const clearBreadcrumbs = () => {
    setBreadcrumbs([{ label: "Home", href: "/" }]);
  };

  const removeLast = () => {
    setBreadcrumbs((prev) => {
      if (prev.length <= 1) return prev; // Keep at least Home
      return prev.slice(0, -1);
    });
  };

  return (
    <BreadcrumbContext.Provider
      value={{
        breadcrumbs,
        addBreadcrumb,
        clearBreadcrumbs,
        removeLast,
      }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
}
