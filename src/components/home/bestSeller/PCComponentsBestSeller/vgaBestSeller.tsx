import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function VGABestSeller({ componentProducts }: { componentProducts: IProduct[] }) {
  const localVGAProducts = componentProducts.filter(
    (product) => product.product_type === "VGA",
  );

  return <RowsOfBestSeller products={localVGAProducts} />;
}
