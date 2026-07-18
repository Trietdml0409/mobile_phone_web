"use client";

import RowsOfDiscount from "./rowsOfDiscount";
import { useProduct } from "@/shared/hooks/useProducts";

export default function Buy1Get1() {
  const { products } = useProduct();
  const localProducts = products.filter(
    (product) => product.discountype === "buyOneGetOne",
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <RowsOfDiscount DiscountTypeProducts={localProducts} />
    </div>
  );
}
