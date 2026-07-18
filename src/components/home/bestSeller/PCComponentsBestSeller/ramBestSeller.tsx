import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function RAMBestSeller({ componentProducts }: { componentProducts: IProduct[] }) {
  const localRAMProducts = componentProducts.filter(
    (product) => product.product_type === "RAM",
  );

  return <RowsOfBestSeller products={localRAMProducts} />;
}
