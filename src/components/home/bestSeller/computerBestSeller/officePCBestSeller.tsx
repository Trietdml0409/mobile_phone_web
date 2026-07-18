import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function OfficePCBestSeller({
  computerProducts,
}: {
  computerProducts: IProduct[];
}) {
  // Level 3: filter the computer array into the Office PC local array.
  const localOfficePCProducts = computerProducts.filter(
    (product) => product.product_type === "Office_PC",
  );

  return <RowsOfBestSeller products={localOfficePCProducts} />;
}
