"use client";

import Header from "@/components/header";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Flex } from "antd";
import { Card } from "antd";
import { useState } from "react";

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  // createdAt: string; // time when the product was created in format: "YYYY-MM-DD HH:MM:SS"
  // isBestSeller: boolean; // true if the product is a best seller, false otherwise
  // brandName: string; // name of the brand of the product -> for filter by brand
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
  },
  {
    id: 2,
    name: "PC GTX 1050 2023",
    price: 10000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/5888-5050_866c83a581f44117a7dcb6264f71490f_large.jpg",
  },
  {
    id: 3,
    name: "PC Ryzen 5 5600G 2023",
    price: 50000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/screenshot_2_e5ef09c2fb354e1b86a804bbb10e02a0_large.png",
  },
  {
    id: 4,
    name: "PC Ryzen 7 5800H Gen 1",
    price: 45000000,
    image:
      "https://cdn.hstatic.net/products/200000420363/_new_-_nh-sp-web_60fb8f06edf64bb5968c786a5aa36734_large.png",
  },
  {
    id: 5,
    name: "PC Ryzen 9 5900HX Gen 2",
    price: 30000000,
    image:
      "https://product.hstatic.net/200000420363/product/ls27dg502eexxv-2_a4e1e2792a654f66923442db7a43084b_large.png",
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
  // state save Products
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS_INITIALIZE);
  // state save selected sort by
  const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null);

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
      // TODO: @triet add more sort by options
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
                >
                  Add to Cart
                </Button>
                <Button icon={<HeartOutlined />}></Button>
                <Button icon={<EyeOutlined />}></Button>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
