import { IProduct } from "@/shared/types/common.types";
import { Button, Card, Divider } from "antd";
import { useRouter } from "next/navigation";
export default function SearchResult({
  products,
  searchValue,
}: {
  products: IProduct[];
  searchValue: string;
}) {
  const router = useRouter();
  return (
    <div
      style={{
        display: searchValue.length > 0 ? "block" : "none",
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        zIndex: 1000,
        borderRadius: "8px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      {products.map((product) => (
        <Card
          hoverable
          key={product.id}
          style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {product.name}
          </div>
          <div style={{ fontSize: "14px", color: "gray", textAlign: "center" }}>
            {product.price.toLocaleString()} VND
          </div>
        </Card>
      ))}

      <Divider />
      {/* more products */}
      <div style={{ textAlign: "center" }}>
        <Button
          type="primary"
          onClick={() => {
            router.push("/search?query=" + searchValue);
          }}
        >
          More {products.length} products found
        </Button>
      </div>
    </div>
  );
}
