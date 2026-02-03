import { Button, Col, Flex, Row } from "antd";
import { StarOutlined } from "@ant-design/icons";
import InputNumberBox from "./inputNumberBox";
import { IProduct } from "@/shared/types/common.types";


export default function ProductInformation({
  product,
  quantity,
  setQuantity,
  handleBuyNow,
  handleAddToCart,
}: {
  product: IProduct;
  quantity: number;
  setQuantity: (quantity: number) => void;
  handleBuyNow: () => void;
  handleAddToCart: () => void;
}) {


  

  return (
    <Row style={{padding:"16px"}}>
      <Col span={24}>
        <h1 style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
          {product.name}
        </h1>
      </Col>
      
      <Col span={24 }>
      <p style={{ color: "black" }}>Product Code: {product.id}</p>
      </Col>

      <Col span={24}>
        <div>
          <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
          <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
          <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
          <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
          <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
        </div>
        <p style={{ color: "black" }}>0 comment</p>
      </Col>

      <Col span={24}>
      <p
        style={{
          alignSelf: "flex-start",
          display: "inline-block",
          padding: "10px",
          borderTop: "2px solid grey",
          borderBottom: "2px solid grey",
          color: "red",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {product.price.toLocaleString()} VND
      </p>
      </Col>

      <Col span={24}>
      <p
        style={{
          alignSelf: "flex-start",
          display: "inline-block",
          padding: "10px",
          borderTop: "2px solid grey",
          borderBottom: "2px solid grey",
          color: "blue",
          fontSize: "10px",
        }}
      >
        {product.isBestSeller ? "Best Seller" : "Not Best Seller"}
      </p>
      </Col>
      
      <Col span={24}>
      <div
        style={{
          position: "relative",
          border: "2px dotted red",
          padding: "20px 10px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            padding: "0 10px",
            fontWeight: "bold",
            color: "red",
          }}
        >
          🎁 Khuyến mãi - ưu đãi
        </span>
        <p style={{ color: "black", fontSize: "10px" }}>
          1: ALL COUPON <a>HERE</a>
        </p>
        <p style={{ color: "black", fontSize: "10px" }}>
          2: SSD, HDD, MEMORY CARD <a>HERE</a>
        </p>
        <p style={{ color: "black", fontSize: "10px" }}>
          3: MOUSE, GAMING TABLE, HEADPHONE <a>HERE</a>
        </p>
        <p style={{ color: "black", fontSize: "10px" }}>
          4: FREE DELIVERY <a>HERE</a>
        </p>
      </div>
      </Col>

      <Col span={24}>
      <p style={{ color: "black", fontSize: "10px", fontWeight: "bold" }}>
        Call for order: 1900 0243 (8:30 - 21:00)
      </p>
      </Col>
      
      <hr style={{ border: "1px solid grey" }} />
      <Col span={24}>
      <Button onClick={handleBuyNow}>BUY NOW</Button>
      </Col>
      <Col span={24}>
      <Button onClick={handleAddToCart}>PAY BY INSTALLMENT</Button>
      </Col>
      <Col span={24}>
      <InputNumberBox product = {product} quantity={quantity} setQuantity={setQuantity} />
      </Col>
    </Row>
  );
}
