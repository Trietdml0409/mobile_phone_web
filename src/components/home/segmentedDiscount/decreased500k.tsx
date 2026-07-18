"use client";

import RowsOfDiscount from "./rowsOfDiscount";
import { useProduct } from "@/shared/hooks/useProducts";

export default function Decrease500k() {
  const { products } = useProduct();
  const localProducts = products.filter((product) => {
    const discountPrice = product.price * (product.discount_value / 100);

    return (
      product.discountype === "priceDiscount" && discountPrice >= 500000
    );
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <RowsOfDiscount DiscountTypeProducts={localProducts} />
    </div>
  );
}
