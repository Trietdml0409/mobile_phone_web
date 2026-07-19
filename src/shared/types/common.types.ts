
export type ProductType =
  | "PC_Gaming"
  | "Office_PC"
  | "laptop"
  | "cpu"
  | "VGA"
  | "RAM"
  | "SSD"
  | "HDD"
  | "MainBoard"
  | "Gear"
  | "Accesories"
  | "phone"
  | "tablet";

export type DiscountType = "buyOneGetOne" | "priceDiscount" | "none";

interface comments {
  id: number;
  content: string;
  createdAt: string;
  author: string;
  authorAvatar: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  createdAt: string; // time when the product was created in format: "YYYY-MM-DD HH:MM:SS"
  isBestSeller: boolean; // true if the product is a best seller, false otherwise
  brandName: string; // name of the brand of the product -> for filter by brand
  product_type: ProductType;
  discountype: DiscountType;
  discount_value: number;
  liked?: boolean; // true if the product is liked, false otherwise
  comments: comments[];
}

export interface Brand {
  index: number;
  name: string;
}



export interface CartProduct {
  productId: number;
  quantity: number;
  price: number;
  totalPrice: number;
  addedAt: string;
}

export interface CartProductState {
  [key: string]: CartProduct;
}

export interface BlogBody {
  [headerName: string]: {
    content: string;
  };
}

export interface IBlog {
  id: number;
  title: string;
  seo: string;
  Published_date: string;
  summary: string;
  image: string;
  body: BlogBody[];
}
