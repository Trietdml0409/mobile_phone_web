"use client";
import { Col, Row } from "antd";
import SearchBox from "./search_box";
import Cart from "./cart";
import CategoriesButton from "./menu";
import Account from "./account";
import { useRouter } from "next/navigation"; //

export default function SmallScreenHeader() {
  const router = useRouter();
  return (
    <header
      style={{
        backgroundColor: "white",
        borderTop: "4px solid #e51d2a",
        borderBottom: "1px solid #e8e8e8",
        padding: "12px",
      }}
    >
      <Row align="middle" gutter={8}>
        <Col span={9}>
          <div onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
            <div style={{ fontSize: "19px", fontWeight: 900, color: "#151515" }}>
              TECH<span style={{ color: "#e51d2a" }}>GEAR</span>
            </div>
            <div style={{ fontSize: "9px", letterSpacing: "2px", color: "#687086" }}>
              PRO STORE
            </div>
          </div>
        </Col>
        <Col span={5}>
          <Account />
        </Col>
        <Col span={5}>
          <Cart />
        </Col>
        <Col span={5}>
          <CategoriesButton />
        </Col>
        <Col span={24} style={{ marginTop: "12px" }}>
          <SearchBox />
        </Col>
      </Row>
    </header>
  );
}
