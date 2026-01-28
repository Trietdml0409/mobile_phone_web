
"use client";
import Header from "@/components/header"
import {useContext} from "react"
import {LikedContext} from "@/shared/context/likedContext"
import {Flex,Button,Empty,Typography} from "antd"
import { DeleteOutlined } from "@ant-design/icons";
import {IProduct} from "@/shared/types/common.types"
import {useProduct} from "@/shared/hooks/useProducts"
import { useRouter } from "next/navigation";
import LikedProductCard from "@/components/liked/likedProductCard"
import Link from "next/link";
import {ShoppingOutlined} from "@ant-design/icons"

const { Title, Text } = Typography;
export default function Favourite() {

    const {likedProductIds,clearAll} = useContext(LikedContext)
    const router = useRouter();

    const {products} = useProduct()
    const likedProducts = products.filter(product => likedProductIds.includes(product.id))
    
    return(
        <>
        <div style = {{background:"white",minHeight:"100vh",minWidth:"100wh",display:"flex",flexDirection:"column",gap:"10px",padding:"0 10px"}}>
            <Header/>

            {likedProductIds.length === 0 ?(
            <div
                style={{
                minHeight: "100vh",
                backgroundColor: "white",
                padding: "40px 20px",
                textAlign: "center",
                }}
            >
                <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                    <div>
                    <Title level={3}>Your cart is empty</Title>
                    <Text type="secondary">Add some products to get started!</Text>
                    </div>
                }
                >
                <Link href="/">
                    <Button type="primary" icon={<ShoppingOutlined />}>
                    Continue Shopping
                    </Button>
                </Link>
                </Empty>
            </div>
            ):
            (
                <>
                    <Flex wrap gap="middle" justify="space-between" align="center">
                        <p style={{ color:"black",fontWeight: "bold", fontSize: "40px" }}>Liked Product ({likedProductIds.length})</p>
                        <Flex wrap gap="small">
                            <Button onClick={()=>clearAll()} danger icon={<DeleteOutlined style={{ color: "red" }} />} style={{ color: "red" }} size="large">
                                Clear all
                            </Button>
                            <Button onClick={()=>router.push('/')} size="large">
                                Continue Shopping
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex>
                        {likedProducts.map((product:IProduct)=>{return <LikedProductCard key={product.id} product = {product}/>})}                 
                    </Flex>
                </>

                
            )}


        </div>
        </>
        
    )
}