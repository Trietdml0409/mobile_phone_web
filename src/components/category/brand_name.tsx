import { IProduct,Brand } from "@/shared/types/common.types";
import { Flex, Button } from "antd";


export default function BrandName({sortByBrand}:{sortByBrand(brand:string):void}){
    const brandNameButton: Brand[] = [
        {
            index: 1,
            name: "All"
        },
        {
            index: 1,
            name: "AMD"
        },
        {
            index: 2,
            name:"NVIDIA"
        }
    ]

    return(
        <>
        <p style={{ color: "black", fontSize: "15px", fontWeight: "bold"}}>Brand Name:</p>
            <Flex>
                {brandNameButton.map((brand:Brand,index: number)=>(
                    <Button key={index} onClick={()=> sortByBrand(brand.name)} >{brand.name}</Button>
                ))}


            </Flex>
        </>
    )

}

