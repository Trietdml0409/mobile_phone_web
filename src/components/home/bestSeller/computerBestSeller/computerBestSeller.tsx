"use client";

import { IProduct } from "@/shared/types/common.types";
import { Segmented } from "antd";
import { useState } from "react";
import PCGamingBestSeller from "./pcGamingBestSeller";
import OfficePCBestSeller from "./officePCBestSeller";
import LaptopBestSeller from "./laptopBestSeller";

export default function ComputerBestSeller({
  bestSellerProducts,
}: {
  bestSellerProducts: IProduct[];
}) {
  // Level 2: filter best sellers into the computer local array.
  const localComputerProducts = bestSellerProducts.filter(
    (product) =>
      product.product_type === "PC_Gaming" ||
      product.product_type === "Office_PC" ||
      product.product_type === "laptop",
  );

  const [selectedSegment, setSelectedSegment] = useState<string>("PC Gaming");

  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        border: "1px solid #e4e4e4",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "24px",
      }}
    >
      <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>Computers</h3>

      <div style={{ overflowX: "auto", marginBottom: "20px" }}>
        <Segmented<string>
          value={selectedSegment}
          onChange={setSelectedSegment}
          options={["PC Gaming", "PC Office", "Laptop"].map((name) => ({
            value: name,
            label: (
              <div style={{ padding: "8px 16px", fontWeight: "bold" }}>
                {name}
              </div>
            ),
          }))}
        />
      </div>

      {selectedSegment === "PC Gaming" && (
        <PCGamingBestSeller computerProducts={localComputerProducts} />
      )}
      {selectedSegment === "PC Office" && (
        <OfficePCBestSeller computerProducts={localComputerProducts} />
      )}
      {selectedSegment === "Laptop" && (
        <LaptopBestSeller computerProducts={localComputerProducts} />
      )}
    </div>
  );
}
