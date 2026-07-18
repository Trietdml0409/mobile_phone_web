import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function LaptopBestSeller({
  computerProducts,
}: {
  computerProducts: IProduct[];
}) {
  // Level 3: filter the computer array into the laptop local array.
  const localLaptopProducts = computerProducts.filter(
    (product) => product.product_type === "laptop",
  );

  return <RowsOfBestSeller products={localLaptopProducts} />;
}
