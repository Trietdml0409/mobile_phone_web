import { IProduct } from "@/shared/types/common.types";
import { Flex, Button } from "antd";


export default function BrandName({sortByBrand,selectedBrandName,products}:{sortByBrand(brand:string):void,selectedBrandName:string|null,products:IProduct[]}){
    type brandName = {
        index: string,
        name: string
    }

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
    return(
        <>
        <p style={{ color: "black", fontSize: "15px", fontWeight: "bold"}}>Brand Name:</p>
            <Flex style={{ flexWrap: "wrap", gap: "8px" }}>
                {productBrands.map((brand:brandName,index: number)=>(
                    <Button key={index} onClick={()=> sortByBrand(brand.name)} style={{
                        backgroundColor: selectedBrandName === brand.name ? "#e21d2b" : "white",
                        color: selectedBrandName === brand.name ? "white" : "black",
                    }} >{brand.name}</Button>
                ))}


            </Flex>
        </>
    )

}

