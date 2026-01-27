import {useState} from  "react";
import {LikedContext} from "../context/likedContext"

export function LikedProvider({children}: {children: React.ReactNode})
//Passing parameter (object destructuring + type annotation)
{ 
	// Local state to store product IDs in the cart
	const[likedProductIds, setLikedProductIds] = useState<number[]>([]);

	// Function to add a product ID to the cart
	const addLikedProductIds = (productId:number)=>{
		//Noticing you are accesing addProductId
		console.log("addLikedProductId", productId);
		// setProductIds((prev) => [...prev,productId]);
		const newProductIds = [...likedProductIds,productId];
		setLikedProductIds(newProductIds)
	};
	
	//Passing productId as Prop
	const removeLikedProductIds = (productId: number) => {
		console.log("removeLikedProductId", productId);
		//setting product Ids with a prev that has been filtered
		setLikedProductIds((prev: number[]) =>
			prev.filter((id:number)=>id !== productId)
		);
	};
	
	//Clear the cart
	const clearAll = () => {
		//Accessing clearCart
		console.log("clearLikedProductIds");
		//Erasing all the array
		setLikedProductIds([]);
	};
	
	
	return (
		//Create a scope in the component tree, where any other child components can access it
		//“These are the values that any component using useContext(CartContext) will be able to access.”
		<LikedContext.Provider
						value={{likedProductIds, addLikedProductIds, removeLikedProductIds, clearAll}}
			>
			{children}
		</LikedContext.Provider>
		//The provider return the JSX, rendering children, sharing context to child component
	);

}

