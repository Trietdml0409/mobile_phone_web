"use client";

import Header from "@/components/header";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState, useEffect } from "react";
// TODO: @triet import useRouter từ next/navigation để sử dụng navigation

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  // createdAt: string; // time when the product was created in format: "YYYY-MM-DD HH:MM:SS"
  createdAt: string;
  // isBestSeller: boolean; // true if the product is a best seller, false otherwise
  isBestSeller: boolean;
  // brandName: string; // name of the brand of the product -> for filter by brand
  brandName: string;
}
// PRODUCTS: IProduct[]
// PRODUCTS: Array<IProduct>

const PRODUCTS_INITIALIZE: Array<IProduct> = [
  {
    id: 1,
    name: "PC RTX 3050 2023",
    price: 11000000,
    image:
      "https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png",
    createdAt: "2026-3-1",
    isBestSeller: true,
    brandName: "NVIDIA"

  },
  {
    id: 2,
    name: "PC GTX 1050 2023",
    price: 10000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/5888-5050_866c83a581f44117a7dcb6264f71490f_large.jpg",
    createdAt: "2026-3-1",
    isBestSeller: true,
    brandName: "NVIDIA"

  },
  {
    id: 3,
    name: "PC Ryzen 5 5600G 2023",
    price: 50000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/screenshot_2_e5ef09c2fb354e1b86a804bbb10e02a0_large.png",
    createdAt: "2026-3-1",
    isBestSeller: false,
    brandName: "AMD"
  },
  {
    id: 4,
    name: "PC Ryzen 7 5800H Gen 1",
    price: 45000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/_new_-_nh-sp-web_60fb8f06edf64bb5968c786a5aa36734_large.png",
    createdAt: "2026-3-1",
    isBestSeller: false,
    brandName: "AMD"
  },
  {
    id: 5,
    name: "PC Ryzen 9 5900HX Gen 2",
    price: 30000000,
    image:
      "https://product.hstatic.net/200000420363/product/ls27dg502eexxv-2_a4e1e2792a654f66923442db7a43084b_large.png",
    createdAt: "2026-3-1",
    isBestSeller: false,
    brandName: "AMD"
  },
];

const SORT_BY_OPTIONS: Array<{ label: string; value: string }> = [
  {
    label: "Price: Increase",
    value: "price-increase",
  },
  {
    label: "Price: Decrease",
    value: "price-decrease",
  },
  {
    label: "Name: From A-Z",
    value: "name-a-z",
  },
  {
    label: "Name: From Z-A",
    value: "name-z-a",
  },
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
  {
    label: "Best seller",
    value: "best-seller",
  },
];

