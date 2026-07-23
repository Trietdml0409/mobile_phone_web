import { Button, Col, Flex, Row, Rate, Grid, Modal } from "antd";
import InputNumberBox from "../common/inputNumberBox";
import { IProduct } from "@/shared/types/common.types";
import Link from "next/link";
import { useState } from "react";

const { useBreakpoint } = Grid;

export default function ProductInformation({
  product,
  handleBuyNow,
}: {
  product: IProduct;
  handleBuyNow: () => void;
}) {
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  const couponPopup = (
    <Modal
      title="Available coupons"
      open={isCouponOpen}
      onCancel={() => setIsCouponOpen(false)}
      footer={null}
      width={480}
    >
      {[
        {
          code: "SAVE10",
          information: "Save 10% on component orders over 2,000,000 VND. Maximum discount: 500,000 VND.",
        },
        {
          code: "FREESHIP",
          information: "Free standard delivery for eligible orders in supported areas of HCMC and Hanoi.",
        },
        {
          code: "GEAR15",
          information: "Save 15% on selected gaming gear orders over 1,000,000 VND. Maximum discount: 300,000 VND.",
        },
      ].map((coupon) => (
        <div
          key={coupon.code}
          style={{
            border: "1px dashed #e21d2b",
            borderLeft: "5px solid #e21d2b",
            borderRadius: "6px",
            padding: "12px",
            marginBottom: "10px",
            backgroundColor: "#fffafa",
          }}
        >
          <div style={{ color: "#e21d2b", fontSize: "18px", fontWeight: "bold" }}>
            {coupon.code}
          </div>
          <div style={{ color: "#444444", fontSize: "13px", marginTop: "4px" }}>
            {coupon.information}
          </div>
        </div>
      ))}
    </Modal>
  );

  function SmallScreenHeader() {
    return (
      <>
        {couponPopup}
        <Row gutter={[0, 8]}>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
            >
              {product.name}
            </h1>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "black" }}>Product Code: {product.id}</p>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Flex gap={"middle"}>
              <Rate defaultValue={3} />
              <p style={{ color: "black" }}>Comment: 0</p>
            </Flex>
          </Col>
          {product.isBestSeller ? (
            <>
              <Col
                span={24}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    alignSelf: "flex-start",
                    display: "inline-block",
                    padding: "10px",
                    color: "blue",
                    fontSize: "20px",
                  }}
                >
                  {"Best Seller"}
                </p>
              </Col>
            </>
          ) : (
            <></>
          )}
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                border: "2px dotted red",
                padding: "20px 10px",
                width: "90%",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                1: ALL COUPON{" "}
                <button
                  type="button"
                  onClick={() => setIsCouponOpen(true)}
                  style={{
                    padding: 0,
                    border: "none",
                    background: "none",
                    color: "#1677ff",
                    cursor: "pointer",
                  }}
                >
                  HERE
                </button>
              </p>
              <p style={{ color: "black", fontSize: "10px" }}>
                2: SSD, HDD, MEMORY CARD{" "}
                <Link href="/category?product_type=Components">HERE</Link>
              </p>
              <p style={{ color: "black", fontSize: "10px" }}>
                3: MOUSE, GAMING TABLE, HEADPHONE{" "}
                <Link href="/category?product_type=Gear">HERE</Link>
              </p>
              <p style={{ color: "black", fontSize: "10px" }}>
                4: FREE DELIVERY <Link href="/blogs?id=4">HERE</Link>
              </p>
            </div>
          </Col>

          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              style={{ width: "100%", backgroundColor: "#e21d2b", color: "white" }}
              onClick={handleBuyNow}
            >
              BUY NOW
            </Button>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InputNumberBox product={product} />
          </Col>
        </Row>
      </>
    );
  }

  function LargeScreenHeader() {
    return (
      <>
        {couponPopup}
        <Row gutter={[0, 8]}>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <h1
              style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
            >
              {product.name}
            </h1>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
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
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <p style={{ color: "black" }}>Product Code: {product.id}</p>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Flex gap={"middle"}>
              <Rate defaultValue={3} />
              <p style={{ color: "black" }}>Comment: 0</p>
            </Flex>
          </Col>
          {product.isBestSeller ? (
            <>
              <Col
                span={24}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <p
                  style={{
                    alignSelf: "flex-start",
                    display: "inline-block",
                    padding: "10px",
                    color: "blue",
                    fontSize: "20px",
                  }}
                >
                  {"Best Seller"}
                </p>
              </Col>
            </>
          ) : (
            <></>
          )}
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <div
              style={{
                position: "relative",
                border: "2px dotted red",
                padding: "20px 10px",
                width: "90%",
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
                1: ALL COUPON{" "}
                <button
                  type="button"
                  onClick={() => setIsCouponOpen(true)}
                  style={{
                    padding: 0,
                    border: "none",
                    background: "none",
                    color: "#1677ff",
                    cursor: "pointer",
                  }}
                >
                  HERE
                </button>
              </p>
              <p style={{ color: "black", fontSize: "10px" }}>
                2: SSD, HDD, MEMORY CARD{" "}
                <Link href="/category?product_type=Components">HERE</Link>
              </p>
              <p style={{ color: "black", fontSize: "10px" }}>
                3: MOUSE, GAMING TABLE, HEADPHONE{" "}
                <Link href="/category?product_type=Gear">HERE</Link>
              </p>
              <p style={{ color: "black", fontSize: "10px" }}>
                4: FREE DELIVERY <Link href="/blogs?id=4">HERE</Link>
              </p>
            </div>
          </Col>

          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              style={{ width: "100%", backgroundColor: "#e21d2b", color: "white" }}
              onClick={handleBuyNow}
            >
              BUY NOW
            </Button>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InputNumberBox product={product} />
          </Col>
        </Row>
      </>
    );
  }

  const screens = useBreakpoint();
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);
  if (isSmallScreen) {
    // eslint-disable-next-line react-hooks/static-components
    return <SmallScreenHeader />;
  } else {
    // eslint-disable-next-line react-hooks/static-components
    return <LargeScreenHeader />;
  }
}
