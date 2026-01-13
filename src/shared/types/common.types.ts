import {useEffect,useState} from "react"

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  createdAt: string; // time when the product was created in format: "YYYY-MM-DD HH:MM:SS"
  isBestSeller: boolean; // true if the product is a best seller, false otherwise
  brandName: string; // name of the brand of the product -> for filter by brand
  liked?: boolean; // true if the product is liked, false otherwise
}

export interface Brand{
  index: number;
  name: string;
}

export function useProduct(){
   const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {

    // fetch products from server
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8000/products");
      const responseData = (await response.json()) as {
        data: IProduct[];
        message: string;
      };
      console.log("Response data: ", responseData);
      setProducts(responseData.data);
    };

    fetchProducts();
  }, []);

  return {products}
  
}

