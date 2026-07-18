"use client";

import { IProduct } from "@/shared/types/common.types";
import { Segmented } from "antd";
import { useState } from "react";
import GearBestSeller from "./gearBestSeller";
import AccessoriesSegment from "./accessoriesSegment";

export default function AccessoriesBestSeller({
  bestSellerProducts,
}: {
  bestSellerProducts: IProduct[];
}) {
  // Level 2: filter best sellers into the accessories local array.
  const localAccessoryProducts = bestSellerProducts.filter(
    (product) =>
      product.product_type === "Gear" ||
      product.product_type === "Accesories",
  );

  const [selectedSegment, setSelectedSegment] = useState<string>("Gear");

  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        border: "1px solid #e4e4e4",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>Accessories</h3>

      <div style={{ overflowX: "auto", marginBottom: "20px" }}>
        <Segmented<string>
          value={selectedSegment}
          onChange={setSelectedSegment}
          options={["Gear", "Accessories"].map((name) => ({
            value: name,
            label: (
              <div style={{ padding: "8px 16px", fontWeight: "bold" }}>
                {name}
              </div>
            ),
          }))}
        />
      </div>

      {selectedSegment === "Gear" && (
        <GearBestSeller accessoryProducts={localAccessoryProducts} />
      )}
      {selectedSegment === "Accessories" && (
        <AccessoriesSegment accessoryProducts={localAccessoryProducts} />
      )}
    </div>
  );
}
