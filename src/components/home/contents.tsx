
import { IProduct } from "@/shared/types/common.types";
import { Button, Card } from "antd";
import { Flex } from "antd";
import { EyeOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";




export default function Contents({product}:{product:IProduct}) {
  const router = useRouter();
  return (
    <>
      <Card hoverable onClick={() => router.push(`/product-details?id=${product.id}`)} style={{flex:1,height:"350px",width:"290px",display:"flex",    flexDirection: "column",alignItems: "center",justifyContent: "center"}}>
        <img src={product.image} style={{maxWidth: "250px",maxHeight: "300px",  objectFit: "contain", marginBottom: "15px"}}/>
        <p style={{fontWeight: "bold", fontSize: "20px", textAlign: "center"}}>{product.name}</p>
      </Card>
    </>

  );
}
