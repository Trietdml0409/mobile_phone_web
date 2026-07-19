"use client";

import { useProduct } from "@/shared/hooks/useProducts";
import ComputerBestSeller from "./computerBestSeller/computerBestSeller";
import PCComponentsBestSeller from "./PCComponentsBestSeller/PCComponentsBestSeller";
import AccessoriesBestSeller from "./AccessoriesBestSeller/AccessoriesBestSeller";
import PhoneAndTabletBestSeller from "./PhoneAndTabletBestSeller/PhoneAndTabletBestSeller";

export default function BestSellerSection() {
  const { products } = useProduct();

  // Level 1: filter all products into the best-seller local array.
  const localBestSellers = products.filter(
    (product) => product.isBestSeller === true,
  );

  return (
    <section
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "24px",
        boxShadow: "0 4px 18px rgba(20, 33, 61, 0.07)",
      }}
    >
      <div
        style={{
          borderLeft: "7px solid #e51d2a",
          paddingLeft: "16px",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 3vw, 34px)",
            fontWeight: 900,
            color: "#151515",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Best sellers
        </h2>
        <p style={{ color: "#6b7280", fontSize: "16px", margin: "5px 0 0" }}>
          Popular computers, components and accessories
        </p>
      </div>

      <ComputerBestSeller bestSellerProducts={localBestSellers} />
      <PCComponentsBestSeller bestSellerProducts={localBestSellers} />
      <PhoneAndTabletBestSeller bestSellerProducts={localBestSellers} />
      <AccessoriesBestSeller bestSellerProducts={localBestSellers} />
    </section>
  );
}
