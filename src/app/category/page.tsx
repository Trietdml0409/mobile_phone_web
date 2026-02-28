"use client";

import Header from "@/components/header";
import { Button, Col, Flex, Row, Pagination } from "antd";
import { useContext, useEffect, useState } from "react";
import { IProduct } from "@/shared/types/common.types";
import CatergoryProductCard from "@/components/category/CatergoryProductCard";
import BrandName from "@/components/category/brand_name";
import { useProduct } from "@/shared/hooks/useProducts";
import { CartContext } from "@/shared/context/cartContext";
import { CartProductState } from "@/shared/types/common.types";
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

  // state save total products
  const [totalProducts, setTotalProducts] = useState<number>(products.length);

  // pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 20; // number of items per page

  // compute slice to show on current page
  const paginatedProducts = localProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  // use context to get productIds, addProductId, removeProductId, clearCart
  const { cartProducts } = useContext(CartContext);

  // TODO: @triet sử dụng useEffect để tự động cập nhật totalProducts khi products thay đổi
  // Hint: import useEffect từ react và thêm dependency [products]
  useEffect(() => {
    setLocalProducts(products);
    setTotalProducts(products.length);
    setCurrentPage(1); // reset pagination when products change
  }, [products]); // A depends on B => B changes => A changes.

  // state save Products
  // state save selected sort by
  const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null);

  // TODO: @triet thêm state để lưu giỏ hàng (cart)
  // Hint: có thể lưu mảng các product hoặc object với {productId, quantity}
  const [cartLocalProductIds, setLocalCartProductIds] =
    useState<CartProductState>({});

  // update cartLocalProductIds when productIds changes
  useEffect(() => {
    setLocalCartProductIds(cartProducts);
  }, [cartProducts]); // dependency is productIds

  function sortByBrand(brand: string): void {
    let newProducts: IProduct[]; // camelCase, snake_case.
    const allProducts: IProduct[] = [...products];
    if (brand == "All") {
      newProducts = allProducts;
    } else {
      newProducts = [...allProducts].filter(
        (product: IProduct) => brand === product.brandName,
      );
    }

    setLocalProducts(newProducts);
    setTotalProducts(newProducts.length);
    setCurrentPage(1); // reset to first page when filtering by brand
  }

  // @Triet: filter product:
  const handleSortBy = (newValue: string) => {
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
          a.name.localeCompare(b.name),
        );
        break;
      case "name-z-a":
        // TODO: @triet sort by name from Z-A
        // Hint: tương tự name-a-z nhưng đảo ngược
        newProducts = [...products].sort((a, b) =>
          b.name.localeCompare(a.name),
        );
        break;
      case "newest":
        // TODO: @triet sort by newest (mới nhất trước)
        // Hint: cần thêm createdAt vào IProduct interface và sử dụng sort()
        newProducts = [...products].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        // timestamp: 1714857600000 -> 2024-05-01 00:00:00. timestamp | UTC time, ISO string| timezone: UTC+0
        break;
      case "oldest":
        // TODO: @triet sort by oldest (cũ nhất trước)
        // Hint: tương tự newest nhưng đảo ngược
        newProducts = [...products].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        );
        break;
      case "best-seller":
        // TODO: @triet sort by best seller
        // Hint: cần thêm isBestSeller vào IProduct interface và filter/sort
        newProducts = [...products].filter(
          (product) => product.isBestSeller === true,
        );
        break;
      default:
        break;
    }

    setLocalProducts(newProducts);
    setTotalProducts(newProducts.length);
    setCurrentPage(1); // reset to first page when sort changes
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        padding: "16px",
      }}
    >
      <Header />
      <Flex vertical style={{ padding: "15px" }}>
        <p style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
          PC GAMING ({totalProducts} PRODUCTS)
        </p>
      </Flex>

      <Flex vertical gap="10px" style={{ padding: "15px" }}>
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

        <div>
          <Row gutter={6}>
            {paginatedProducts.map((product: IProduct) => (
              <Col xs={12} sm={8} md={6} lg={4} key={product.id}>
                <CatergoryProductCard product={product} />
              </Col>
            ))}
          </Row>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Pagination
              current={currentPage}
              pageSize={PAGE_SIZE}
              total={localProducts.length}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
            />
          </div>
        </div>
      </Flex>
    </div>
  );
}
