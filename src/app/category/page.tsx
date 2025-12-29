import ImagesProduct from "@/components/category/images_product";
import Information from "@/components/category/information";
import Header from "@/components/header";
import { Flex } from "antd";

export default function Category() {
  return (
    <div>
      <Header />
      <Flex gap="small" style={{ height: "650px", backgroundColor: "white" }}>
        <ImagesProduct />
        <Information />
      </Flex>
    </div>
  );
}
