import {Col, Row,Card,Grid} from "antd"
import { useRouter } from "next/navigation"; // for App Router
import Contents from "../contents";
import {IProduct} from "@/shared/types/common.types"
const { useBreakpoint } = Grid



export default function RowsOfDiscount({DiscountTypeProducts}:{DiscountTypeProducts:IProduct[]}){
    const router = useRouter();
    const screens = useBreakpoint()
    const isSmallScreen = screens.xs || (screens.sm && !screens.md);
    return(
        <div style={{width:"100%",height:"100%"}}>
            <Row gutter={8}>
                {DiscountTypeProducts.map((product)=>(
                    <Col key={product.id} span={isSmallScreen ? 8:4}>
                        <Contents product= {product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}