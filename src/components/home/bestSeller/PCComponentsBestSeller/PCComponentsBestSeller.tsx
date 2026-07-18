"use client";

import { IProduct } from "@/shared/types/common.types";
import { Segmented } from "antd";
import { useState } from "react";
import CPUBestSeller from "./cpuBestSeller";
import VGABestSeller from "./vgaBestSeller";
import RAMBestSeller from "./ramBestSeller";
import SSDBestSeller from "./ssdBestSeller";
import HDDBestSeller from "./hddBestSeller";
import MainBoardBestSeller from "./mainBoardBestSeller";

export default function PCComponentsBestSeller({
  bestSellerProducts,
}: {
  bestSellerProducts: IProduct[];
}) {
  // Level 2: filter best sellers into the PC component local array.
  const localComponentProducts = bestSellerProducts.filter(
    (product) =>
      product.product_type === "cpu" ||
      product.product_type === "VGA" ||
      product.product_type === "RAM" ||
      product.product_type === "SSD" ||
      product.product_type === "HDD" ||
      product.product_type === "MainBoard",
  );

  const [selectedSegment, setSelectedSegment] = useState<string>("CPU");

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
      <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>PC Components</h3>

      <div style={{ overflowX: "auto", marginBottom: "20px" }}>
        <Segmented<string>
          value={selectedSegment}
          onChange={setSelectedSegment}
          options={["CPU", "VGA", "RAM", "SSD", "HDD", "Mainboard"].map(
            (name) => ({
              value: name,
              label: (
                <div style={{ padding: "8px 16px", fontWeight: "bold" }}>
                  {name}
                </div>
              ),
            }),
          )}
        />
      </div>

      {selectedSegment === "CPU" && <CPUBestSeller componentProducts={localComponentProducts} />}
      {selectedSegment === "VGA" && <VGABestSeller componentProducts={localComponentProducts} />}
      {selectedSegment === "RAM" && <RAMBestSeller componentProducts={localComponentProducts} />}
      {selectedSegment === "SSD" && <SSDBestSeller componentProducts={localComponentProducts} />}
      {selectedSegment === "HDD" && <HDDBestSeller componentProducts={localComponentProducts} />}
      {selectedSegment === "Mainboard" && <MainBoardBestSeller componentProducts={localComponentProducts} />}
    </div>
  );
}
