import {createContext} from "react";

interface HeartContextType {
    likedProductIds: number[];
    addLikedProductIds: (productId: number)=>void
    removeLikedProductIds: (productId: number)=>void
    clearCart:()=>void
}


//Creating context for likedProductIds, addLikedProductIds, removeLikedProductIds, clearCart
//Provide the context by LikedProvider
export const LikedContext = createContext<HeartContextType>({
    likedProductIds: [],
    addLikedProductIds: ()=> {},
    removeLikedProductIds: ()=>{},
    clearCart:()=>{}
})
