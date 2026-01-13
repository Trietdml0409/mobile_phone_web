import { useState, useEffect } from "react";
import { IProduct } from "../types/common.types";

export function useProductDetail({ id }: { id: number }) {
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const response = await fetch(`http://localhost:8000/products/${id}`);
      const responseData = (await response.json()) as {
        data: IProduct;
        message: string;
      };
      setProduct(responseData.data);
    };

    fetchProductDetail();
  }, [id]);

  return { product };
}
