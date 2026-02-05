import {Col, Row,Card,Grid} from "antd"
import { useRouter } from "next/navigation"; // for App Router
import Contents from "../contents";



const decrease51PercentProducts = [
    {
    "id": 100,
    "name": "PC AMD Ryzen 3 5300G Entry Build",
    "price": 15000000,
    "image": "https://m.media-amazon.com/images/I/81n2SioeSHS._AC_UF894,1000_QL80_.jpg",
    },
    {
    "id": 110,
    "name": "PC NVIDIA RTX 4060 Ti Creator Pro",
    "price": 40000000,
    "image": "https://bizweb.dktcdn.net/thumb/1024x1024/100/329/122/products/ap201-bk.jpg?v=1725521336987",
    },
    {
    "id": 120,
    "name": "PC Intel Core i3 12100F Budget Edition",
    "price": 12000000,
    "image": "https://pcmarket.vn/media/product/10606_w.jpg",
    },
]

const { useBreakpoint } = Grid



export default function Decrease51Percent(){
    const screens = useBreakpoint()
    const isSmallScreen = screens.xs || (screens.sm && !screens.md);
    const router = useRouter();
    return(
        <div style={{width:"100%",height:"100%"}}>
            <Row gutter={8}>
                {decrease51PercentProducts.map((product)=>(
                    <Col key={product.id} span={isSmallScreen ? 8 : 4}>
                        <Contents product= {product} />

                    </Col>
                ))}
            </Row>
        </div>
    )
}