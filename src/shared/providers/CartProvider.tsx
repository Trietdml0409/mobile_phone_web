import { useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [productIds, setProductIds] = useState<number[]>([])

  useEffect(()=>{
		//Get the data in JSON form by the ID using getItems
    const saveCart:string|null = localStorage.getItem("cartProductIds")
    //2 important cases, if the data is found or if it is not found
    if(saveCart){
      try{
	      //transform the data into list of object
        const values = JSON.parse(saveCart) as number[];

        //set data
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProductIds(values);
      }catch(error){
         console.error("Error parsing saved liked product ids: ", error);
      }
    }
  },[])

  //When the productIds change, the local storage update the value
  useEffect(()=>{
    localStorage.setItem("cartProductIds",JSON.stringify(productIds))},[productIds])
  //Dependency is productIds

  const addProductId = (productId: number) => {
    // setProductIds((prev) => [...prev, productId]);
    const newProductIds = [...productIds, productId];
    setProductIds(newProductIds);
  };


  const removeProductId = (productId: number) => {
    setProductIds((prev: number[]) =>
      prev.filter((id: number) => id !== productId)
    );

  };


  const clearCart = () => {
    setProductIds([]);
  };
  return (
    <CartContext.Provider
      value={{ productIds, addProductId, removeProductId, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}



