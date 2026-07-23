import { IProduct } from "@/shared/types/common.types";

export default function ProductPrice({
  product,
  fontSize = "14px",
  textAlign = "center",
}: {
  product: IProduct;
  fontSize?: string;
  textAlign?: "left" | "center" | "right";
}) {
  const hasPriceDiscount =
    product.discountype === "priceDiscount" && product.discount_value > 0;

  const discountPrice = Math.round(
    product.price - product.price * (product.discount_value / 100),
  );

  return (
    <div style={{ textAlign }}>
      <div
        style={{
          color: "#e21d2b",
          fontSize,
          fontWeight: "bold",
        }}
      >
        {(hasPriceDiscount ? discountPrice : product.price).toLocaleString()} VND
      </div>

      {hasPriceDiscount && (
        <div
          style={{
            color: "#888888",
            fontSize: "12px",
            marginTop: "2px",
            textDecoration: "line-through",
          }}
        >
          {product.price.toLocaleString()} VND
        </div>
      )}
    </div>
  );
}
