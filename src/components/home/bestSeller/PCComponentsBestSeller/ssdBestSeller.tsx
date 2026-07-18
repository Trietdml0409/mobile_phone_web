import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function SSDBestSeller({ componentProducts }: { componentProducts: IProduct[] }) {
  const localSSDProducts = componentProducts.filter(
    (product) => product.product_type === "SSD",
  );

  return <RowsOfBestSeller products={localSSDProducts} />;
}
