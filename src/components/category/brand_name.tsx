import { IProduct,Brand } from "@/shared/types/common.types";
import { Flex, Button } from "antd";
import {useState} from "react";
import {useProduct} from "@/shared/hooks/useProducts"


export default function BrandName({sortByBrand,selectedBrandName}:{sortByBrand(brand:string):void,selectedBrandName:string|null}){
    type brandName = {
        index: string,
        name: string
    }

    const {products} = useProduct()
    const productBrands:brandName[] = [
        {
            index: "0",
            name: "All"
        }
    ]

    const uniqueBrands = new Set(products.map(p => p.brandName))

    uniqueBrands.forEach((name,index)=> {
        productBrands.push({
            index,
            name
        })
    })

    console.log("Brands"+productBrands)




    return(
        <>
        <p style={{ color: "black", fontSize: "15px", fontWeight: "bold"}}>Brand Name:</p>
            <Flex style={{ flexWrap: "wrap", gap: "8px" }}>
                {productBrands.map((brand:brandName,index: number)=>(
                    <Button key={index} onClick={()=> sortByBrand(brand.name)} style={{
                        backgroundColor: selectedBrandName === brand.name ? "royalblue" : "white",
                        color: selectedBrandName === brand.name ? "white" : "black",
                    }} >{brand.name}</Button>
                ))}


            </Flex>
        </>
    )

}

