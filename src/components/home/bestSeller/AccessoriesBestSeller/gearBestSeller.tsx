import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function GearBestSeller({
  accessoryProducts,
}: {
  accessoryProducts: IProduct[];
}) {
  const localGearProducts = accessoryProducts.filter(
    (product) => product.product_type === "Gear",
  );

  return <RowsOfBestSeller products={localGearProducts} />;
}
