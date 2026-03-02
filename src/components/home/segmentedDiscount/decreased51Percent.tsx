import {Col, Row,Card,Grid} from "antd"
import { useRouter } from "next/navigation"; // for App Router
import Contents from "../contents";
import RowsOfDiscount from "./rowsOfDiscount";


const decrease51PercentProducts = [
      {
    "id": 450,
    "name": "Quest 2 VR headset",
    "price": 18000000,
    "image": "https://www.bigw.com.au/medias/sys_master/images/images/hbb/h91/64311724212254.jpg",
    "createdAt": "2026-4-12",
    "isBestSeller": true,
    "brandName": "Oculus",
    "comments": [
      {
        "id": 450001,
        "content": "Great product: Quest 2 VR headset",
        "createdAt": "2026-4-12",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 460,
    "name": "USB-C Docking Station",
    "price": 4200000,
    "image": "https://www.caldigit.com/wp-content/uploads/2019/11/USB-Dock_800.jpg",
    "createdAt": "2026-4-13",
    "isBestSeller": false,
    "brandName": "CalDigit",
    "comments": [
      {
        "id": 460001,
        "content": "Great product: USB-C Docking Station",
        "createdAt": "2026-4-13",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 470,
    "name": "Smart Light Bulb",
    "price": 500000,
    "image": "https://www.jbhifi.com.au/cdn/shop/files/722963-Product-0-I-638542852203000432.jpg?v=1718688609",
    "createdAt": "2026-4-14",
    "isBestSeller": false,
    "brandName": "Philips",
    "comments": [
      {
        "id": 470001,
        "content": "Great product: Smart Light Bulb",
        "createdAt": "2026-4-14",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 480,
    "name": "2-Bay NAS Drive",
    "price": 12000000,
    "image": "https://m.media-amazon.com/images/I/71FUj2j7ReL.jpg",
    "createdAt": "2026-4-15",
    "isBestSeller": false,
    "brandName": "Synology",
    "comments": [
      {
        "id": 480001,
        "content": "Great product: 2-Bay NAS Drive",
        "createdAt": "2026-4-15",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
]

const { useBreakpoint } = Grid



export default function Decrease51Percent(){
    const screens = useBreakpoint()
    const isSmallScreen = screens.xs || (screens.sm && !screens.md);
    const router = useRouter();
    return(
        <div style={{width:"100%",height:"100%"}}>
            <RowsOfDiscount DiscountTypeProducts={decrease51PercentProducts} />
        </div>
    )
}