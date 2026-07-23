import { IProduct } from "@/shared/types/common.types";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import ProductPrice from "@/components/common/productPrice";
export default function SearchResult({
  products,
  searchValue,
  isSearching,
  hasSearched,
}: {
  products: IProduct[];
  searchValue: string;
  isSearching: boolean;
  hasSearched: boolean;
}) {
  const router = useRouter();

  if (searchValue.trim().length < 3) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 6px)",
        left: 0,
        width: "100%",
        boxSizing: "border-box",
        zIndex: 1000,
        backgroundColor: "white",
        border: "1px solid #e5e5e5",
        borderRadius: "6px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
        overflow: "hidden",
      }}
    >
      {isSearching && (
        <div style={{ padding: "14px", fontSize: "14px", color: "#666666" }}>
          Searching...
        </div>
      )}

      {!isSearching &&
        products.slice(0, 5).map((product) => (
        <div
          key={product.id}
          onClick={() => router.push(`/product-details?id=${product.id}`)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 10px",
            borderBottom: "1px solid #eeeeee",
            cursor: "pointer",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "48px",
              height: "48px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div
              style={{
                color: "#151515",
                fontSize: "14px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {product.name}
            </div>
            <div style={{ marginTop: "3px" }}>
              <ProductPrice product={product} fontSize="13px" textAlign="left" />
            </div>
          </div>
        </div>
      ))}

      {!isSearching && hasSearched && products.length === 0 && (
        <div style={{ padding: "14px", fontSize: "14px", color: "#666666" }}>
          0 products found
        </div>
      )}
    </div>
  );
}
