import {Card,Row,Col} from "antd"
import {IProduct} from "@/shared/types/common.types"
import { PriceDisplay } from "../common/priceDisplay";
import { useContext } from "react";
import { CartContext } from "@/shared/context/cartContext";


export default function CheckoutProductCard({product}:{product:IProduct}){
    const {cartProducts} = useContext(CartContext)
    return(
        <>
            <Card style={{height:"100%",display:"Flex", alignItems:"center"}}>
                <Row gutter={12}>
                    <Col span={8}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{
                            width: "100%",       // fill the column width
                            height: "50px",     // fixed height for the cover
                            objectFit: "cover",  // crop/scale to fit nicely
                            borderRadius: "8px"  // optional styling
                            }}
                        />

                    </Col >
                    <Col span={16}>
                        <p >{product.name}</p>
                    </Col >

                </Row>
            </Card>
        </>
    )
}