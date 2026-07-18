"use client";

import RowsOfDiscount from "./rowsOfDiscount";
import { useProduct } from "@/shared/hooks/useProducts";

export default function Decrease25Percent() {
  const { products } = useProduct();
  const localProducts = products.filter(
    (product) =>
      product.discountype === "priceDiscount" &&
      product.discount_value === 25,
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <RowsOfDiscount DiscountTypeProducts={localProducts} />
    </div>
  );
}
