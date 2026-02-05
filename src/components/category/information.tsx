import { Button, Col, Flex, Row,Rate,Grid } from "antd";
import { StarOutlined } from "@ant-design/icons";
import InputNumberBox from "./inputNumberBox";
import { IProduct } from "@/shared/types/common.types";

const { useBreakpoint } = Grid






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
  function SmallScreenHeader(){
  return(
    <>
      <Row gutter={[0,8]}>
        <Col span={24} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h1 style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
              {product.name}
            </h1>
        </Col>
        <Col span={24} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
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
        <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <p style={{ color: "black" }}>Product Code: {product.id}</p>
        </Col>
        <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Flex gap={"middle"}>
            <Rate defaultValue={3} />
            <p style={{color:"black"}}>Comment: 0</p>
          </Flex>
            
        </Col>
        {product.isBestSeller ? (<>
        <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
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
        </>) : (<></>)}
      <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div
        style={{
          position: "relative",
          border: "2px dotted red",
          padding: "20px 10px",
          width: "90%",
          flexDirection:"column",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
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

      <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button style={{width:"100%"}} onClick={handleBuyNow}>BUY NOW</Button>
      </Col>
      <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button style={{width:"100%"}} onClick={handleAddToCart}>PAY BY INSTALLMENT</Button>
      </Col>
      <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <InputNumberBox product = {product} quantity={quantity} setQuantity={setQuantity} />
      </Col>
 

      </Row>
    </>
  )
}

  function LargeScreenHeader(){
    return(
      <>
        <Row gutter={[0,8]}>
          <Col span={24} style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
              <h1 style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                {product.name}
              </h1>
          </Col>
          <Col span={24} style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
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
          <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
            <p style={{ color: "black" }}>Product Code: {product.id}</p>
          </Col>
          <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
            <Flex gap={"middle"}>
              <Rate defaultValue={3} />
              <p style={{color:"black"}}>Comment: 0</p>
            </Flex>
              
          </Col>
          {product.isBestSeller ? (<>
          <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
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
          </>) : (<></>)}
        <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
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

        <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Button style={{width:"100%"}} onClick={handleBuyNow}>BUY NOW</Button>
        </Col>
        <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Button style={{width:"100%"}} onClick={handleAddToCart}>PAY BY INSTALLMENT</Button>
        </Col>
        <Col span={24 } style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <InputNumberBox product = {product} quantity={quantity} setQuantity={setQuantity} />
        </Col>
  

        </Row>
      </>
    )
  }


  const screens = useBreakpoint()
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);
  if (isSmallScreen) {
    return <SmallScreenHeader />;
  } else {
    return <LargeScreenHeader />;
  }


  
}
