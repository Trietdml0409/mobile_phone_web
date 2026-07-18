import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function AccessoriesSegment({
  accessoryProducts,
}: {
  accessoryProducts: IProduct[];
}) {
  const localAccessoryProducts = accessoryProducts.filter(
    (product) => product.product_type === "Accesories",
  );

  return <RowsOfBestSeller products={localAccessoryProducts} />;
}
