import { IProduct } from "@/shared/types/common.types";

const PRODUCT_DATA: IProduct[] = [
  {
    "id": 10,
    "name": "PC RTX 3050 2023",
    "price": 11000000,
    "image": "https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png",
    "createdAt": "2026-3-1",
    "isBestSeller": true,
    "brandName": "NVIDIA",
    "product_type": "PC_Gaming",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "liked": false,
    "comments": [
      {
        "id": 1224853,
        "content": "Máy này rất tốt",
        "createdAt": "2026-3-1",
        "author": "John Doe",
        "authorAvatar": "https://via.placeholder.com/150"
      },
      {
        "id": 2228405,
        "content": "Tôi thích máy này",
        "createdAt": "2026-3-1",
        "author": "Jane Doe",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 20,
    "name": "PC GTX 1050 2023",
    "price": 10000000,
    "image": "https://cdn.hstatic.net/products/200000420363/5888-5050_866c83a581f44117a7dcb6264f71490f_large.jpg",
    "createdAt": "2026-3-1",
    "isBestSeller": true,
    "brandName": "NVIDIA",
    "product_type": "PC_Gaming",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 20001,
        "content": "Great product: PC GTX 1050 2023",
        "createdAt": "2026-3-1",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 30,
    "name": "PC Ryzen 5 5600G 2023",
    "price": 50000000,
    "image": "https://cdn.hstatic.net/products/200000420363/screenshot_2_e5ef09c2fb354e1b86a804bbb10e02a0_large.png",
    "createdAt": "2026-3-1",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "PC_Gaming",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 30001,
        "content": "Great product: PC Ryzen 5 5600G 2023",
        "createdAt": "2026-3-1",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 40,
    "name": "PC Ryzen 7 5800H Gen 1",
    "price": 45000000,
    "image": "https://i.ebayimg.com/images/g/~7oAAOSw0gRnEkOS/s-l400.jpg",
    "createdAt": "2026-3-1",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "PC_Gaming",
    "discountype": "priceDiscount",
    "discount_value": 25,
    "comments": [
      {
        "id": 40001,
        "content": "Great product: PC Ryzen 7 5800H Gen 1",
        "createdAt": "2026-3-1",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 50,
    "name": "PC Ryzen 9 5900HX Gen 2",
    "price": 30000000,
    "image": "https://product.hstatic.net/200000420363/product/ls27dg502eexxv-2_a4e1e2792a654f66923442db7a43084b_large.png",
    "createdAt": "2026-3-1",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "PC_Gaming",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 50001,
        "content": "Great product: PC Ryzen 9 5900HX Gen 2",
        "createdAt": "2026-3-1",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 60,
    "name": "PC Intel Core i9 12900K Elite",
    "price": 35000000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9kc8Lvcn2EVN_RFC92AuV3AeDHJY_MRW3w&s",
    "createdAt": "2026-3-3",
    "isBestSeller": true,
    "brandName": "Intel",
    "product_type": "PC_Gaming",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "comments": [
      {
        "id": 60001,
        "content": "Great product: PC Intel Core i9 12900K Elite",
        "createdAt": "2026-3-3",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 70,
    "name": "PC Intel Core i7 12700F Creator Edition",
    "price": 27000000,
    "image": "https://cdn2.cellphones.com.vn/x/media/catalog/product/p/c/pc-cps-gaming-g13_1_.png",
    "createdAt": "2026-3-5",
    "isBestSeller": false,
    "brandName": "Intel",
    "product_type": "PC_Gaming",
    "discountype": "priceDiscount",
    "discount_value": 51,
    "comments": [
      {
        "id": 70001,
        "content": "Great product: PC Intel Core i7 12700F Creator Edition",
        "createdAt": "2026-3-5",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 80,
    "name": "PC Ryzen Threadripper Pro 5975WX Workstation",
    "price": 60000000,
    "image": "https://product.hstatic.net/1000129940/product/pc_aps_x_amd_ryzen_threadripper_pro_5975wx_7e00635c1e654bc19e14f2aead2cc0fb_master.png",
    "createdAt": "2026-3-6",
    "isBestSeller": true,
    "brandName": "AMD",
    "product_type": "PC_Gaming",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 80001,
        "content": "Great product: PC Ryzen Threadripper Pro 5975WX Workstation",
        "createdAt": "2026-3-6",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 90,
    "name": "PC Intel Core i5 12600K Gaming Rig",
    "price": 22000000,
    "image": "https://m.media-amazon.com/images/I/91M4ZSKfn8L.jpg",
    "createdAt": "2026-3-7",
    "isBestSeller": false,
    "brandName": "Intel",
    "product_type": "PC_Gaming",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 90001,
        "content": "Great product: PC Intel Core i5 12600K Gaming Rig",
        "createdAt": "2026-3-7",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 100,
    "name": "PC AMD Ryzen 3 5300G Entry Build",
    "price": 15000000,
    "image": "https://m.media-amazon.com/images/I/81n2SioeSHS._AC_UF894,1000_QL80_.jpg",
    "createdAt": "2026-3-8",
    "isBestSeller": true,
    "brandName": "AMD",
    "product_type": "PC_Gaming",
    "discountype": "priceDiscount",
    "discount_value": 20,
    "comments": [
      {
        "id": 100001,
        "content": "Great product: PC AMD Ryzen 3 5300G Entry Build",
        "createdAt": "2026-3-8",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 110,
    "name": "PC NVIDIA RTX 4060 Ti Creator Pro",
    "price": 40000000,
    "image": "https://bizweb.dktcdn.net/thumb/1024x1024/100/329/122/products/ap201-bk.jpg?v=1725521336987",
    "createdAt": "2026-3-9",
    "isBestSeller": true,
    "brandName": "NVIDIA",
    "product_type": "PC_Gaming",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "comments": [
      {
        "id": 110001,
        "content": "Great product: PC NVIDIA RTX 4060 Ti Creator Pro",
        "createdAt": "2026-3-9",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 120,
    "name": "PC Intel Core i3 12100F Budget Edition",
    "price": 12000000,
    "image": "https://pcmarket.vn/media/product/10606_w.jpg",
    "createdAt": "2026-3-10",
    "isBestSeller": false,
    "brandName": "Intel",
    "product_type": "PC_Gaming",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 120001,
        "content": "Great product: PC Intel Core i3 12100F Budget Edition",
        "createdAt": "2026-3-10",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 130,
    "name": "PC AMD Ryzen 9 7950X Ultimate Gaming",
    "price": 65000000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCp1ZyjCJB3Ck9bkkwxrJ312CVPixcislL_w&s",
    "createdAt": "2026-3-11",
    "isBestSeller": true,
    "brandName": "AMD",
    "product_type": "Office_PC",
    "discountype": "priceDiscount",
    "discount_value": 40,
    "comments": [
      {
        "id": 130001,
        "content": "Great product: PC AMD Ryzen 9 7950X Ultimate Gaming",
        "createdAt": "2026-3-11",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 140,
    "name": "PC AMD Radeon RX 6800 XT Enthusiast",
    "price": 48000000,
    "image": "https://i.redd.it/vzycr3cnwk761.jpg",
    "createdAt": "2026-3-12",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "Office_PC",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 140001,
        "content": "Great product: PC AMD Radeon RX 6800 XT Enthusiast",
        "createdAt": "2026-3-12",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 150,
    "name": "PC Intel Core i9 13900K Ultra",
    "price": 55000000,
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4YIm7OBsDyMYpgIdF861i7p2uOYkOY527TcnRrWmwSBFakfxCC4pw1CrPK7zI29r3jh15N3jnEHS9QaZgDlZ3zeeQEurKV4CdpZkVKf2advjlm8FRldQMwAOpXxqtDxrEyUsOHRc&usqp=CAc",
    "createdAt": "2026-3-13",
    "isBestSeller": true,
    "brandName": "Intel",
    "product_type": "Office_PC",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 150001,
        "content": "Great product: PC Intel Core i9 13900K Ultra",
        "createdAt": "2026-3-13",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 160,
    "name": "PC NVIDIA GeForce RTX 4090 Ti Dream",
    "price": 120000000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvU5xMs4qbFdzyHm4msTN2uulWAwAQP0VEzw&s",
    "createdAt": "2026-3-14",
    "isBestSeller": true,
    "brandName": "NVIDIA",
    "product_type": "Office_PC",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "comments": [
      {
        "id": 160001,
        "content": "Great product: PC NVIDIA GeForce RTX 4090 Ti Dream",
        "createdAt": "2026-3-14",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 170,
    "name": "PC Intel Core i5 13600KF Midrange",
    "price": 24000000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFCu1Kc9AZJKmStaqbkLh5dmG6GHZYYAxlg&s",
    "createdAt": "2026-3-15",
    "isBestSeller": false,
    "brandName": "Intel",
    "product_type": "Office_PC",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 170001,
        "content": "Great product: PC Intel Core i5 13600KF Midrange",
        "createdAt": "2026-3-15",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 180,
    "name": "PC AMD Ryzen 7 7700X Performance",
    "price": 32000000,
    "image": "https://assets.msy.com.au/newsite/images/202303/source_img/Gaming-PCs-G7-Ultra-Ryzen-7-7700X-RTX-4070-TI-Gaming-PC-Powered-by-ASUS-14.webp",
    "createdAt": "2026-3-16",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "Office_PC",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 180001,
        "content": "Great product: PC AMD Ryzen 7 7700X Performance",
        "createdAt": "2026-3-16",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 190,
    "name": "PC NVIDIA Quadro RTX 6000 Pro",
    "price": 90000000,
    "image": "https://imagecdn.jw.com.au/media/catalog/product/j/w/jw_proart_rtx_6000_pro_thumbv2.jpg?width=514&height=514&store=default&image-type=image",
    "createdAt": "2026-3-17",
    "isBestSeller": false,
    "brandName": "NVIDIA",
    "product_type": "Office_PC",
    "discountype": "priceDiscount",
    "discount_value": 30,
    "comments": [
      {
        "id": 190001,
        "content": "Great product: PC NVIDIA Quadro RTX 6000 Pro",
        "createdAt": "2026-3-17",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 200,
    "name": "PC Intel Pentium Gold G7400 Budget",
    "price": 8000000,
    "image": "https://taqwaitbd.com/wp-content/uploads/2024/02/Desktop-01-1.webp",
    "createdAt": "2026-3-18",
    "isBestSeller": false,
    "brandName": "Intel",
    "product_type": "Office_PC",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 200001,
        "content": "Great product: PC Intel Pentium Gold G7400 Budget",
        "createdAt": "2026-3-18",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 210,
    "name": "PC AMD Athlon 3000G Basic",
    "price": 6000000,
    "image": "https://cdn.mos.cms.futurecdn.net/EdnUGYCMk8rEwbPDufRSL8.jpg",
    "createdAt": "2026-3-19",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "Office_PC",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "comments": [
      {
        "id": 210001,
        "content": "Great product: PC AMD Athlon 3000G Basic",
        "createdAt": "2026-3-19",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 220,
    "name": "PC NVIDIA GeForce GTX 1660 Super Classic",
    "price": 20000000,
    "image": "https://cdn.mos.cms.futurecdn.net/zWEbQuy8dwh5NuVHwu7AA4-2000-80.jpg",
    "createdAt": "2026-3-20",
    "isBestSeller": false,
    "brandName": "NVIDIA",
    "product_type": "Office_PC",
    "discountype": "priceDiscount",
    "discount_value": 10,
    "comments": [
      {
        "id": 220001,
        "content": "Great product: PC NVIDIA GeForce GTX 1660 Super Classic",
        "createdAt": "2026-3-20",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 230,
    "name": "PC Intel Core i7 14700F Future",
    "price": 38000000,
    "image": "https:///encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9V0X0NqHh-zkCNzkc659TfAD2h6HBlQuvw&s",
    "createdAt": "2026-3-21",
    "isBestSeller": true,
    "brandName": "Intel",
    "product_type": "Office_PC",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 230001,
        "content": "Great product: PC Intel Core i7 14700F Future",
        "createdAt": "2026-3-21",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 240,
    "name": "Logitech G502 Wireless Gaming Mouse",
    "price": 1500000,
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTu7lglT98VU3jpTGBwtNV-dfhK4lZRshJTOoHhm7XBC6wKFO32oN0tgPfHMcXwThJTNrShwp0QENb3f8WXoWwKhSQfUKuuMaKu8ebeex4l38LmC_EviCmkr8hLOFFBWUJFpvlFeA&usqp=CAc",
    "createdAt": "2026-3-22",
    "isBestSeller": true,
    "brandName": "Logitech",
    "product_type": "Gear",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 240001,
        "content": "Great product: Logitech G502 Wireless Gaming Mouse",
        "createdAt": "2026-3-22",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 250,
    "name": "7-in-1 USB-C Multiport Adapter",
    "price": 900000,
    "image": "https://www.jbhifi.com.au/cdn/shop/files/778635-Product-0-I-638569617003677934_77cd10af-b9b4-4e1d-a2df-7aa9e62cb53c.jpg?v=1724625852",
    "createdAt": "2026-3-23",
    "isBestSeller": false,
    "brandName": "Anker",
    "product_type": "Accesories",
    "discountype": "priceDiscount",
    "discount_value": 25,
    "comments": [
      {
        "id": 250001,
        "content": "Great product: 7-in-1 USB-C Multiport Adapter",
        "createdAt": "2026-3-23",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 260,
    "name": "JBL Boombox 3 Bluetooth Speaker",
    "price": 2500000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/597954-Product-0-I-638144834598903544.jpg?v=1678847130",
    "createdAt": "2026-3-24",
    "isBestSeller": true,
    "brandName": "JBL",
    "product_type": "Accesories",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "comments": [
      {
        "id": 260001,
        "content": "Great product: JBL Boombox 3 Bluetooth Speaker",
        "createdAt": "2026-3-24",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 270,
    "name": "GTEK Storm 75 Gaming Keyboard",
    "price": 3200000,
    "image": "https://www.jbhifi.com.au/cdn/shop/files/796064-Product-0-I-638720617805379891.jpg?v=1736465056",
    "createdAt": "2026-3-25",
    "isBestSeller": false,
    "brandName": "Razer",
    "product_type": "Gear",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 270001,
        "content": "Great product: GTEK Storm 75 Gaming Keyboard",
        "createdAt": "2026-3-25",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 280,
    "name": "C290 Webcam",
    "price": 1800000,
    "image": "https://m.media-amazon.com/images/I/71eGb1FcyiL.jpg",
    "createdAt": "2026-3-26",
    "isBestSeller": false,
    "brandName": "Logitech",
    "product_type": "Accesories",
    "discountype": "priceDiscount",
    "discount_value": 51,
    "comments": [
      {
        "id": 280001,
        "content": "Great product: C290 Webcam",
        "createdAt": "2026-3-26",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 290,
    "name": "Wireless Router AX3000",
    "price": 5500000,
    "image": "https://www.jbhifi.com.au/cdn/shop/files/671653-Product-0-I-638931604803391758.jpg?v=1757563745",
    "createdAt": "2026-3-27",
    "isBestSeller": true,
    "brandName": "TP-Link",
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 290001,
        "content": "Great product: Wireless Router AX3000",
        "createdAt": "2026-3-27",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 300,
    "name": "1TB NVMe SSD",
    "price": 2500000,
    "image": "https://m.media-amazon.com/images/I/713h+shZfQL.jpg",
    "createdAt": "2026-3-28",
    "isBestSeller": true,
    "brandName": "Samsung",
    "product_type": "SSD",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 300001,
        "content": "Great product: 1TB NVMe SSD",
        "createdAt": "2026-3-28",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 310,
    "name": "4TB External HDD",
    "price": 3500000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/397633-Product-0-I_1024x1024.jpg",
    "createdAt": "2026-3-29",
    "isBestSeller": true,
    "brandName": "Western Digital",
    "product_type": "HDD",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "comments": [
      {
        "id": 310001,
        "content": "Great product: 4TB External HDD",
        "createdAt": "2026-3-29",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 320,
    "name": "27-inch 4K Monitor",
    "price": 15000000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIC3LQOAetmCnFZYWF9P7T8oX0QRzp53MnA&s",
    "createdAt": "2026-3-30",
    "isBestSeller": true,
    "brandName": "Dell",
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 320001,
        "content": "Great product: 27-inch 4K Monitor",
        "createdAt": "2026-3-30",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 330,
    "name": "Noise-Cancelling Headset WH-1000XM4",
    "price": 6000000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/477061-Product-0-I-637308364268258341_26472290-a9eb-477a-af6a-04e485a33e4d.jpg?v=1634081952",
    "createdAt": "2026-3-31",
    "isBestSeller": false,
    "brandName": "Sony",
    "product_type": "Gear",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 330001,
        "content": "Great product: Noise-Cancelling Headset WH-1000XM4",
        "createdAt": "2026-3-31",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 340,
    "name": "USB Condenser Microphone",
    "price": 2700000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/597885-Product-0-I-637963322578637741.jpg?v=1660699552",
    "createdAt": "2026-4-1",
    "isBestSeller": false,
    "brandName": "Blue",
    "product_type": "Accesories",
    "discountype": "priceDiscount",
    "discount_value": 40,
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
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
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
    "product_type": "Accesories",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
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
    "product_type": "Accesories",
    "discountype": "priceDiscount",
    "discount_value": 15,
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
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 380001,
        "content": "Great product: Fast Charger 112W",
        "createdAt": "2026-4-5",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 390,
    "name": "20000mAh Power Bank",
    "price": 1200000,
    "image": "https://www.gadgets4geeks.com.au/WebRoot/Store/Shops/gadgets4geeks/60CA/0774/2A9A/964A/F444/C0A8/DA16/7EE8/xiaomi-20000mah-mi-power-bank-3-usb-type-c-18w-charger-white.jpg",
    "createdAt": "2026-4-6",
    "isBestSeller": false,
    "brandName": "Xiaomi",
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 390001,
        "content": "Great product: 20000mAh Power Bank",
        "createdAt": "2026-4-6",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 400,
    "name": "Deskjet 2820e Printer",
    "price": 5500000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/667285-Product-0-I-638451968431989505.jpg?v=1709600109",
    "createdAt": "2026-4-7",
    "isBestSeller": false,
    "brandName": "HP",
    "product_type": "Accesories",
    "discountype": "priceDiscount",
    "discount_value": 30,
    "comments": [
      {
        "id": 400001,
        "content": "Great product: Deskjet 2820e Printer",
        "createdAt": "2026-4-7",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 410,
    "name": "Gaming Mousepad XXL",
    "price": 450000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/581795-Product-0-I-637985840845848428.jpg?v=1662951426",
    "createdAt": "2026-4-8",
    "isBestSeller": false,
    "brandName": "Corsair",
    "product_type": "Gear",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "comments": [
      {
        "id": 410001,
        "content": "Great product: Gaming Mousepad XXL",
        "createdAt": "2026-4-8",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 420,
    "name": "Graphics Drawing Tablet",
    "price": 3800000,
    "image": "https://cdn-media.wacom.com/-/media/images/carousels/homepage-a-slots/2020/2020-image-redux/wacom-never-stop-learning-m-mobile.jpg?h=450&iar=0&w=726&rev=6165768b62154280b22301d493f2434e&hash=33C261B1CCD35432C72B56B37D5CBBAE",
    "createdAt": "2026-4-9",
    "isBestSeller": false,
    "brandName": "Wacom",
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 420001,
        "content": "Great product: Graphics Drawing Tablet",
        "createdAt": "2026-4-9",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 430,
    "name": "Ethernet Cable Cat6",
    "price": 150000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70Ijub54aElBqZpx1MptjDYffD_0p03H-8g&s",
    "createdAt": "2026-4-10",
    "isBestSeller": false,
    "brandName": "Belkin",
    "product_type": "Accesories",
    "discountype": "priceDiscount",
    "discount_value": 10,
    "comments": [
      {
        "id": 430001,
        "content": "Great product: Ethernet Cable Cat6",
        "createdAt": "2026-4-10",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 440,
    "name": "Buds 3 Pro",
    "price": 2200000,
    "image": "https://www.jbhifi.com.au/cdn/shop/files/776220-Product-0-I-638561819463124022.jpg?v=1720621462",
    "createdAt": "2026-4-11",
    "isBestSeller": true,
    "brandName": "Samsung",
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 440001,
        "content": "Great product: Buds 3 Pro",
        "createdAt": "2026-4-11",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 450,
    "name": "Quest 2 VR headset",
    "price": 18000000,
    "image": "https://www.bigw.com.au/medias/sys_master/images/images/hbb/h91/64311724212254.jpg",
    "createdAt": "2026-4-12",
    "isBestSeller": true,
    "brandName": "Oculus",
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
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
    "product_type": "Accesories",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
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
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
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
    "product_type": "HDD",
    "discountype": "none",
    "discount_value": 0,
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
  {
    "id": 490,
    "name": "Nintendo switch",
    "price": 8000000,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg/500px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg",
    "createdAt": "2026-4-16",
    "isBestSeller": true,
    "brandName": "Nintendo",
    "product_type": "Accesories",
    "discountype": "priceDiscount",
    "discount_value": 51,
    "comments": [
      {
        "id": 490001,
        "content": "Great product: Nintendo switch",
        "createdAt": "2026-4-16",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 500,
    "name": "Minin smart Projector",
    "price": 6500000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerCjH7QOXgBYNDxcxbOJlC6yJU2IYU4nvKQ&s",
    "createdAt": "2026-4-17",
    "isBestSeller": false,
    "brandName": "Epson",
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 500001,
        "content": "Great product: Minin smart Projector",
        "createdAt": "2026-4-17",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 510,
    "name": "Fitness Tracker Charge 6",
    "price": 3000000,
    "image": "https://www.jbhifi.com.au/cdn/shop/files/662613-Product-0-I-638314516214165397.jpg?v=1782436096",
    "createdAt": "2026-4-18",
    "isBestSeller": true,
    "brandName": "Fitbit",
    "product_type": "Accesories",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "comments": [
      {
        "id": 510001,
        "content": "Great product: Fitness Tracker Charge 6",
        "createdAt": "2026-4-18",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 520,
    "name": "Smart Thermostat",
    "price": 5600000,
    "image": "https://i.ebayimg.com/images/g/-hoAAOSwzeddk9YK/s-l1200.jpg",
    "createdAt": "2026-4-19",
    "isBestSeller": false,
    "brandName": "Nest",
    "product_type": "Accesories",
    "discountype": "priceDiscount",
    "discount_value": 20,
    "comments": [
      {
        "id": 520001,
        "content": "Great product: Smart Thermostat",
        "createdAt": "2026-4-19",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 530,
    "name": "Drone DJI Mini",
    "price": 22000000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/623786-Product-0-I-638325781204882218.jpg?v=1698704622",
    "createdAt": "2026-4-20",
    "isBestSeller": true,
    "brandName": "DJI",
    "product_type": "Accesories",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 530001,
        "content": "Great product: Drone DJI Mini",
        "createdAt": "2026-4-20",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 540,
    "name": "Portable SSD 2TB",
    "price": 4500000,
    "image": "https://www.jbhifi.com.au/cdn/shop/products/483261-Product-0-I-637418328137216513.jpg?v=1606196484",
    "createdAt": "2026-4-21",
    "isBestSeller": false,
    "brandName": "SanDisk",
    "product_type": "SSD",
    "discountype": "none",
    "discount_value": 0,
    "comments": [
      {
        "id": 540001,
        "content": "Great product: Portable SSD 2TB",
        "createdAt": "2026-4-21",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 550,
    "name": "ASUS TUF Gaming A15 Laptop",
    "price": 24900000,
    "image": "https://dlcdnwebimgs.asus.com/gain/a25d4381-0f1a-48bd-86d6-3bd59f017f19/",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "ASUS",
    "product_type": "laptop",
    "discountype": "priceDiscount",
    "discount_value": 15,
    "liked": false,
    "comments": [
      {
        "id": 550001,
        "content": "Great product: ASUS TUF Gaming A15 Laptop",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 560,
    "name": "Acer Nitro V 15 Laptop",
    "price": 21900000,
    "image": "https://m.media-amazon.com/images/I/41WwqeNwvZL.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Acer",
    "product_type": "laptop",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 560001,
        "content": "Great product: Acer Nitro V 15 Laptop",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 570,
    "name": "Lenovo LOQ 15 Gaming Laptop",
    "price": 26900000,
    "image": "https://p3-ofp.static.pub//fes/cms/2024/05/20/0ri6iws8ikrqm03rf2e20ym9ww12fs021874.png",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "Lenovo",
    "product_type": "laptop",
    "discountype": "priceDiscount",
    "discount_value": 20,
    "liked": false,
    "comments": [
      {
        "id": 570001,
        "content": "Great product: Lenovo LOQ 15 Gaming Laptop",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 580,
    "name": "HP Victus 16 Laptop",
    "price": 28900000,
    "image": "https://sm.pcmag.com/pcmag_au/review/h/hp-victus-/hp-victus-16-2023_pqp4.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "HP",
    "product_type": "laptop",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "liked": false,
    "comments": [
      {
        "id": 580001,
        "content": "Great product: HP Victus 16 Laptop",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 590,
    "name": "Dell Inspiron 15 Laptop",
    "price": 17900000,
    "image": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3530-intel/media-gallery/silver-plastic/notebook-inspiron-15-3530-nt-plastic-silver-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=4535&hei=3009&qlt=100,1&resMode=sharp2&size=4535,3009&chrss=full&imwidth=5000",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Dell",
    "product_type": "laptop",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 590001,
        "content": "Great product: Dell Inspiron 15 Laptop",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 600,
    "name": "Apple MacBook Air M3",
    "price": 31900000,
    "image": "https://www.jbhifi.com.au/cdn/shop/files/748138-Product-0-I-638659357361932372_1024x1024.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "Apple",
    "product_type": "laptop",
    "discountype": "priceDiscount",
    "discount_value": 10,
    "liked": false,
    "comments": [
      {
        "id": 600001,
        "content": "Great product: Apple MacBook Air M3",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 610,
    "name": "Intel Core i3 12100F CPU",
    "price": 2600000,
    "image": "https://m.media-amazon.com/images/I/61QvU+coZML.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Intel",
    "product_type": "cpu",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 610001,
        "content": "Great product: Intel Core i3 12100F CPU",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 620,
    "name": "Intel Core i5 12400F CPU",
    "price": 3900000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSj4e8poemVnc0F_o9GMoN31ObgUEu9n7yI5WzvoPDq3bOVMTLT4QSZOW&s=10",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Intel",
    "product_type": "cpu",
    "discountype": "priceDiscount",
    "discount_value": 15,
    "liked": false,
    "comments": [
      {
        "id": 620001,
        "content": "Great product: Intel Core i5 12400F CPU",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 630,
    "name": "Intel Core i7 13700K CPU",
    "price": 10500000,
    "image": "https://m.media-amazon.com/images/I/515lU6LNpsL._AC_UF894,1000_QL80_.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "Intel",
    "product_type": "cpu",
    "discountype": "priceDiscount",
    "discount_value": 25,
    "liked": false,
    "comments": [
      {
        "id": 630001,
        "content": "Great product: Intel Core i7 13700K CPU",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 640,
    "name": "AMD Ryzen 5 5600X CPU",
    "price": 4200000,
    "image": "https://cdn1.centrecom.com.au/images/upload/0088201_0.jpeg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "cpu",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "liked": false,
    "comments": [
      {
        "id": 640001,
        "content": "Great product: AMD Ryzen 5 5600X CPU",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 650,
    "name": "AMD Ryzen 7 7800X3D CPU",
    "price": 11900000,
    "image": "https://m.media-amazon.com/images/I/61kuNFhOiwL.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "cpu",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 650001,
        "content": "Great product: AMD Ryzen 7 7800X3D CPU",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 660,
    "name": "AMD Ryzen 9 7950X CPU",
    "price": 14800000,
    "image": "https://m.media-amazon.com/images/I/5116zdA9uyL._AC_UF894,1000_QL80_.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "AMD",
    "product_type": "cpu",
    "discountype": "priceDiscount",
    "discount_value": 20,
    "liked": false,
    "comments": [
      {
        "id": 660001,
        "content": "Great product: AMD Ryzen 9 7950X CPU",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 670,
    "name": "NVIDIA GTX 1660 Super VGA",
    "price": 5900000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXGme32AEj5c2Yf3RhEGIZstRoIf48PrreWf4lNEOEw&s=10",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "NVIDIA",
    "product_type": "VGA",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 670001,
        "content": "Great product: NVIDIA GTX 1660 Super VGA",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 680,
    "name": "NVIDIA RTX 3060 12GB VGA",
    "price": 8200000,
    "image": "https://m.media-amazon.com/images/I/71hoPufXoDL.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "NVIDIA",
    "product_type": "VGA",
    "discountype": "priceDiscount",
    "discount_value": 15,
    "liked": false,
    "comments": [
      {
        "id": 680001,
        "content": "Great product: NVIDIA RTX 3060 12GB VGA",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 690,
    "name": "NVIDIA RTX 4060 Ti VGA",
    "price": 11900000,
    "image": "https://assets.umart.com.au/newsite/images/202309/source_img/PNY-GeForce-RTX-4060-Ti-Verto-Dual-16G-OC-Graphics-Card-7.webp",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "NVIDIA",
    "product_type": "VGA",
    "discountype": "priceDiscount",
    "discount_value": 30,
    "liked": false,
    "comments": [
      {
        "id": 690001,
        "content": "Great product: NVIDIA RTX 4060 Ti VGA",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 700,
    "name": "NVIDIA RTX 4070 Super VGA",
    "price": 18900000,
    "image": "https://assets.umart.com.au/newsite/images/202402/source_img/GeForce-RTX-4070-Super-PNY-GeForce-4070-Super-Verto-Dual-Fan-12G-Graphics-Card-6.webp",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "NVIDIA",
    "product_type": "VGA",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "liked": false,
    "comments": [
      {
        "id": 700001,
        "content": "Great product: NVIDIA RTX 4070 Super VGA",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 710,
    "name": "AMD Radeon RX 7600 VGA",
    "price": 8500000,
    "image": "https://m.media-amazon.com/images/I/71U03CcRZzL.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "AMD",
    "product_type": "VGA",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 710001,
        "content": "Great product: AMD Radeon RX 7600 VGA",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 720,
    "name": "AMD Radeon RX 7900 XT VGA",
    "price": 24900000,
    "image": "https://assets.umart.com.au/newsite/images/202301/source_img/Gigabyte-Radeon-RX-7900-XT-Gaming-OC-20G-Graphics-Card-7.webp",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "AMD",
    "product_type": "VGA",
    "discountype": "priceDiscount",
    "discount_value": 10,
    "liked": false,
    "comments": [
      {
        "id": 720001,
        "content": "Great product: AMD Radeon RX 7900 XT VGA",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 730,
    "name": "Corsair Vengeance 16GB DDR4 RAM",
    "price": 1200000,
    "image": "https://assets.msy.com.au/newsite/images/201807/source_img/44376_P_1532930433142.webp",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Corsair",
    "product_type": "RAM",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 730001,
        "content": "Great product: Corsair Vengeance 16GB DDR4 RAM",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 740,
    "name": "Kingston Fury 16GB DDR5 RAM",
    "price": 1800000,
    "image": "https://prod.scorptec.com.au/16/1175/111072/327745_large.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Kingston",
    "product_type": "RAM",
    "discountype": "priceDiscount",
    "discount_value": 15,
    "liked": false,
    "comments": [
      {
        "id": 740001,
        "content": "Great product: Kingston Fury 16GB DDR5 RAM",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 750,
    "name": "G.Skill Trident Z 32GB DDR5 RAM",
    "price": 3600000,
    "image": "https://assets.umart.com.au/newsite/images/202309/source_img/G-Skill-32Gb-2x16GB-F5-6000J3636F16GX2-TZ5RK-Trident-Z5-6000MHz-DDR5-RAM-2.webp",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "G.Skill",
    "product_type": "RAM",
    "discountype": "priceDiscount",
    "discount_value": 25,
    "liked": false,
    "comments": [
      {
        "id": 750001,
        "content": "Great product: G.Skill Trident Z 32GB DDR5 RAM",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 760,
    "name": "TeamGroup T-Force 16GB DDR4 RAM",
    "price": 1150000,
    "image": "https://cdn2.centrecom.com.au/images/upload/0066842_0.jpeg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "TeamGroup",
    "product_type": "RAM",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "liked": false,
    "comments": [
      {
        "id": 760001,
        "content": "Great product: TeamGroup T-Force 16GB DDR4 RAM",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 770,
    "name": "Crucial Pro 32GB DDR5 RAM",
    "price": 2900000,
    "image": "https://m.media-amazon.com/images/I/510wEDzO3BL._AC_UF894,1000_QL80_.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Crucial",
    "product_type": "RAM",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 770001,
        "content": "Great product: Crucial Pro 32GB DDR5 RAM",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 780,
    "name": "ADATA XPG 64GB DDR5 RAM",
    "price": 5900000,
    "image": "https://cdn.mwave.com.au/images/400/adata_xpg_lancer_rgb_64gb_2_x_32gb_ddr5_6000mhz_memory_black_ac61075_38153.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "ADATA",
    "product_type": "RAM",
    "discountype": "priceDiscount",
    "discount_value": 20,
    "liked": false,
    "comments": [
      {
        "id": 780001,
        "content": "Great product: ADATA XPG 64GB DDR5 RAM",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 790,
    "name": "Samsung 990 Pro 1TB SSD",
    "price": 3200000,
    "image": "https://plecom.imgix.net/iil-316225-655566.jpg?fit=fillmax&fill=solid&fill-color=ffffff&auto=format&w=1000&h=1000",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Samsung",
    "product_type": "SSD",
    "discountype": "priceDiscount",
    "discount_value": 15,
    "liked": false,
    "comments": [
      {
        "id": 790001,
        "content": "Great product: Samsung 990 Pro 1TB SSD",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 800,
    "name": "Kingston NV2 500GB SSD",
    "price": 1100000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKfurerxAwPlH-z_9mgvUnbmI0v8kxTKZZUFoWRBn0ZAKOQ5J8rIgdMZu&s=10",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Kingston",
    "product_type": "SSD",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 800001,
        "content": "Great product: Kingston NV2 500GB SSD",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 810,
    "name": "Crucial P3 Plus 2TB SSD",
    "price": 3900000,
    "image": "https://m.media-amazon.com/images/I/51xZaoS+Q1L.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "Crucial",
    "product_type": "SSD",
    "discountype": "priceDiscount",
    "discount_value": 30,
    "liked": false,
    "comments": [
      {
        "id": 810001,
        "content": "Great product: Crucial P3 Plus 2TB SSD",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 820,
    "name": "WD Black SN850X 1TB SSD",
    "price": 3500000,
    "image": "https://cdn1.centrecom.com.au/images/upload/0144357_0.jpeg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Western Digital",
    "product_type": "SSD",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "liked": false,
    "comments": [
      {
        "id": 820001,
        "content": "Great product: WD Black SN850X 1TB SSD",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 830,
    "name": "Seagate Barracuda 1TB HDD",
    "price": 1100000,
    "image": "https://m.media-amazon.com/images/I/71BPRVA9DwL._AC_UF350,350_QL80_.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Seagate",
    "product_type": "HDD",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 830001,
        "content": "Great product: Seagate Barracuda 1TB HDD",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 840,
    "name": "Seagate Barracuda 2TB HDD",
    "price": 1600000,
    "image": "https://m.media-amazon.com/images/I/91-ZZ7WGjNL.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "Seagate",
    "product_type": "HDD",
    "discountype": "priceDiscount",
    "discount_value": 15,
    "liked": false,
    "comments": [
      {
        "id": 840001,
        "content": "Great product: Seagate Barracuda 2TB HDD",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 850,
    "name": "Western Digital Blue 4TB HDD",
    "price": 2900000,
    "image": "https://i.ebayimg.com/images/g/RyMAAOSwVJFdsncD/s-l1200.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Western Digital",
    "product_type": "HDD",
    "discountype": "priceDiscount",
    "discount_value": 20,
    "liked": false,
    "comments": [
      {
        "id": 850001,
        "content": "Great product: Western Digital Blue 4TB HDD",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 860,
    "name": "Toshiba X300 6TB HDD",
    "price": 4200000,
    "image": "https://m.media-amazon.com/images/I/71Mh0J8FoeL.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Toshiba",
    "product_type": "HDD",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "liked": false,
    "comments": [
      {
        "id": 860001,
        "content": "Great product: Toshiba X300 6TB HDD",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 870,
    "name": "ASUS Prime B760M Mainboard",
    "price": 3900000,
    "image": "https://m.media-amazon.com/images/I/81VNRxCFeDL.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "ASUS",
    "product_type": "MainBoard",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 870001,
        "content": "Great product: ASUS Prime B760M Mainboard",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 880,
    "name": "MSI MAG B650 Tomahawk Mainboard",
    "price": 5900000,
    "image": "https://storage-asset.msi.com/global/picture/image/feature/mb/B650/MAG-B650-TOMAHAWK-WIFI/mag-b650-tomahawk-wifi.png",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "MSI",
    "product_type": "MainBoard",
    "discountype": "priceDiscount",
    "discount_value": 15,
    "liked": false,
    "comments": [
      {
        "id": 880001,
        "content": "Great product: MSI MAG B650 Tomahawk Mainboard",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 890,
    "name": "Gigabyte Z790 Aorus Elite Mainboard",
    "price": 7200000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2Dnu4o1jc1MxN0eDQxrT4rKlXM6399GSfOZBBeQrgQ&s=10",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Gigabyte",
    "product_type": "MainBoard",
    "discountype": "priceDiscount",
    "discount_value": 25,
    "liked": false,
    "comments": [
      {
        "id": 890001,
        "content": "Great product: Gigabyte Z790 Aorus Elite Mainboard",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 900,
    "name": "ASRock B550M Steel Legend Mainboard",
    "price": 3100000,
    "image": "https://m.media-amazon.com/images/I/71ntswW1lmL._AC_UF894,1000_QL80_.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "ASRock",
    "product_type": "MainBoard",
    "discountype": "buyOneGetOne",
    "discount_value": 50,
    "liked": false,
    "comments": [
      {
        "id": 900001,
        "content": "Great product: ASRock B550M Steel Legend Mainboard",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 910,
    "name": "ASUS ROG Strix X670E Mainboard",
    "price": 9800000,
    "image": "https://dlcdnwebimgs.asus.com/files/media/B51D103D-2941-412E-8479-AF994957093B/v1/img/kv/ROG-Strix-X670E-E-Gaming.png",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "ASUS",
    "product_type": "MainBoard",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 910001,
        "content": "Great product: ASUS ROG Strix X670E Mainboard",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 920,
    "name": "MSI Pro H610M Mainboard",
    "price": 2100000,
    "image": "https://cdn.mwave.com.au/images/400/msi_pro_h610ms_wifi_ddr4_intel_lga_1700_microatx_motherboard_ac87522_55119.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "MSI",
    "product_type": "MainBoard",
    "discountype": "priceDiscount",
    "discount_value": 10,
    "liked": false,
    "comments": [
      {
        "id": 920001,
        "content": "Great product: MSI Pro H610M Mainboard",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 930,
    "name": "Razer DeathAdder V3 Gaming Mouse",
    "price": 1900000,
    "image": "https://cdn.mwave.com.au/images/400/razer_deathadder_v3_ergonomic_optical_gaming_mouse_ac60740_16097.jpg",
    "createdAt": "2026-05-01",
    "isBestSeller": true,
    "brandName": "Razer",
    "product_type": "Gear",
    "discountype": "priceDiscount",
    "discount_value": 15,
    "liked": false,
    "comments": [
      {
        "id": 930001,
        "content": "Great product: Razer DeathAdder V3 Gaming Mouse",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  },
  {
    "id": 940,
    "name": "Keychron K8 Mechanical Keyboard",
    "price": 2300000,
    "image": "https://keychron.com.au/cdn/shop/files/Keychron-K8-Version-2-QMK-Wireless-Mechanical-Keyboard-Aluminum-Frame-Red-Switch-1.jpg?crop=center&height=1200&v=1739862185&width=1200",
    "createdAt": "2026-05-01",
    "isBestSeller": false,
    "brandName": "Keychron",
    "product_type": "Gear",
    "discountype": "none",
    "discount_value": 0,
    "liked": false,
    "comments": [
      {
        "id": 940001,
        "content": "Great product: Keychron K8 Mechanical Keyboard",
        "createdAt": "2026-05-01",
        "author": "Auto Reviewer",
        "authorAvatar": "https://via.placeholder.com/150"
      }
    ]
  }
];

export default PRODUCT_DATA;
