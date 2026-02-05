import {Col, Row,Card,Grid} from "antd"
import { useRouter } from "next/navigation"; // for App Router
import Contents from "../contents";
const { useBreakpoint } = Grid

const buy1Get1Products = [
  {
    "id": 10,
    "name": "PC RTX 3050 2023",
    "price": 11000000,
    "image": "https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png",
  },
  {
    "id": 20,
    "name": "PC GTX 1050 2023",
    "price": 10000000,
    "image": "https://cdn.hstatic.net/products/200000420363/5888-5050_866c83a581f44117a7dcb6264f71490f_large.jpg",

  },
  {
    "id": 30,
    "name": "PC Ryzen 5 5600G 2023",
    "price": 50000000,
    "image": "https://cdn.hstatic.net/products/200000420363/screenshot_2_e5ef09c2fb354e1b86a804bbb10e02a0_large.png",
  }
]


export default function Buy1Get1(){
    const router = useRouter();
    const screens = useBreakpoint()
    const isSmallScreen = screens.xs || (screens.sm && !screens.md);
    return(
        <div style={{width:"100%",height:"100%"}}>
            <Row gutter={8}>
                {buy1Get1Products.map((product)=>(
                    <Col key={product.id} span={isSmallScreen ? 8:4}>
                        <Contents product= {product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}