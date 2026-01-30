"use client";
import {Button, Flex} from "antd"
import { Input } from 'antd';


export default function DiscountCode(){
    return(
        <>
            <div style={{
                borderLeft: "2px solid rgba(128, 128, 128, 0.3)",
                borderRight: "2px solid rgba(128, 128, 128, 0.3)",
                borderBottom: "2px solid rgba(128, 128, 128, 0.3)"
            }}>
                <Flex justify="space-between" align="center" style={{padding:"10px",gap:"40px"}} >
                    <Input placeholder="Enter discount code here" style={{ flex: 1 }}/>
                    <Button type="primary" style={{ background:"white",color:"royalblue",fontSize: "18px", fontWeight: "bold", padding: "8px 20px" }}>Use</Button>

                </Flex>
                
            </div>

        </>
    )
}