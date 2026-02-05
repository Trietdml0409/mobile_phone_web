import React from "react";
import { Flex, Radio,Grid } from "antd";
import { Card, Carousel} from "antd";



const { useBreakpoint } = Grid
  


type Banner = {
  id: number,
  img: string,
  information: string,
}

//Banner data put here
const banners:Banner[]  = [
  {
    id: 1,
    img: "https://file.hstatic.net/200000837185/collection/pc-gaming_14bcf1861d7f42239a18fb7b05fb7218_master.jpg",
    information: "New PC Gaming arrived"
  },
  {
    id: 2,
    img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2022_5_23_637888928980636971_cac-hang-pc-gaming-noi-tieng-1.png",
    information: "Old PC Sell of 50%"
  },
  {
    id: 3,
    img: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2022_1_21_637783762740907156_untitled-1.png",
    information: "Install PC with no installation fee"
  }
]

//Modifying the banner/carousel
const bannerStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",      // fit banner
  objectPosition: "center" // luôn ở giữa
};




export default function Banner(){
  const screens = useBreakpoint()
  const isSmallScreen = screens.xs || (screens.sm && !screens.md);

  return(
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Carousel arrows autoplay infinite={true} >
        {banners.map((banner)=>{
          return(
            <div key={banner.id}>
              <div
                style={{
                position: "relative",
                height: isSmallScreen ? "200px":"450px",
              }}>
                <img  src={banner.img} style= {bannerStyle}/>
                <p
                    style={{
                    position: "absolute",
                    bottom: "24px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "white",
                    fontSize: isSmallScreen ? "20px":"40px",
                    fontWeight: 700,
                    margin: 0,
                    textAlign: "center",
                    textShadow: "0 2px 8px rgba(0,0,0,0.6)", // readability
                  }}
                  >{banner.information}
                </p>
              </div>

            </div>
          )
        })}

      </Carousel>
      <br/>
    </div>

  )
}
