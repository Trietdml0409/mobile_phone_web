"use client";

import Header from "@/components/header";
import { Button, Flex } from "antd";
import { useEffect, useState } from "react";
import { IProduct } from "@/shared/types/common.types";
import CatergoryProductCard from "@/components/category/CatergoryProductCard";

// PRODUCTS: IProduct[]
// PRODUCTS: Array<IProduct>

const PRODUCTS_INITIALIZE: Array<IProduct> = [
  {
    id: 10,
    name: "PC RTX 3050 2023",
    price: 11000000,
    image:
      "https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png",
    createdAt: "2026-3-1",
    isBestSeller: true,
    brandName: "NVIDIA",
    liked: false,
  },
  {
    id: 20,
    name: "PC GTX 1050 2023",
    price: 10000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/5888-5050_866c83a581f44117a7dcb6264f71490f_large.jpg",
    createdAt: "2026-3-1",
    isBestSeller: true,
    brandName: "NVIDIA",
  },
  {
    id: 30,
    name: "PC Ryzen 5 5600G 2023",
    price: 50000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/screenshot_2_e5ef09c2fb354e1b86a804bbb10e02a0_large.png",
    createdAt: "2026-3-1",
    isBestSeller: false,
    brandName: "AMD",
  },
  {
    id: 40,
    name: "PC Ryzen 7 5800H Gen 1",
    price: 45000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/_new_-_nh-sp-web_60fb8f06edf64bb5968c786a5aa36734_large.png",
    createdAt: "2026-3-1",
    isBestSeller: false,
    brandName: "AMD",
  },
  {
    id: 50,
    name: "PC Ryzen 9 5900HX Gen 2",
    price: 30000000,
    image:
      "https://product.hstatic.net/200000420363/product/ls27dg502eexxv-2_a4e1e2792a654f66923442db7a43084b_large.png",
    createdAt: "2026-3-1",
    isBestSeller: false,
    brandName: "AMD",
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
  const [likedProductIds, setLikedProductIds] = useState<number[]>([]);

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

  useEffect(() => {
    // only run once when the component is mounted -(render first time)
    const savedLikedProductIds: string | null =
      localStorage.getItem("key_likeProducts");

    if (savedLikedProductIds) {
      // parse string => to array of numbers
      try {
        const values = JSON.parse(savedLikedProductIds) as number[];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLikedProductIds(values);
      } catch (error) {
        console.error("Error parsing saved liked product ids: ", error);
      }
    }
  }, []);

  // @Triet: filter product:
  const handleSortBy = (newValue: string) => {
    console.log(
      "sort by value. 1. old value: ",
      selectedSortBy,
      "2. new value: ",
      newValue
    );
    setSelectedSortBy(newValue); // selectedSortBy = newValue

    // TODO: @triet check what is switch statement in JavaScript/TS

    let newProducts: IProduct[] = [...PRODUCTS_INITIALIZE];
    // Handle sort by options
    switch (newValue) {
      case "price-increase":
        // sort by price increase
        newProducts = [...PRODUCTS_INITIALIZE].sort(
          (a, b) => a.price - b.price
        );
        break;
      case "price-decrease":
        // TODO: @triet sort by price decrease (từ cao xuống thấp)
        // Hint: sử dụng sort() với logic ngược lại so với price-increase
        newProducts = [...PRODUCTS_INITIALIZE].sort(
          (a, b) => b.price - a.price
        );
        break;
      case "name-a-z":
        // TODO: @triet sort by name from A-Z
        // Hint: sử dụng sort() với localeCompare() để so sánh chuỗi
        newProducts = [...PRODUCTS_INITIALIZE].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "name-z-a":
        // TODO: @triet sort by name from Z-A
        // Hint: tương tự name-a-z nhưng đảo ngược
        newProducts = [...PRODUCTS_INITIALIZE].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
      case "newest":
        // TODO: @triet sort by newest (mới nhất trước)
        // Hint: cần thêm createdAt vào IProduct interface và sử dụng sort()
        newProducts = [...PRODUCTS_INITIALIZE].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        // timestamp: 1714857600000 -> 2024-05-01 00:00:00. timestamp | UTC time, ISO string| timezone: UTC+0
        break;
      case "oldest":
        // TODO: @triet sort by oldest (cũ nhất trước)
        // Hint: tương tự newest nhưng đảo ngược
        newProducts = [...PRODUCTS_INITIALIZE].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "best-seller":
        // TODO: @triet sort by best seller
        // Hint: cần thêm isBestSeller vào IProduct interface và filter/sort
        newProducts = [...PRODUCTS_INITIALIZE].filter(
          (product) => product.isBestSeller === true
        );
        break;
      default:
        break;
    }

    setProducts(newProducts);
    setTotalProducts(newProducts.length);
  };

  const handleToggleLike = (productId: number) => {
    /*
       likedProductIds: [1, 2, 3]
      Case1: productId is already in likedProductIds
       => HandleToggleLike(1) => [2,3] -remove 1 from likedProductIds

      Case2: productId is not in likedProductIds
      => HandleToggleLike(6) => [1,2,3,6] -add 6 to likedProductIds

      => pseudo code
    */
    let newLikedProductIds: number[] = []; // empty array
    if (likedProductIds.includes(productId)) {
      // remove productId from likedProductIds
      newLikedProductIds = likedProductIds.filter((id) => id !== productId);
    } else {
      // add productId to likedProductIds
      newLikedProductIds = [...likedProductIds, productId];
    }

    console.log("OLD: likedProductIds: ", likedProductIds);
    console.log("NEW: newLikedProductIds: ", newLikedProductIds);

    setLikedProductIds(newLikedProductIds);

    // to save data: 1. call api to save data to server
    //  2. save data to local storage
    // => method 2.
    localStorage.setItem(
      "key_likeProducts",
      JSON.stringify(newLikedProductIds)
    );
    // [key] = value. value is a string
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
          {/* <Button key="price-increase" >Price: Increase</Button>
          <Button key="price-decrease" >Price: Decrease</Button>
          <Button key="name-a-z" >Name: From A-Z</Button>
          <Button key="name-z-a" >Name: From Z-A</Button>
          <Button key="newest" >Newest</Button>
          <Button key="oldest" >Oldest</Button>
          <Button key="best-seller" >Best seller</Button> */}
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
          {products.map((product: IProduct) => (
            <CatergoryProductCard
              key={product.id}
              product={product}
              isLiked={likedProductIds.includes(product.id)}
              toggleLike={() => handleToggleLike(product.id)}
            />
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
