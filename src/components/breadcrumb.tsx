"use client";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useContext } from "react";
import { BreadcrumbContext } from "@/shared/context/breadcrumbContext";

const linkStyle = { color: "royalblue" };

export default function AppBreadcrumb() {
  const { breadcrumbs } = useContext(BreadcrumbContext);

  const items = breadcrumbs.map((crumb) => ({
    title: (
      <Link href={crumb.href} style={linkStyle}>
        {crumb.label}
      </Link>
    ),
    key: crumb.href,
  }));

  return (
    <Breadcrumb
      style={{
        margin: "8px 16px",
        fontSize: "1.1rem",
        color: "royalblue",
      }}
      items={items}
    />
  );
}
