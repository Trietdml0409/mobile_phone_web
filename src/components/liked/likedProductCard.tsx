import { IProduct } from "@/shared/types/common.types"
import {Button, Flex} from "antd"
import { DeleteOutlined } from "@ant-design/icons";
import {useContext} from "react"
import {LikedContext} from "@/shared/context/likedContext"

export default function LikedProductCard({product}:{product:IProduct}) {
    const {removeLikedProductIds} = useContext(LikedContext)
    return(
        <Flex  key={product.id} // unique key to distinguish each product
        align="center"
        justify="start"
        style={{
            height: "400px",
            width: "220px",
            borderRadius: "6px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid rgb(224, 224, 224)",
        }}
        vertical>
        <Flex justify="center" align="center" style={{ height: "240px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img
            style={{
                height: "auto",
                width: "200px",
                borderRadius: "15%",
                objectFit: "fill",
            }}
            src={product.image}
            />
        </Flex>
            <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>{product.name}</p>
            <p style={{fontSize: "24px",fontWeight: "bold",textAlign: "center",color: "rosybrown",}}>{product.price.toLocaleString()} VND</p>
            <p style={{fontSize: "15px",fontWeight: "bold",textAlign: "center", color:"grey"}}>{product.brandName}</p>
            <div style={{paddingTop:"10px"}}>
                <Button  size="middle"  onClick = {()=> removeLikedProductIds(product.id)} icon={<DeleteOutlined style={{ color: "red" }} />} style={{ color: "red", borderColor: "red", fontWeight: "bold" }}>Remove</Button>
            </div>
            
        </Flex>

    )

}