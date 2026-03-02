import {Col, Row,Card,Grid} from "antd"
import { useRouter } from "next/navigation"; // for App Router
import Contents from "../contents";
import RowsOfDiscount from "./rowsOfDiscount";
const { useBreakpoint } = Grid

const buy1Get1Products = [
    {
    "id": 340,
    "name": "USB Condenser Microphone",
    "price": 2700000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/597885-Product-0-I-637963322578637741.jpg?v=1660699552",
    "createdAt": "2026-4-1",
    "isBestSeller": false,
    "brandName": "Blue",
    "comments": [
      {
        "id": 340001,
        "content": "Great product: USB Condenser Microphone",
        "createdAt": "2026-4-1",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 350,
    "name": "Samsung Tab S9",
    "price": 9000000,
    "image": "https://www.jbhifi.com.au/cdn/shop/files/655507-Product-0-I-638524494007632462.jpg?v=1717558858",
    "createdAt": "2026-4-2",
    "isBestSeller": true,
    "brandName": "Samsung",
    "comments": [
      {
        "id": 350001,
        "content": "Great product: Samsung Tab S9",
        "createdAt": "2026-4-2",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 360,
    "name": "Iphone 12",
    "price": 25000000,
    "image": "https://www.mobileciti.com.au/media/catalog/product/d/s/dss_1_1_1.jpg?width=265&height=265&store=mobileciti&image-type=image",
    "createdAt": "2026-4-3",
    "isBestSeller": true,
    "brandName": "Apple",
    "comments": [
      {
        "id": 360001,
        "content": "Great product: Iphone 12",
        "createdAt": "2026-4-3",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 370,
    "name": "Apple Smartwatch Series 10",
    "price": 8000000,
    "image": "https://www.costco.com.au/medias/sys_master/images/hcf/h23/273530776125470.jpg",
    "createdAt": "2026-4-4",
    "isBestSeller": true,
    "brandName": "Apple",
    "comments": [
      {
        "id": 370001,
        "content": "Great product: Apple Smartwatch Series 10",
        "createdAt": "2026-4-4",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 380,
    "name": "Fast Charger 112W",
    "price": 700000,
    "image": "https://m.media-amazon.com/images/I/511-EeWe28L._AC_UF1000,1000_QL80_.jpg",
    "createdAt": "2026-4-5",
    "isBestSeller": false,
    "brandName": "Anker",
    "comments": [
      {
        "id": 380001,
        "content": "Great product: Fast Charger 112W",
        "createdAt": "2026-4-5",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  }
]


export default function Buy1Get1(){
    const router = useRouter();
    const screens = useBreakpoint()
    const isSmallScreen = screens.xs || (screens.sm && !screens.md);
    return(
        <div style={{width:"100%",height:"100%"}}>
          <RowsOfDiscount DiscountTypeProducts={buy1Get1Products} />
        </div>
    )
}