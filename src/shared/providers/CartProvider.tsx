import React,{ useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { CartProductState, IProduct } from "../types/common.types";
import {notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import PRODUCT_DATA from "@/data_folder/data";


type NotificationPlacement = NotificationArgsProps['placement'];
const Context = React.createContext({ name: 'Default' });

function getProductPrice(product: IProduct): number {
  if (product.discountype === "priceDiscount") {
    return Math.round(
      product.price - product.price * (product.discount_value / 100),
    );
  }

  return product.price;
}


export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartProducts, setCartProducts] = useState<CartProductState>({});

  const [api, contextHolder] = notification.useNotification();

  const addNotification = (placement: NotificationPlacement) => {
    api.info({
      title: `Product Added`,
      description: <Context.Consumer>{() => `Check your cart!`}</Context.Consumer>,
      placement,
    });
  };

  const removeNotification = (placement: NotificationPlacement) => {
    api.info({
      title: `Product Removed`,
      description: <Context.Consumer>{() => `Product succesfully removed!`}</Context.Consumer>,
      placement,
    });
  };


  /*

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


  // Load the file from the local storage
  useEffect(() => {
    //Get the data in JSON form by the ID using getItems
    const saveCart: string | null = localStorage.getItem("cartProductIds");
    //2 important cases, if the data is found or if it is not found
    if (saveCart) {
      try {
        //transform the data into list of object
        const savedValues = JSON.parse(saveCart) as CartProductState;
        const values: CartProductState = {};

        Object.keys(savedValues).forEach((productKey) => {
          const savedProduct = savedValues[productKey];
          const currentProduct = PRODUCT_DATA.find(
            (product) => product.id === savedProduct.productId,
          );

          const unitPrice = currentProduct
            ? getProductPrice(currentProduct)
            : savedProduct.price;

          values[productKey] = {
            ...savedProduct,
            price: unitPrice,
            totalPrice: unitPrice * savedProduct.quantity,
            discountype:
              currentProduct?.discountype || savedProduct.discountype || "none",
            discount_value:
              currentProduct?.discount_value || savedProduct.discount_value || 0,
          };
        });

        //set data
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCartProducts(values);
      } catch (error) {
        console.error("Error parsing saved liked product ids: ", error);
      }
    }
  }, []);

  //When the productIds change, the local storage update the value
  useEffect(() => {
    localStorage.setItem("cartProductIds", JSON.stringify(cartProducts));
  }, [cartProducts]);
  //Dependency is productIds


  const addProductToCart = (product: IProduct, quantity: number = 1) => {
    addNotification('bottomRight')

    const productKey = product.id.toString();
    const unitPrice = getProductPrice(product);
    console.log("xxxx productKey", productKey, product);

    const newCartProducts: CartProductState = { ...cartProducts };

    // product already in cart
    if (cartProducts[productKey]) {
      newCartProducts[productKey].quantity += quantity;
      newCartProducts[productKey].price = unitPrice;
      newCartProducts[productKey].discountype = product.discountype;
      newCartProducts[productKey].discount_value = product.discount_value;
      newCartProducts[productKey].totalPrice =
        unitPrice * newCartProducts[productKey].quantity;
    } else {
      // new product in cart
      newCartProducts[productKey] = {
        productId: product.id,
        quantity: quantity,
        price: unitPrice,
        totalPrice: unitPrice * quantity,
        discountype: product.discountype,
        discount_value: product.discount_value,
        addedAt: new Date().toISOString(),
      };
    }

    console.log("xxxx addProductToCart", newCartProducts);

    setCartProducts({ ...newCartProducts });
  };

  const removeProductFromCart = (productId: number) => {
    removeNotification('bottomRight') 
    const productKey = productId.toString();
    const newCartProducts: CartProductState = { ...cartProducts };
    delete newCartProducts[productKey]; // delete the product from the cart
    setCartProducts({ ...newCartProducts });
  };

  const removeProductByOneFromCart = (productId: number) => {
    const productKey = productId.toString();

    // logic:
    // 1. check if product in cart
    // 2. Yes => decrease quantity by 1 + update total price
    // 3. No => remove product from cart

    const newCartProducts: CartProductState = { ...cartProducts };

    if (cartProducts[productKey]) {
      if (newCartProducts[productKey].quantity <= 1) {
        delete newCartProducts[productKey];
      } else {
        newCartProducts[productKey].quantity -= 1;
        newCartProducts[productKey].totalPrice =
          newCartProducts[productKey].price *
          newCartProducts[productKey].quantity;
      }

      setCartProducts({ ...newCartProducts });
    }
  };

  const clearCart = () => {
    setCartProducts({});
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
        clearCart,
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        removeProductByOneFromCart,

        getTotalQuantityInCart,
        getTotalPriceInCart,
      }}
    >
      {contextHolder}
      {children}
    </CartContext.Provider>
  );
}
