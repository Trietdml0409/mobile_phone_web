import {Col, Row, Segmented} from "antd";
import Decreased51Percent from "./decreased51Percent";
import Buy1Get1 from "./buy1Get1";
import {useState} from "react"


type discountsType = {
  id: number;
  img: string;
  component: React.ReactNode;
};

const discountsTypes:discountsType[] =[
    {
        id: 1,
        img: "https://cdn.hstatic.net/files/200000420363/file/artboard_4_6449a6c05b9b4e8b968ce7073aa3f839.png",
        component: <Decreased51Percent/>
    },
    {
        id: 2,
        img: "https://cdn.hstatic.net/files/200000420363/file/nut-banner-cho-nh_m-hot-promotion-7_a201b1d4b9d949f2a9d224d38b0bbb70.png",
        component: <Buy1Get1 />
    }
] 



export default function SegmentDiscount(){
    const [value, setValue] = useState<number>(discountsTypes[0].id);
    const selected = discountsTypes.find(d => d.id === value);
    return(
    <>
      <Row gutter={[16,10]}>
        <Col span={24}>
          <Segmented<number>
              value={value}
              onChange ={setValue}
              options={
              discountsTypes.map((d) => ({
                value: d.id,
                label: (
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={d.img}
                      style={{ width: "50%", display: "block", margin: "0 auto" }}
                    />
                  </div>
                ),
              }))

              }
          />
        </Col>
            
        <Col span={24}>
          <div>
            {selected?.component}
          </div>
        </Col>

      </Row>


    </>
    )
}