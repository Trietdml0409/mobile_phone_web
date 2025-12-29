"use client";

import ImagesProduct from "@/components/category/images_product";
import Information from "@/components/category/information";
import Header from "@/components/header";
import { Flex } from "antd";
// TODO: @triet import useSearchParams từ next/navigation để lấy productId từ URL
// TODO: @triet import useState và useEffect từ react

// TODO: @triet tạo interface IProduct tương tự như trong category/page.tsx
// Hoặc có thể import từ một file chung nếu muốn tái sử dụng

export default function ProductDetails() {
  // TODO: @triet sử dụng useSearchParams để lấy productId từ query string
  // Ví dụ: URL là /product-details?id=1 thì lấy id=1
  // Hint: const searchParams = useSearchParams(); const productId = searchParams.get('id');

  // TODO: @triet tạo state để lưu thông tin sản phẩm hiện tại
  // Hint: const [product, setProduct] = useState<IProduct | null>(null);
  // TODO: @triet tạo state để lưu số lượng sản phẩm muốn mua
  // Hint: const [quantity, setQuantity] = useState<number>(1);

  // TODO: @triet sử dụng useEffect để fetch thông tin sản phẩm dựa trên productId
  // Hint: useEffect(() => { ... }, [productId])
  // Trong useEffect, tìm sản phẩm từ PRODUCTS_INITIALIZE (hoặc từ API nếu có)
  // và setProduct với sản phẩm tìm được

  // TODO: @triet tạo hàm handleBuyNow để xử lý khi click nút "BUY NOW"
  // Hint: có thể console.log hoặc hiển thị alert với thông tin sản phẩm và số lượng

  // TODO: @triet tạo hàm handleAddToCart để xử lý khi click nút "ADD TO CART"
  // Hint: tương tự handleBuyNow

  // TODO: @triet nếu product === null, hiển thị loading hoặc "Product not found"
  // Hint: sử dụng conditional rendering: if (!product) return <div>Loading...</div>

  return (
    <div>
      <Header />
      <Flex gap="small" style={{ height: "650px", backgroundColor: "white" }}>
        {/* TODO: @triet truyền product.image vào component ImagesProduct thông qua props */}
        {/* Hint: cần sửa ImagesProduct component để nhận prop image */}
        <ImagesProduct />
        {/* TODO: @triet truyền product, quantity, và các handler functions vào Information component */}
        {/* Hint: cần sửa Information component để nhận các props: product, quantity, setQuantity, handleBuyNow, handleAddToCart */}
        <Information />
      </Flex>
    </div>
  );
}
