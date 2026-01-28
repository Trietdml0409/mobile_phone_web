"use client";

import Banner from "@/components/home/banner"; //$ is src
import Header from "@/components/header";
import Contents from "@/components/home/contents";
import { useEffect, useState } from "react";
import MessageBanner from "@/components/MessageBanner";
import {useProduct} from "@/shared/hooks/useProducts"
import { Flex } from "antd";
import { IProduct } from "@/shared/types/common.types";
// TODO: @triet import useState và useEffect từ react
// TODO: @triet import Button và Input từ antd để sử dụng trong các bài tập


export default function Home() {
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

  // TODO: @triet sử dụng useEffect để tăng visitCount mỗi khi component mount
  // Hint: useEffect(() => { setVisitCount(prev => prev + 1); }, []);
  // Đây là bài tập về useEffect với dependency array rỗng (chạy 1 lần khi mount)

  // TODO: @triet tạo hàm handleToggleWelcome để toggle showWelcome state
  // Hint: const handleToggleWelcome = () => { setShowWelcome(!showWelcome); };

  // TODO: @triet tạo hàm handleChangeUserName để cập nhật userName
  // Hint: const handleChangeUserName = (name: string) => { setUserName(name); };

  // -----------
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
        minWidth: "100vw",
        backgroundColor: "white",
        padding: "10px",
        paddingBottom: "50px",
      }}
    >
      <Header />

      {/* TODO: @triet hiển thị thông báo chào mừng nếu showWelcome === true */}
      {/* Hint: sử dụng conditional rendering với {showWelcome && <div>...</div>} */}
      {/* TODO: @triet thêm Button để đóng thông báo chào mừng (gọi handleToggleWelcome) */}

      {/* TODO: @triet hiển thị visitCount ở đâu đó trên trang */}
      {/* Ví dụ: <p>Bạn đã truy cập trang này {visitCount} lần</p> */}

      {/* TODO: @triet thêm một input field để nhập userName */}
      {/* TODO: @triet hiển thị "Xin chào, {userName}!" nếu userName không rỗng */}
      {/* Hint: sử dụng conditional rendering */}

      <Banner />



      <p style={{
        fontWeight: "bold",
        fontSize: "22px",
        color: "black",          // strong red tone
        textAlign: "center",
        backgroundColor: "#fff2e8", // light background highlight
        padding: "8px 12px",
        borderRadius: "6px"
      }}>
        Best Seller
      </p>

      <Flex wrap gap="small" style={{ height: "auto", backgroundColor: "white" }}>
        {localProducts.filter((product:IProduct)=>product.isBestSeller).map((product:IProduct)=>(
          <Contents key={product.id} product={product}/>
        ))}
      </Flex>


      {/* TODO: @triet thêm một section hiển thị danh sách các tính năng nổi bật */}
      {/* Tạo mảng features: ["Free Shipping", "24/7 Support", "Best Price"] */}
      {/* Sử dụng map() để render danh sách này */}
      {/* Hint: features.map((feature, index) => <div key={index}>...</div>) */}

      <MessageBanner visitCount={visitCount} />
    </div>
  );
}


