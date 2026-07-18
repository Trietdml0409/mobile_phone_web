import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function PCGamingBestSeller({
  computerProducts,
}: {
  computerProducts: IProduct[];
}) {
  // Level 3: filter the computer array into the PC Gaming local array.
  const localPCGamingProducts = computerProducts.filter(
    (product) => product.product_type === "PC_Gaming",
  );

  return <RowsOfBestSeller products={localPCGamingProducts} />;
}
