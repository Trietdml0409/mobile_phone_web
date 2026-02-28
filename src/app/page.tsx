"use client";

import Banner from "@/components/home/banner"; //$ is src
import Header from "@/components/header";
import Contents from "@/components/home/contents";
import { useEffect, useState } from "react";
import MessageBanner from "@/components/MessageBanner";
import {useProduct} from "@/shared/hooks/useProducts"
import { Card, Col, Flex, Row,Grid } from "antd";
import { IProduct } from "@/shared/types/common.types";
import SegmentDiscount from "@/components/home/segmentedDiscount/segmentDiscount";
// TODO: @triet import useState và useEffect từ react
// TODO: @triet import Button và Input từ antd để sử dụng trong các bài tập

const { useBreakpoint } = Grid

export default function Home() {
  const screens = useBreakpoint()
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

  // TODO: @triet tạo state để đếm số lượt truy cập trang (visitCount)
  const [visitCount, setVisitCount] = useState<number>(0);
  const [localProducts, setLocalProducts]=useState<IProduct[]>([])
  //get the information from useProduct hook
  const { products } = useProduct();

  useEffect(()=>{
    setLocalProducts(products);
  },[products]) //dependency is products


  // TODO: @triet tạo state để hiển thị/ẩn một thông báo chào mừng (showWelcome)
  // Hint: const [showWelcome, setShowWelcome] = useState<boolean>(true);


  // TODO: @triet tạo state để lưu tên người dùng (userName)
  // Hint: const [userName, setUserName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");


  // TODO: @triet tạo hàm handleToggleWelcome để toggle showWelcome state
  // Hint: const handleToggleWelcome = () => { setShowWelcome(!showWelcome); };

  // TODO: @triet tạo hàm handleChangeUserName để cập nhật userName
  // Hint: const handleChangeUserName = (name: string) => { setUserName(name); };


  
  //Use effect to audit the visit times
  useEffect(() => {
    // function to increase visitCount
    // const newVisitCount = visitCount + 1;
    // setVisitCount(newVisitCount);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisitCount((prev) => prev + 1);
  }, []); // [] = empty dependency array = run only once when the component mounts

  // visitCount: 5 => show message: "Xin chào, bạn đã truy cập trang này 5 lần"

  return (
    <div
      className="app"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "white",
        /* remove general padding so header can span full width */
        padding: "0",
        paddingBottom: "50px",
      }}>
      {/* header is outside the padded content block so it can touch the edges */}
      <Header />
      <div style={{ padding: "10px" }}>
        <Row gutter={[0,10]}>

        {/* TODO: @triet hiển thị thông báo chào mừng nếu showWelcome === true */}
        {/* Hint: sử dụng conditional rendering với {showWelcome && <div>...</div>} */}
        {/* TODO: @triet thêm Button để đóng thông báo chào mừng (gọi handleToggleWelcome) */}

        {/* TODO: @triet hiển thị visitCount ở đâu đó trên trang */}
        {/* Ví dụ: <p>Bạn đã truy cập trang này {visitCount} lần</p> */}

        {/* TODO: @triet thêm một input field để nhập userName */}
        {/* TODO: @triet hiển thị "Xin chào, {userName}!" nếu userName không rỗng */}
        {/* Hint: sử dụng conditional rendering */}
        <Col  span={24}>
          <Row>
            <Col span={24}>
              <Banner />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={16}>
            {["https://theme.hstatic.net/200000420363/1001333448/14/banner_home_1_master.jpg?v=6221",
            "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_2_master.jpg?v=6221",
            "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_3_master.jpg?v=6221",
            "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_4_master.jpg?v=6221"
          ].map((source,index) => (
              <Col span={isSmallScreen ? 12 : 6} key={index}>
                <Card
                  styles={{ body: { padding: 0 } }}
                  style={{ border: "none", overflow:"hidden"}}
                  hoverable
                >
                  <div>
                    <img 
                        style={{
                          width: "100%",
                          display: "block",
                        }}
                        src={source}/>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        

        <Col span={24}>
          {/*Discount title*/}
          <Row>
            <p style={{fontWeight:"bold", fontSize:"20px",color:"royalblue"}}>Discount</p>
          </Row>
        </Col>


        <Col span={24}>
          {/*Discount */}
          <Row>
            <div style={{padding:"10px"}}>
              <img src="https://file.hstatic.net/200000420363/file/flash-sale-banner-cho-nh_m-hot-promotion-copy.png"/>
            </div>

            <SegmentDiscount/>
          </Row>
        </Col>


        <Col span={24}>
          {/*Best seller title*/}
          <Row>
            <p style={{fontWeight:"bold", fontSize:"20px",color:"royalblue"}}>Best Seller</p>
          </Row>
        </Col>


        <Col span={24}>
          {/*Best seller */}
          <Row gutter={8}>
            {localProducts.filter((product:IProduct)=>product.isBestSeller).map((product:IProduct)=>(
              <Col key={product.id}  span={isSmallScreen ? 8:4}>
                <Contents  product={product}/>
              </Col>
            ))}
          </Row>
        </Col>



        {/* TODO: @triet thêm một section hiển thị danh sách các tính năng nổi bật */}
        {/* Tạo mảng features: ["Free Shipping", "24/7 Support", "Best Price"] */}
        {/* Sử dụng map() để render danh sách này */}
        {/* Hint: features.map((feature, index) => <div key={index}>...</div>) */}

        <MessageBanner visitCount={visitCount} />
        </Row>
      </div>
    </div>
  );
}

