"use client";
import { Breadcrumb, Row } from "antd";
import { usePathname, useSearchParams } from "next/navigation";

// import { BreadcrumbContext } from "@/shared/context/breadcrumbContext";
import { CompassOutlined, HomeOutlined, ShopOutlined } from "@ant-design/icons";
import Link from "next/link";
import { HeartOutlined } from "@ant-design/icons";
import { useProductDetail } from "@/shared/hooks/useProductDetail";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

export default function AppBreadcrumb() {
  // const { breadcrumbs } = useContext(BreadcrumbContext);
  // build the breadcrumbs from the pathname
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const productIdParam = searchParams.get("id");
  const productId = productIdParam ? Number(productIdParam) : null;

  const { product } = useProductDetail({ id: productId });

  console.log("xxx 0021 pathname", pathname);
  console.log("xxx 0021 productId", productId);

  const breadcrumbs: unknown[] = [
    {
      href: "/",
      title: (
        <Link href="/">
          <HomeOutlined style={{ fontSize: "1.5rem", color: "royalblue" }} />
        </Link>
      ),
    },
  ];

  if (pathname !== "/") {
    const segments = pathname.split("/").filter(Boolean);
    console.log("xxx 0022 segments", segments);
    segments.map((segment) => {
      if (segment === "product-details") {
        breadcrumbs.push({
          href: `/${segment}`,
          title: (
            <Row align="middle" justify="center" style={{ gap: "5px" }}>
              <Link href={`/product-details`}>
                <CompassOutlined
                  style={{ fontSize: "1.5rem", color: "royalblue" }}
                />
                Product Details
              </Link>
            </Row>
          ),
        });
        if (productId && product) {
          breadcrumbs.push({
            title: (
              <p style={{ fontSize: "1.1rem", color: "royalblue" }}>
                {product?.name}
              </p>
            ),
          });
        }
      } else if (segment === "liked") {
        breadcrumbs.push({
          href: `/${segment}`,
          title: (
            <Row align="middle" justify="center" style={{ gap: "5px" }}>
              <HeartOutlined
                style={{ fontSize: "1.5rem", color: "royalblue" }}
              />
              <p style={{ fontSize: "1.1rem", color: "royalblue" }}>
                Favourite Products
              </p>
            </Row>
          ),
        });
      } else if (segment === "category") {
        breadcrumbs.push({
          href: `/${segment}`,
          title: (
            <Row align="middle" justify="center" style={{ gap: "5px" }}>
              <Link href={`/category`}>
                <ShopOutlined
                  style={{ fontSize: "1.5rem", color: "royalblue" }}
                />
                Category
              </Link>
            </Row>
          ),
        });
      }
    });
  }

  console.log("xxx 0023 breadcrumbs", breadcrumbs);
  return (
    <Breadcrumb
      style={{
        margin: "8px 16px",
        fontSize: "1.1rem",
        color: "royalblue",
      }}
      items={breadcrumbs as BreadcrumbItemType[]}
    />
  );
}