export default function Category() {
  // state save total products
  const [totalProducts, setTotalProducts] = useState<number>(
    PRODUCTS_INITIALIZE.length
  );
  // TODO: @triet sử dụng useEffect để tự động cập nhật totalProducts khi products thay đổi
  // Hint: import useEffect từ react và thêm dependency [products]



  // state save Products
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS_INITIALIZE);
  // state save selected sort by
  const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null);


  // TODO: @triet thêm state để lưu danh sách sản phẩm yêu thích (favorites)
  // Hint: sử dụng useState với mảng các product id: number[]

  
  // TODO: @triet thêm state để lưu giỏ hàng (cart)
  // Hint: có thể lưu mảng các product hoặc object với {productId, quantity}

  // @Triet: filter product:
  const handleSortBy = (newValue: string) => {
    console.log(
      "sort by value. 1. old value: ",
      selectedSortBy,
      "2. new value: ",
      newValue
    );
    setSelectedSortBy(newValue);

    // TODO: @triet check what is switch statement in JavaScript/TS
    

    // Handle sort by options
    switch (newValue) {
      case "price-increase":
        // sort by price increase
        const sortedByPriceAsc = [...products].sort(
          (a, b) => a.price - b.price
        );
        setProducts(sortedByPriceAsc);
      case "price-decrease":
        // TODO: @triet sort by price decrease (từ cao xuống thấp)
        // Hint: sử dụng sort() với logic ngược lại so với price-increase
        const sortedByPriceDesc = [...products].sort(
          (a, b) => b.price - a.price
        );
        //??????WHY DO WE NEED TO CALL SETPRODUCTS HERE
        setProducts(sortedByPriceDesc)
      case "name-a-z":
        // TODO: @triet sort by name from A-Z
        // Hint: sử dụng sort() với localeCompare() để so sánh chuỗi
        const sortedByNameAZ = [...products].sort(
          (a,b) => a.name.localeCompare(b.name)
        );
        //??????WHY DO WE NEED TO CALL SETPRODUCTS HERE
        //WHAT IS THE MEANING OF THIS KIND OF SORT
        setProducts(sortedByNameAZ)
        break;
      case "name-z-a":
        // TODO: @triet sort by name from Z-A
        // Hint: tương tự name-a-z nhưng đảo ngược
        const sortedByNameZA = [...products].sort(
          (a,b) => b.name.localeCompare(a.name)
        );
        //??????WHY DO WE NEED TO CALL SETPRODUCTS HERE
        //WHAT IS THE MEANING OF THIS KIND OF SORT
        setProducts(sortedByNameZA)
        break;
      case "newest":
        // TODO: @triet sort by newest (mới nhất trước)
        // Hint: cần thêm createdAt vào IProduct interface và sử dụng sort()
        break;
      case "oldest":
        // TODO: @triet sort by oldest (cũ nhất trước)
        // Hint: tương tự newest nhưng đảo ngược
        break;
      case "best-seller":
        // TODO: @triet sort by best seller
        // Hint: cần thêm isBestSeller vào IProduct interface và filter/sort
        const sortedByIsBestSeller = [...products].filter(
          product => product.isBestSeller === true
        );
        //??????WHY DO WE NEED TO CALL SETPRODUCTS HERE
        //WHAT IS THE MEANING OF THIS KIND OF SORT
        setProducts(sortedByIsBestSeller)
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "white",
      }}
    >
      <Header />
      <Flex vertical style={{ padding: "15px" }}>
        <p style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
          PC GAMING ({totalProducts} PRODUCTS)
        </p>
      </Flex>

      <Flex vertical gap="10px" style={{ padding: "15px" }}>
        <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          Filter by: Brand [Intel, AMD, Ryzen,]
          {/* TODO: @triet add filter Button -> when click -> filter by brand */}
        </p>
        {/* TODO: @triet tạo state để lưu selectedBrand (string | null) */}
        {/* TODO: @triet tạo mảng BRANDS với các brand có sẵn */}
        {/* TODO: @triet render các Button cho từng brand, khi click -> setSelectedBrand */}
        {/* TODO: @triet tạo hàm handleFilterByBrand để filter products theo brand */}
        {/* TODO: @triet cần thêm brandName vào IProduct interface trước */}
        <Flex gap="small">
          <Button>OFFICE PC</Button>
          <Button>MINI PC</Button>
        </Flex>
        <Flex wrap gap="small" align="center">
          <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
            Sorted By:
          </p>
          {/* <Button>Price: Increase</Button>
          <Button>Price: Decrease</Button>
          <Button>Name: From A-Z</Button>
          <Button>Name: From Z-A</Button>
          <Button>Newest</Button>
          <Button>Oldest</Button>
          <Button>Best seller</Button> */}
          {SORT_BY_OPTIONS.map((option) => (
            <Button
              key={option.value}
              onClick={() => handleSortBy(option.value)}
              style={{
                backgroundColor:
                  selectedSortBy === option.value ? "royalblue" : "white",
                color: selectedSortBy === option.value ? "white" : "black",

                border: "1px solid rgb(224, 224, 224)",
                borderRadius: "6px",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              {option.label}
            </Button>
          ))}
        </Flex>

        <Flex wrap gap="middle">
          {/* <Flex
            align="center"
            justify="start"
            style={{
              height: "300px",
              width: "200px",
              border: "1px solid black",
              borderRadius: "10%",
            }}
            vertical
          >
            <img
              style={{ height: "250px", width: "200px", borderRadius: "15%" }}
              src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"
            />
            <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
              PC RTX 3050 2023
            </p>
          </Flex>

          <Flex
            align="center"
            justify="start"
            style={{
              height: "300px",
              width: "200px",
              border: "1px solid black",
              borderRadius: "10%",
            }}
            vertical
          >
            <img
              style={{ height: "250px", width: "200px", borderRadius: "15%" }}
              src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"
            />
            <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
              PC RTX 3050 2023
            </p>
          </Flex>

          <Flex
            align="center"
            justify="start"
            style={{
              height: "300px",
              width: "200px",
              border: "1px solid black",
              borderRadius: "10%",
            }}
            vertical
          >
            <img
              style={{ height: "250px", width: "200px", borderRadius: "15%" }}
              src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"
            />
            <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
              PC RTX 3050 2023
            </p>
          </Flex>

          <Flex
            align="center"
            justify="start"
            style={{
              height: "300px",
              width: "200px",
              border: "1px solid black",
              borderRadius: "10%",
            }}
            vertical
          >
            <img
              style={{ height: "250px", width: "200px", borderRadius: "15%" }}
              src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"
            />
            <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
              PC RTX 3050 2023
            </p>
          </Flex>

          <Flex
            align="center"
            justify="start"
            style={{
              height: "300px",
              width: "200px",
              border: "1px solid black",
              borderRadius: "10%",
            }}
            vertical
          >
            <img
              style={{ height: "250px", width: "200px", borderRadius: "15%" }}
              src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"
            />
            <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
              PC RTX 3050 2023
            </p>
          </Flex>

          <Flex
            align="center"
            justify="start"
            style={{
              height: "300px",
              width: "200px",
              border: "1px solid black",
              borderRadius: "10%",
            }}
            vertical
          >
            <img
              style={{ height: "250px", width: "200px", borderRadius: "15%" }}
              src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"
            />
            <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
              PC RTX 3050 2023
            </p>
          </Flex>

          <Flex
            align="center"
            justify="start"
            style={{
              height: "300px",
              width: "200px",
              border: "1px solid black",
              borderRadius: "10%",
            }}
            vertical
          >
            <img
              style={{ height: "250px", width: "200px", borderRadius: "15%" }}
              src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"
            />
            <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
              PC RTX 3050 2023
            </p>
          </Flex> */}

          {products.map((product: IProduct) => (
            <Flex
              key={product.id} // unique key to distinguish each product
              align="center"
              justify="start"
              style={{
                height: "350px",
                width: "220px",
                borderRadius: "6px",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid rgb(224, 224, 224)",
              }}
              vertical
            >
              <Flex justify="center" align="center" style={{ height: "240px" }}>
                <img
                  style={{
                    height: "auto",
                    width: "200px",
                    borderRadius: "15%",
                    objectFit: "fill",
                  }}
                  src={product.image}
                />
              </Flex>
              {/* TODO: @triet thêm onClick vào tên sản phẩm để navigate đến product-details */}
              {/* Hint: có thể wrap trong một div hoặc thẻ có thể click được */}
              <p
                style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
              >
                {product.name}
              </p>
              {/* price */}
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "rosybrown",
                }}
              >
                {product.price.toLocaleString()} VND
              </p>
              {/* Action Button */}
              <Flex
                justify="center"
                align="center"
                style={{ height: "50px" }}
                gap="small"
              >
                <Button
                  icon={<ShoppingCartOutlined />}
                  style={{ backgroundColor: "royalblue", color: "white" }}
                  // TODO: @triet thêm onClick handler để thêm sản phẩm vào cart
                  // Hint: tạo hàm handleAddToCart(productId) và cập nhật cart state
                >
                  Add to Cart
                </Button>
                <Button
                  icon={<HeartOutlined />}
                  // TODO: @triet thêm onClick handler để toggle favorite
                  // Hint: tạo hàm handleToggleFavorite(productId)
                  // Nếu productId đã có trong favorites thì xóa, nếu chưa thì thêm vào
                  // TODO: @triet thay đổi màu button khi sản phẩm đã được yêu thích
                  // Hint: kiểm tra product.id có trong favorites state không
                ></Button>
                <Button
                  icon={<EyeOutlined />}
                  // TODO: @triet thêm onClick handler để navigate đến trang product-details
                  // Hint: sử dụng useRouter từ next/navigation và router.push('/product-details?id=' + product.id)
                ></Button>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
