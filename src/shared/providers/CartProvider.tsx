import { useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { CartProductState, IProduct } from "../types/common.types";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [productIds, setProductIds] = useState<number[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProductState>({});

  /*
  {
    productId: number;
    quantity: number;
    price:
    addToCartAt: //
  }[] : list of products in the cart

  product: { id:123, name: "ComputuerI7", price: 150}

  => [
    { productId: 123, quantity: 4, price: 150x4, addToCartAt: "2026-02-05 10:00:00" },
  ]

  => O(n) time complexity
  => disadvantage: unique productId


  --------------------

  {
     [productId]: {
       quantity: number;
       price: number;
       addToCartAt: string;
     }
  } : dictionary of products in the cart

  => {
    "123": {
      quantity: 4,
      price: 150x4,
      addToCartAt: "2026-02-05 10:00:00"
    }
  }

  => O(1) time complexity

  */

  useEffect(() => {
    //Get the data in JSON form by the ID using getItems
    const saveCart: string | null = localStorage.getItem("cartProductIds");
    //2 important cases, if the data is found or if it is not found
    if (saveCart) {
      try {
        //transform the data into list of object
        const values = JSON.parse(saveCart) as number[];

        //set data
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProductIds(values);
      } catch (error) {
        console.error("Error parsing saved liked product ids: ", error);
      }
    }
  }, []);

  //When the productIds change, the local storage update the value
  useEffect(() => {
    localStorage.setItem("cartProductIds", JSON.stringify(productIds));
  }, [productIds]);
  //Dependency is productIds

  const addProductId = (productId: number) => {
    // setProductIds((prev) => [...prev, productId]);
    const newProductIds = [...productIds, productId];
    setProductIds(newProductIds);
  };

  const removeProductId = (productId: number) => {
    setProductIds((prev: number[]) =>
      prev.filter((id: number) => id !== productId),
    );
  };

  const addProductToCart = (product: IProduct, quantity: number = 1) => {
    const productKey = product.id.toString();
    console.log("xxxx productKey", productKey, product);

    const newCartProducts: CartProductState = { ...cartProducts };

    // product already in cart
    if (cartProducts[productKey]) {
      newCartProducts[productKey].quantity += quantity;
      newCartProducts[productKey].totalPrice =
        product.price * newCartProducts[productKey].quantity;
    } else {
      // new product in cart
      newCartProducts[productKey] = {
        productId: product.id,
        quantity: quantity,
        price: product.price,
        totalPrice: product.price * quantity,
        addedAt: new Date().toISOString(),
      };
    }

    console.log("xxxx addProductToCart", newCartProducts);

    setCartProducts({ ...newCartProducts });
  };

  const removeProductFromCart = (productId: number) => {
    const productKey = productId.toString();
    const newCartProducts: CartProductState = { ...cartProducts };
    delete newCartProducts[productKey]; // delete the product from the cart
    setCartProducts({ ...newCartProducts });
  };

  const removeProductByeOneFromCart = (productId: number) => {
    const productKey = productId.toString();

    // logic:
    // 1. check if product in cart
    // 2. Yes => decrease quantity by 1 + update total price
    // 3. No => remove product from cart

    const newCartProducts: CartProductState = { ...cartProducts };

    if (cartProducts[productKey]) {
      newCartProducts[productKey].quantity -= 1;
      newCartProducts[productKey].totalPrice =
        newCartProducts[productKey].totalPrice -
        newCartProducts[productKey].price;

      setCartProducts({ ...newCartProducts });
    }
  };

  const clearCart = () => {
    setProductIds([]);
  };

  const getTotalQuantityInCart = () => {
    let totalQuantity = 0;
    const products = Object.values(cartProducts);
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      totalQuantity += product.quantity;
    }
    return totalQuantity;
  };

  const getTotalPriceInCart = () => {
    let totalPrice = 0;
    const products = Object.values(cartProducts);
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      totalPrice += product.totalPrice;
    }
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        productIds,
        addProductId,
        removeProductId,
        clearCart,

        cartProducts,
        addProductToCart,
        removeProductFromCart,
        removeProductByeOneFromCart,

        getTotalQuantityInCart,
        getTotalPriceInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
