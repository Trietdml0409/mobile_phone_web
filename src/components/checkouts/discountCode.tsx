"use client";
import {Button, Flex} from "antd"
import { Input } from 'antd';


export default function DiscountCode(){
    return(
        <>
            <Input
            placeholder="Enter discount code"
            style={{ width: "100%", height: "100%" }}
            />
            <Button type="primary" style={{ flex: 1 }}>
                Apply
            </Button>
        </>
    )
}