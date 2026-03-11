import { useState, useEffect } from "react";
import { IProduct } from "../types/common.types";
import PRODUCT_DATA from "@/data_folder/data"


export function useProduct() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // fetch products from server
    const fetchProducts = async () => {
      setProducts(PRODUCT_DATA)
      // const response = await fetch("http://localhost:8000/products");
      // const responseData = (await response.json()) as {
      //   data: IProduct[];
      //   message: string;
      // };
      // setProducts(responseData.data);
    };

    fetchProducts();
  }, []);

  return { products };
}
