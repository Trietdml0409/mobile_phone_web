import { Row, Col } from "antd";
import CategoriesButton from "./menu";
import SearchBox from "./search_box";
import Cart from "./cart";
import Account from "./account";
import { useRouter } from "next/navigation"; //

export default function LargeScreenHeader() {
  const router = useRouter();
  return (
    <header
      style={{
        backgroundColor: "white",
        borderTop: "4px solid #e51d2a",
        borderBottom: "1px solid #e8e8e8",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "18px 24px 10px" }}>
        <Row gutter={24} align="middle">
          <Col span={4}>
            <div
              onClick={() => router.push("/")}
              style={{ cursor: "pointer", lineHeight: 1 }}
            >
              <div style={{ fontSize: "25px", fontWeight: 900, color: "#151515" }}>
                TECH<span style={{ color: "#e51d2a" }}>GEAR</span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  color: "#687086",
                  marginTop: "5px",
                }}
              >
                PRO STORE
              </div>
            </div>
          </Col>

          <Col span={4}>
            <CategoriesButton />
          </Col>

          <Col span={9}>
            <SearchBox />
          </Col>

          <Col span={4}>
            <Account />
          </Col>

          <Col span={3}>
            <Cart />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col offset={8} span={13}>
            <nav style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
              {[
                { label: "PC Gaming", value: "PC_Gaming" },
                { label: "Laptop", value: "laptop" },
                { label: "CPU", value: "cpu" },
                { label: "VGA", value: "VGA" },
                { label: "RAM", value: "RAM" },
                { label: "Mainboard", value: "MainBoard" },
              ].map((item) => (
                <span
                  key={item.value}
                  onClick={() =>
                    router.push(`/category?product_type=${item.value}`)
                  }
                  style={{ cursor: "pointer", color: "#4b5263", fontWeight: 600 }}
                >
                  {item.label}
                </span>
              ))}
            </nav>
          </Col>
        </Row>
      </div>
    </header>
  );
}
