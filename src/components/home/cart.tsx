import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Cart() {
  return (
    <div className="flex items-center gap-1">
      <ShoppingCartOutlined style={{ fontSize: "24px", color: "#374151" }} />
      <span className="text-sm font-medium text-gray-700">Cart</span>
    </div>
  );
}
