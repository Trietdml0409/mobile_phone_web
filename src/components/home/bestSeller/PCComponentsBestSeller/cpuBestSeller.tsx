import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function CPUBestSeller({ componentProducts }: { componentProducts: IProduct[] }) {
  const localCPUProducts = componentProducts.filter(
    (product) => product.product_type === "cpu",
  );

  return <RowsOfBestSeller products={localCPUProducts} />;
}
