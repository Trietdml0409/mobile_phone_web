import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function TabletBestSeller({
  phoneAndTabletProducts,
}: {
  phoneAndTabletProducts: IProduct[];
}) {
  // Level 3: filter the phone and tablet array into the tablet local array.
  const localTabletProducts = phoneAndTabletProducts.filter(
    (product) => product.product_type === "tablet",
  );

  return <RowsOfBestSeller products={localTabletProducts} />;
}
