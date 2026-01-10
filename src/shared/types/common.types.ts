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