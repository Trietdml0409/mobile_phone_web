import {Flex} from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { useState,useEffect} from "react";





export default function ProductInformation(){
    const [isDisplayInfo, setIsDisplayInfo] = useState<boolean>(false)

    return(
        <div style={{border: "2px solid rgba(128, 128, 128, 0.3)"}}>
            <Flex justify="space-between" align="center" style={{padding:"10px"}}>
                <div >
                    <p style={{fontSize:"20px",color:"royalblue"}} onClick={()=> setIsDisplayInfo(!isDisplayInfo)}> <ShoppingCartOutlined style={{ marginRight: "8px" }} />Here is the information</p>

                </div>
                <p style={{ fontSize:"20px",color:"black",fontWeight: "bold"}}>Price</p>
            </Flex>
            {isDisplayInfo ? (
                <div style={{padding:"10px"}}>
                    <p style={{background:"white"}}>Product details: This is a sample product with useful information.</p>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    )
}