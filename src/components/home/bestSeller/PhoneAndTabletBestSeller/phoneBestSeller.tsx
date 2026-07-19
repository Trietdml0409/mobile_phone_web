import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function PhoneBestSeller({
  phoneAndTabletProducts,
}: {
  phoneAndTabletProducts: IProduct[];
}) {
  // Level 3: filter the phone and tablet array into the phone local array.
  const localPhoneProducts = phoneAndTabletProducts.filter(
    (product) => product.product_type === "phone",
  );

  return <RowsOfBestSeller products={localPhoneProducts} />;
}
