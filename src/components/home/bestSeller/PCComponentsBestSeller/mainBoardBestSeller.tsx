import RowsOfBestSeller from "../rowsOfBestSeller";
import { IProduct } from "@/shared/types/common.types";

export default function MainBoardBestSeller({ componentProducts }: { componentProducts: IProduct[] }) {
  const localMainBoardProducts = componentProducts.filter(
    (product) => product.product_type === "MainBoard",
  );

  return <RowsOfBestSeller products={localMainBoardProducts} />;
}
