import {useState,useEffect} from  "react";
import {LikedContext} from "../context/likedContext"

export function LikedProvider({children}: {children: React.ReactNode})
//Passing parameter (object destructuring + type annotation)
{ 
	const[likedProductIds, setLikedProductIds] = useState<number[]>([]);
	useEffect(()=>{
		//Get the data in JSON form by the ID using getItems
	const saveLiked:string|null = localStorage.getItem("LikedProductIds")
	//2 important cases, if the data is found or if it is not found
	if(saveLiked){
		try{
			//transform the data into list of object
		const values = JSON.parse(saveLiked) as number[];

		//set data
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setLikedProductIds(values);
		}catch(error){
			console.error("Error parsing saved liked product ids: ", error);
		}
	}
	},[])
	// Local state to store product IDs in the cart
	

	// Function to add a product ID to the cart
	const addLikedProductIds = (productId:number)=>{
		//Noticing you are accesing addProductId

		// setProductIds((prev) => [...prev,productId]);
		const newProductIds = [...likedProductIds,productId];
		setLikedProductIds(newProductIds)
	};
	
	useEffect(()=>{
    	localStorage.setItem("LikedProductIds",JSON.stringify(likedProductIds))},[likedProductIds])
	
	//Passing productId as Prop
	const removeLikedProductIds = (productId: number) => {
		//setting product Ids with a prev that has been filtered
		setLikedProductIds((prev: number[]) =>
			prev.filter((id:number)=>id !== productId)
		);
	};
	
	//Clear the cart
	const clearAll = () => {
		//Accessing clearCart
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

