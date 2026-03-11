import { useState, useEffect } from "react";
import { IProduct } from "../types/common.types";
import PRODUCT_DATA from "@/data_folder/data"

export function useProductDetail({ id }: { id: number | null }) {
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProductDetail = async () => {
      const product = PRODUCT_DATA.find(product => (product.id === id)) 
      if(product){
        setProduct(product)
      }
      // const response = await fetch(`http://localhost:8000/products/${id}`);
      // const responseData = (await response.json()) as {
      //   data: IProduct;
      //   message: string;
      // };
      // setProduct(responseData.data);
    };

    fetchProductDetail();
  }, [id]);

  return { product };
}
