import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function HDDBestSeller({ componentProducts }: { componentProducts: IProduct[] }) {
  const localHDDProducts = componentProducts.filter(
    (product) => product.product_type === "HDD",
  );

  return <RowsOfBestSeller products={localHDDProducts} />;
}
