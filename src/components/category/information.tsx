import { Button, Flex } from "antd";
import {StarOutlined} from '@ant-design/icons';
import InputNumberBox from "./inputNumberBox";


export default function Information(){
    return(
        <Flex gap = "10px" vertical style = {{flex:3}}>
          <h1 style = {{color: "black", fontSize: "30px", fontWeight: "bold" }}>PC RTX 3050 </h1>
          <p style = {{color: "black", }}>Product Code: XYHANSOGPPJJBBHKKKNKAS</p>
          <Flex gap = "10px">
            <div>
                <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
                <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
                <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
                <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
                <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
            </div>
            <p style = {{color: "black", }}>0 comment</p>
          </Flex>
          <p style = {{alignSelf: "flex-start",display: "inline-block",padding: "10px",borderTop: "2px solid grey",borderBottom: "2px solid grey",color: "red", fontSize: "30px", fontWeight: "bold" }}>
            11.000.000 VND
          </p>
          <p style = {{alignSelf: "flex-start",display: "inline-block",padding: "10px",borderTop: "2px solid grey",borderBottom: "2px solid grey",color: "blue", fontSize: "10px"}}>
            Check availability
          </p>

        <div style={{
            position: "relative",
            border: "2px dotted red",
            padding: "20px 10px",
            
            }}>
            <span style={{
                position: "absolute",
                top: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                padding: "0 10px",
                fontWeight: "bold",
                color: "red"
            }}>
                🎁 Khuyến mãi - ưu đãi
            </span>
            <p style = {{color: "black", fontSize:"10px"}}>1: ALL COUPON <a>HERE</a></p>
            <p style = {{color: "black", fontSize:"10px"}}>2: SSD, HDD, MEMORY CARD <a>HERE</a></p>
            <p style = {{color: "black", fontSize:"10px"}}>3: MOUSE, GAMING TABLE, HEADPHONE <a>HERE</a></p>
            <p style = {{color: "black", fontSize:"10px"}}>4: FREE DELIVERY <a>HERE</a></p>
        </div>
        <p style = {{color: "black", fontSize:"10px",fontWeight:"bold"}}>Call for order: 1900 0243 (8:30 - 21:00)</p>
        <hr style = {{border: "1px solid grey"}}/>
        <Button >BUY NOW</Button>
        <Button >PAY BY INSTALLMENT</Button>
        <InputNumberBox />
        </Flex>
        

        
    )
}