
import { IProduct } from "@/shared/types/common.types";
import { Button, Card } from "antd";
import { Flex } from "antd";
import { EyeOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";




export default function Contents({product}:{product:IProduct}) {
  const router = useRouter();
  return (
    <>
      <Card hoverable onClick={() => router.push(`/product-details?id=${product.id}`)} style={{display:"flex",justifyContent:"center"}} >
        <img src={product.image} style={{maxWidth: "100%",maxHeight: "200px",  objectFit: "contain", marginBottom: "15px"}}/>
        <p style={{fontWeight: "bold", fontSize: "12px", textAlign: "center"}}>{product.name}</p>
      </Card>
    </>

  );
}
