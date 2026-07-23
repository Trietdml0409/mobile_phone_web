"use client";

import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

// These names replace route names that are not pleasant to read.
// For example, "product-details" will be displayed as "Product Details".
const PAGE_NAMES: Record<string, string> = {
  auth: "Account",
  blogs: "Blogs",
  cart: "Cart",
  category: "Category",
  checkouts: "Checkout",
  liked: "Liked Products",
  "product-details": "Product Details",
  "about-us": "About Us",
  demo_2: "Demo 2",
};

export default function BreadcrumbNavigation() {
  // usePathname gives us the current path.
  // Example: "/product-details" or "/category".
  const pathname = usePathname();

  // Remove the empty values created by the slash characters.
  // Example: "/product-details" becomes ["product-details"].
  const pathParts = pathname.split("/").filter((part) => part !== "");

  // The homepage does not need a breadcrumb because it is already the first page.
  if (pathname === "/") {
    return null;
  }

  // Every breadcrumb starts with a link that returns to the homepage.
  const breadcrumbItems = [
    {
      title: (
        <Link href="/" style={{ color: "#151515" }}>
          <HomeOutlined /> Home
        </Link>
      ),
    },
    ...pathParts.map((part, index) => {
      // Join the previous parts to create the link for this breadcrumb item.
      // This also works if a nested route is added later.
      const href = "/" + pathParts.slice(0, index + 1).join("/");
      const isCurrentPage = index === pathParts.length - 1;

      // Use our readable page name when one exists.
      // Otherwise, replace dashes with spaces and capitalize the first letter.
      const defaultName = part.replaceAll("-", " ");
      const pageName =
        PAGE_NAMES[part] ||
        defaultName.charAt(0).toUpperCase() + defaultName.slice(1);

      return {
        // The current page is plain text. Previous pages are clickable links.
        title: isCurrentPage ? (
          <span style={{ color: "#e21d2b", fontWeight: 600 }}>{pageName}</span>
        ) : (
          <Link href={href} style={{ color: "#151515" }}>
            {pageName}
          </Link>
        ),
      };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        width: "100%",
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "0 8px 14px",
      }}
    >
      {/* Ant Design renders the items and places the separator between them. */}
      <Breadcrumb items={breadcrumbItems} separator=">" />
    </nav>
  );
}
