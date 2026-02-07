import { Row, Col } from "antd";
import CategoriesButton from "./menu";
import SearchBox from "./search_box";
import Cart from "./cart";
import Account from "./account";
import { useRouter } from "next/navigation"; //

export default function LargeScreenHeader() {
  const router = useRouter();
  return (
    <Row style={{ height: 50, backgroundColor: "lightblue" }}>
      <Col
        span={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/vi/f/f6/Emblem_of_Da_Nang_City.png"
          style={{ height: "40px", objectFit: "contain" }}
        />
      </Col>
      <Col
        span={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CategoriesButton />
      </Col>
      <Col
        span={13}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBox />
      </Col>
      <Col
        span={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Account />
      </Col>
      <Col
        span={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Cart />
      </Col>
    </Row>
  );
}
