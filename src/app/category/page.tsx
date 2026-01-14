"use client";

import Header from "@/components/header";
import { Button, Flex } from "antd";
import { useEffect, useState } from "react";
import { IProduct } from "@/shared/types/common.types";
import CatergoryProductCard from "@/components/category/CatergoryProductCard";
import BrandName from "@/components/category/brand_name";
import { useProduct } from "@/shared/hooks/useProducts";
import { useCart } from "@/shared/hooks/useCart";

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
// statge management
export default function Category() {
  const { products } = useProduct(); // initialize products = 0. 1 call api not response => products = 0.
  const [localProducts, setLocalProducts] = useState<IProduct[]>([]);

  const [likedProductIds, setLikedProductIds] = useState<number[]>([]);

  // state save total products
  const [totalProducts, setTotalProducts] = useState<number>(products.length);

  // TODO: @triet sử dụng useEffect để tự động cập nhật totalProducts khi products thay đổi
  // Hint: import useEffect từ react và thêm dependency [products]
  useEffect(() => {
    setLocalProducts(products);
    setTotalProducts(products.length);
  }, [products]); // A depends on B => B changes => A changes.

  // state save Products
  // state save selected sort by
  const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null);

  // TODO: @triet thêm state để lưu giỏ hàng (cart)
  // Hint: có thể lưu mảng các product hoặc object với {productId, quantity}
  const {cartProductIds,handleCartProductIds} = useCart()
  const [cartLocalProductIds, setLocalCartProductIds] = useState<number[]>([]);

  useEffect(()=>{
    setLocalCartProductIds(cartProductIds)
    console.log(cartProductIds)
  },[cartProductIds])



  function sortByBrand(brand: string): void {
    let newProducts: IProduct[]; // camelCase, snake_case.
    const allProducts: IProduct[] = [...products];
    if (brand == "All") {
      newProducts = allProducts;
    } else {
      newProducts = [...allProducts].filter(
        (product: IProduct) => brand === product.brandName
      );
    }

    setLocalProducts(newProducts);
    setTotalProducts(newProducts.length);
  }

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
      }}}, []);

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

    let newProducts: IProduct[] = [...products];
    // Handle sort by options
    switch (newValue) {
      case "price-increase":
        // sort by price increase
        newProducts = [...products].sort((a, b) => a.price - b.price);
        break;
      case "price-decrease":
        // TODO: @triet sort by price decrease (từ cao xuống thấp)
        // Hint: sử dụng sort() với logic ngược lại so với price-increase
        newProducts = [...products].sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        // TODO: @triet sort by name from A-Z
        // Hint: sử dụng sort() với localeCompare() để so sánh chuỗi
        newProducts = [...products].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "name-z-a":
        // TODO: @triet sort by name from Z-A
        // Hint: tương tự name-a-z nhưng đảo ngược
        newProducts = [...products].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
      case "newest":
        // TODO: @triet sort by newest (mới nhất trước)
        // Hint: cần thêm createdAt vào IProduct interface và sử dụng sort()
        newProducts = [...products].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        // timestamp: 1714857600000 -> 2024-05-01 00:00:00. timestamp | UTC time, ISO string| timezone: UTC+0
        break;
      case "oldest":
        // TODO: @triet sort by oldest (cũ nhất trước)
        // Hint: tương tự newest nhưng đảo ngược
        newProducts = [...products].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "best-seller":
        // TODO: @triet sort by best seller
        // Hint: cần thêm isBestSeller vào IProduct interface và filter/sort
        newProducts = [...products].filter(
          (product) => product.isBestSeller === true
        );
        break;
      default:
        break;
    }

    setLocalProducts(newProducts);
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

    setLikedProductIds(newLikedProductIds);

    // to save data: 1. call api to save data to server
    //  2. save data to local storage
    // => method 2.
    localStorage.setItem("key_likeProducts",JSON.stringify(newLikedProductIds));
    // [key] = value. value is a string
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "white",
        padding: "16px",
      }}
    >
      <Header/>
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

        <BrandName sortByBrand={sortByBrand} />

        <Flex wrap gap="middle">
          {localProducts.map((product: IProduct) => (
            <CatergoryProductCard
              key={product.id}
              product={product}
              isLiked={likedProductIds.includes(product.id)}
              toggleLike={() => handleToggleLike(product.id)}
              cartProductIds={cartProductIds}
              handleCartProductIds={handleCartProductIds}
            />
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
