"use client";

import { IProduct } from "@/shared/types/common.types";
import { Segmented } from "antd";
import { useState } from "react";
import PhoneBestSeller from "./phoneBestSeller";
import TabletBestSeller from "./tabletBestSeller";

export default function PhoneAndTabletBestSeller({
  bestSellerProducts,
}: {
  bestSellerProducts: IProduct[];
}) {
  // Level 2: filter best sellers into the phone and tablet local array.
  const localPhoneAndTabletProducts = bestSellerProducts.filter(
    (product) =>
      product.product_type === "phone" ||
      product.product_type === "tablet",
  );

  const [selectedSegment, setSelectedSegment] = useState<string>("Phone");

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
      <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>
        Phone and Tablet
      </h3>

      <div style={{ overflowX: "auto", marginBottom: "20px" }}>
        <Segmented<string>
          value={selectedSegment}
          onChange={setSelectedSegment}
          options={["Phone", "Tablet"].map((name) => ({
            value: name,
            label: (
              <div style={{ padding: "8px 16px", fontWeight: "bold" }}>
                {name}
              </div>
            ),
          }))}
        />
      </div>

      {selectedSegment === "Phone" && (
        <PhoneBestSeller
          phoneAndTabletProducts={localPhoneAndTabletProducts}
        />
      )}
      {selectedSegment === "Tablet" && (
        <TabletBestSeller
          phoneAndTabletProducts={localPhoneAndTabletProducts}
        />
      )}
    </div>
  );
}
