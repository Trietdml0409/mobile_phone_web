import { useState, useEffect } from "react";
import { IProduct } from "../types/common.types";

export function useProduct() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // fetch products from server
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8000/products");
      const responseData = (await response.json()) as {
        data: IProduct[];
        message: string;
      };
      setProducts(responseData.data);
    };

    fetchProducts();
  }, []);

  return { products };
}
