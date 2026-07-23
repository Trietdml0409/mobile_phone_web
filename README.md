# Important Note About Mobile Phone App

The following content was transcribed from the project notes PDF.

## Page 1

```text
All product_data and blogpost_data are loaded into the products array, and blogs
array in the initial mount -The first render). Mostly, when we use these arrays on
the other components, these data are filtered and sort into a local array -However,
the loaded data are just reference to the products, not the products itself). 
1: The product category page
The localProducts will be filtered with the specific product type -Gaming PC,
Office PC…) based on the parameter that it is passed. 
<nav style={{ display: "flex", gap: "24px", fontSize: "14px" 
}}>
  {[
    { label: "PC Gaming", value: "PC_Gaming" },
    { label: "Laptop", value: "laptop" },
    { label: "CPU", value: "cpu" },
    { label: "VGA", value: "VGA" },
    { label: "RAM", value: "RAM" },
    { label: "Mainboard", value: "MainBoard" },
  ].map((item) => (
    <span
      key={item.value}
      onClick={() =>
        router.push(`/category?product_type=${item.value}`)
      }
      style={{ cursor: "pointer", color: "#4b5263", fontWeigh
t: 600 }}
    >
      {item.label}
    </span>
```

## Page 2

```text
))}
</nav>
  const { products } = useProduct(); // initialize products = 
0. 1 call api not response => products = 0.
  const searchParams = useSearchParams();
  const productTypeParameter = searchParams.get("product_typ
e");
  const selectedProductType: CategoryType | undefined = [
    ...PRODUCT_TYPES,
    "Components" as const,
  ].find(
    (productType) => productType === productTypeParameter,
  );
  const [localProducts, setLocalProducts] = useState<IProduct
[]>([]);
  ...
  
   useEffect(() => {
    const filteredProducts =
      selectedProductType === "Components"
        ? products.filter((product) =>
            ["cpu", "VGA", "RAM", "SSD", "HDD", "MainBoard"].
includes(
              product.product_type,
            ),
          )
        : selectedProductType
          ? products.filter(
              (product) => product.product_type === selectedP
roductType,
            )
          : [];
    setLocalProducts(filteredProducts);
```

## Page 3

```text
setTotalProducts(filteredProducts.length);
    setCurrentPage(1); // reset pagination when products chan
ge
    setSelectedBrandName(null);
    setSelectedSortBy(null);
  }, [products, selectedProductType]); // A depends on B => B 
changes => A changes.
First, the product are filtered into the localProducts, then, the pagination will divide
the localProducts into each pagination -In this moment, we have 6 pagination). 
  // pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 18; // number of items per page
  // compute slice to show on current page
  const paginatedProducts = localProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );
The local product will be filtered out. The sorted does not reduce
Here is how the brand filter button works, the code below will print out all the
brand button. First, it extracts the brand name from each products, then, it use the
Set (a built-in collection of unique values) to eliminate any duplication. After
displaying all brand name button, the button will call the sortByBrand -Filter By
Brand) function.
export default function BrandName({sortByBrand,selectedBrandN
ame,products}:{sortByBrand(brand:string):void,selectedBrandNa
me:string|null,products:IProduct[]}){
    type brandName = {
        index: string,
        name: string
    }
```

## Page 4

```text
const productBrands:brandName[] = [
        {
            index: "0",
            name: "All"
        }
    ]
    
    const uniqueBrands = new Set(products.map(p => p.brandNam
e))
    uniqueBrands.forEach((name,index)=> {
        productBrands.push({
            index,
            name
        })
    })
    return(
        <>
        <p style={{ color: "black", fontSize: "15px", fontWei
ght: "bold"}}>Brand Name:</p>
            <Flex style={{ flexWrap: "wrap", gap: "8px" }}>
                {productBrands.map((brand:brandName,index: nu
mber)=>(
                    <Button key={index} onClick={()=> sortByB
rand(brand.name)} style={{
                        backgroundColor: selectedBrandName ==
= brand.name ? "#e21d2b" : "white",
                        color: selectedBrandName === brand.na
me ? "white" : "black",
                    }} >{brand.name}</Button>
                ))}
            </Flex>
        </>
    )
```

## Page 5

```text
There are the concern that if we sort first, then there will be error when we filter,
because both sort and filter happen on the same array. So, the brandname must
be filter first before the sort. When we filter, the new product arrays is created,
then saved into local product. Then, the new local product arrays will then be pass
to sorted function, where it will be sort, and save again into local product.
function filterByBrand(brand: string): void {
    setSelectedBrandName(brand);
    let newProducts: IProduct[];
    const allProducts: IProduct[] = [...products];
    if (brand == "All") {
      newProducts = allProducts;
    } else {
      newProducts = [...allProducts].filter(
        (product: IProduct) => brand === product.brandName,
      );
    }
    ...
    setLocalProducts(newProducts);
    setTotalProducts(newProducts.length);
    setCurrentPage(1); // reset to first page when filter cha
nges
    }
const handleSortBy = (newValue: string, overrideProducts?: IP
roduct[]) => {
    let newProducts: IProduct[] = overrideProducts
      ? overrideProducts
      : [...localProducts];//This code should only be local p
roducts, does not need override
      ...
    setLocalProducts(newProducts);
    setTotalProducts(newProducts.length);
    setCurrentPage(1); // reset to first page when sort chang
```

## Page 6

```text
es
    }
2: The segment Discount on Main Page
The new type: Discount is created and the discountTypes array contains the type
of discount data.
type discountsType = {
  id: number;
  img: string;
  component: React.ReactNode;
};
const discountsTypes:discountsType[] = [...]
, When the discount is clicked, its value will be passed to each “Discount function”
-Decrease51Percent, Buy1get1…) and print out the row of products. The “selected”
variable record any value change, then trigger the right discount components.
This practice prevent calling out all discount components at the same time, saving
the memories.
const [value, setValue] = useState<number>(discountsTypes[0].
id);
const selected = discountsTypes.find(d => d.id === value);
return(
<Segmented<number> ... discountsTypes.map((d) => ({value: 
d.id...}))/>
<div>
  {selected?.component}
```

## Page 7

```text
</div>
)
In each discount Type function (buy1Get1, decrease51Percent…) the new array will
be created with the filtered products (using key: value of each product)
export default function Decrease25Percent() {
  const { products } = useProduct();
  const localProducts = products.filter(
    (product) =>
      product.discountype === "priceDiscount" &&
      product.discount_value === 25,
  );
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <RowsOfDiscount DiscountTypeProducts={localProducts} />
    </div>
  );
}
Pagination are put in used
const PRODUCTS_PER_PAGE = 6;
return(
...
{DiscountTypeProducts.length > PRODUCTS_PER_PAGE && (
        <Pagination
          current={currentPage}
          pageSize={PRODUCTS_PER_PAGE}
          total={DiscountTypeProducts.length}
          showSizeChanger={false}
          onChange={(page) => setCurrentPage(page)}
          style={{
            display: "flex",
            justifyContent: "center",
```

## Page 8

```text
marginTop: "20px",
          }}
        />
 ...)
3: Best Seller Section
The products will be loaded and filter into the local arrays of bestSeller, then
computerBestSeller,PCComponentBestSeller,... will filter this local array based on
key:value and stored it in its own local array.
Then the segments will filter out the previous local array and stored into its own
local array, display them, of course, still based on the key value. To sum up, there
are 3 level of local array filters: BestSellers -
computerBestSellers/PCComponentBestSellers/... -
PCGammings/PCOffices/VGAs/SSDs....
  ---------------------------------------------- LAYER 1
  const localBestSellers = products.filter(
    (product) => product.isBestSeller === true,
  );
  ---------------------------------------------- LAYER 2
  const localAccessoryProducts = bestSellerProducts.filter(
    (product) =>
      product.product_type === "Gear" ||
      product.product_type === "Accesories",
  );
  ---------------------------------------------- LAYER 3
  const localGearProducts = accessoryProducts.filter(
    (product) => product.product_type === "Gear",
  );
4: Use context
```

## Page 9

```text
The use context is put in use for storing the data and have it accessible by any
component in the tree without passing through props.
```

## Page 10

```text
Example with card component
Step 0- Define the context type in common.type
export interface CartProduct {
  productId: number;
  quantity: number;
  price: number;
  totalPrice: number;
  discountype: DiscountType;
  discount_value: number;
  addedAt: string;
}
export interface CartProductState {
  [key: string]: CartProduct;
}
Step 1- Create Context with CartContext.ts
import { createContext } from "react";
import { CartProductState, IProduct } from "../types/commo
n.types";
interface CartContextType {
  clearCart: () => void;
  cartProducts: CartProductState;
  addProductToCart: (product: IProduct, quantity?: number) 
=> void;
  removeProductFromCart: (productId: number) => void;
  removeProductByOneFromCart: (productId: number) => void;
  getTotalQuantityInCart: () => number;
  getTotalPriceInCart: () => number;
}
```

## Page 11

```text
export const CartContext = createContext<CartContextType>
({
  clearCart: () => {},
  cartProducts: {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  removeProductByOneFromCart: () => {},
  getTotalQuantityInCart: () => 0,
  getTotalPriceInCart: () => 0,
});
Step 2- Create Context provider with Context Provider
import React,{ useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { CartProductState, IProduct } from "../types/commo
n.types";
import {notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import PRODUCT_DATA from "@/data_folder/data";
type NotificationPlacement = NotificationArgsProps['placem
ent'];
const Context = React.createContext({ name: 'Default' });
function getProductPrice(product: IProduct): number {
  if (product.discountype === "priceDiscount") {
    return Math.round(
      product.price - product.price * (product.discount_va
lue / 100),
    );
  }
```

## Page 12

```text
return product.price;
}
export function CartProvider({ children }: { children: Rea
ct.ReactNode }) {
  const [cartProducts, setCartProducts] = useState<CartPro
ductState>({});
  const [api, contextHolder] = notification.useNotificatio
n();
  const addNotification = (placement: NotificationPlacemen
t) => {
    api.info({
      title: `Product Added`,
      description: <Context.Consumer>{() => `Check your ca
rt!`}</Context.Consumer>,
      placement,
    });
  };
  const removeNotification = (placement: NotificationPlace
ment) => {
    api.info({
      title: `Product Removed`,
      description: <Context.Consumer>{() => `Product succe
sfully removed!`}</Context.Consumer>,
      placement,
    });
  };
  /*
  {
```

## Page 13

```text
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
    const saveCart: string | null = localStorage.getItem
("cartProductIds");
    //2 important cases, if the data is found or if it is 
not found
    if (saveCart) {
      try {
        //transform the data into list of object
        const savedValues = JSON.parse(saveCart) as CartPr
oductState;
        const values: CartProductState = {};
        Object.keys(savedValues).forEach((productKey) => {
          const savedProduct = savedValues[productKey];
          const currentProduct = PRODUCT_DATA.find(
            (product) => product.id === savedProduct.produ
```

## Page 14

```text
ctId,
          );
          const unitPrice = currentProduct
            ? getProductPrice(currentProduct)
            : savedProduct.price;
          values[productKey] = {
            ...savedProduct,
            price: unitPrice,
            totalPrice: unitPrice * savedProduct.quantity,
            discountype:
              currentProduct?.discountype || savedProduct.
discountype || "none",
            discount_value:
              currentProduct?.discount_value || savedProdu
ct.discount_value || 0,
          };
        });
        //set data
        // eslint-disable-next-line react-hooks/set-state-
in-effect
        setCartProducts(values);
      } catch (error) {
        console.error("Error parsing saved liked product i
ds: ", error);
      }
    }
  }, []);
  //When the productIds change, the local storage update t
he value
  useEffect(() => {
    localStorage.setItem("cartProductIds", JSON.stringify
(cartProducts));
```

## Page 15

```text
}, [cartProducts]);
  //Dependency is productIds
  const addProductToCart = (product: IProduct, quantity: n
umber = 1) => {
    addNotification('bottomRight')
    const productKey = product.id.toString();
    const unitPrice = getProductPrice(product);
    console.log("xxxx productKey", productKey, product);
    const newCartProducts: CartProductState = { ...cartPro
ducts };
    // product already in cart
    if (cartProducts[productKey]) {
      newCartProducts[productKey].quantity += quantity;
      newCartProducts[productKey].price = unitPrice;
      newCartProducts[productKey].discountype = product.di
scountype;
      newCartProducts[productKey].discount_value = produc
t.discount_value;
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
```

## Page 16

```text
}
    console.log("xxxx addProductToCart", newCartProducts);
    setCartProducts({ ...newCartProducts });
  };
  const removeProductFromCart = (productId: number) => {
    removeNotification('bottomRight') 
    const productKey = productId.toString();
    const newCartProducts: CartProductState = { ...cartPro
ducts };
    delete newCartProducts[productKey]; // delete the prod
uct from the cart
    setCartProducts({ ...newCartProducts });
  };
  const removeProductByOneFromCart = (productId: number) =
> {
    const productKey = productId.toString();
    // logic:
    // 1. check if product in cart
    // 2. Yes => decrease quantity by 1 + update total pri
ce
    // 3. No => remove product from cart
    const newCartProducts: CartProductState = { ...cartPro
ducts };
    if (cartProducts[productKey]) {
      if (newCartProducts[productKey].quantity <= 1) {
        delete newCartProducts[productKey];
      } else {
        newCartProducts[productKey].quantity -= 1;
        newCartProducts[productKey].totalPrice =
```

## Page 17

```text
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
```

## Page 18

```text
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
App provider
AppProvider is a single wrapper that gives the entire application access to
shared settings and data. Keeps layout.tsx simple
Without AppProvider, you would need to place all three providers directly inside 
layout.tsx. It is mainly an organizational wrapper.
  <ConfigProvider theme = {...}>
    <CartProvider>
      <LikedProvider>{children}</LikedProvider>
    </CartProvider>
  <ConfigProvider>
  
 Cannot completely seperated 
<CartProvider>{children}</CartProvider>
<LikedProvider>{children}</LikedProvider>
That would render {children} twice.
```

## Page 19

```text
ConfigProvider: provides Ant Design configuration, such as colors and
component styles.
CartProvider: provides shopping-cart data and functions.
LikedProvider: provides favourite-product data and functions.
{children}: represents the pages and components wrapped by AppProvider.
LikedProvider can access the cart context, but CartProvider cannot access the
liked context. Your pages can access both.
Step 3- Apply context in CatergoryProductCard.tsx
import {useContext} from "react";
export default function CategoryProductCard(){
const {productIds: cartProductIds, addProductId: remov
eProductIds} = useContext(CartContext);
}
5: Search Box
Each letter typed will trigger onChange function. However, only when more than 3
letters are typed that the debounced function is called. This debounced function
delay the function execution for 2 second after user finished typing, then called
the fake seachProducts API (which return the result after 3 seconds)
It takes 2 (debounced) + 3-Result return) seconds to return a search
  const { products } = useProduct(); //Reference to the produ
cts array
  //Store and Update the state of the value that need to sear
ch
  const [searchValue, setSearchValue] = useState<string>("");
```

## Page 20

```text
// ssd => filter 5 products.
  //Store and Updata the state of the value that will be disp
lay
  const [searchResults, setSearchResults] = useState<IProduct
[]>([]);
  
  
  //Tracking user keyboard
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElem
ent>) => {
    if (event.key === "Enter") {
      // user pressed enter
      console.log("Enter key pressed");
    } else if (event.key === "Escape") {
      // user pressed ESC
      console.log("Escape key pressed");
    } else if (event.key === "ArrowUp") {
      // user pressed ArrowUp
      console.log("ArrowUp key pressed");
    } else if (event.key === "ArrowDown") {
      // user pressed ArrowDown
      console.log("ArrowDown key pressed");
    } else if (event.key === "ArrowLeft") {
      // user pressed ArrowLeft
      console.log("ArrowLeft key pressed");
    } else if (event.key === "ArrowRight") {
      // user pressed ArrowRight
      console.log("ArrowRight key pressed");
    }
  };
  
  // This function simulates an API call.
// The response is returned after a 2-second delay.
  const searchProductsAPI = async (value: string) => {
    console.log("searchProductsAPI", value);
    //await pause the async function until Promise fulfilled
```

## Page 21

```text
//The Promise represent the operation that will be finish
ed in the future
    //When the Promise is created, it start immediately, It w
on't be resolved until resolve() is called.
    //SetTimeOut schedules a function to run after 2000 milli
seconds
    await new Promise((resolve) => setTimeout(resolve, 200
0)); 
    //Fake products returned and filtered the return value
    return products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase
()),
    );
  };
  
  // Create debounced function when searchProductsAPI identit
y changes. 
  //The debounced function delays its execution
  //Repeated calls reset the timer; only the last runs.
  const debouncedSearchFn = useMemo(
    () =>
      debounce((value: string) => {
      //Call the searchProductsAPI
      //Then setSearchResults for displaying 
        searchProductsAPI(value).then((results) => {
          setSearchResults(results);
          console.log("Products:", results);
        });
      }, 2000), // after 2 seconds, the function will be call
ed
    [searchProductsAPI], // only re-run when searchProductsAP
I changes
  );
  const onChange = (event: React.ChangeEvent<HTMLInputElement
>) => {
```

## Page 22

```text
//Get the search value
    const searchValue = event.target.value;
    //Set the search value
    setSearchValue(searchValue);
    console.log("Value changed to:", searchValue);
    //Only run when the length of the searchValue equal or ab
ove 3
    if (searchValue.length >= 3) {
    //Called debouncedSeachFunction 
      debouncedSearchFn(searchValue);
    }
    
    
 
 return (
    <div style={{ position: "relative", width: "100%" }}>
      <Search
        placeholder="Search"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      <SearchResult products={searchResults} searchValue={sea
rchValue} />
    </div>
  );
6: Check Out Flow
```

## Page 23

```text
When the products are added to cart, the function addProductToCart in
CartProvider will be insert in the arrays CartProducts. 
Then, the CartProducts will be displayed in “cart” page -Which has the
cartContext passed into)
The local cartProducts will be filtered from products array by the cartProductsIds
export default function CartPage() {
  const {
    cartProducts: cartProductIds,
    removeProductFromCart,
    clearCart,
    getTotalPriceInCart,
    getTotalQuantityInCart,
  } = useContext(CartContext);
  const router = useRouter();
  // get all products from API
  const { products: allProducts } = useProduct();
  // state save cart prodcts
  const [cartProducts, setCartProducts] = useState<IProduct[]
>([]);
  useEffect(() => {
    // Filter products that are in the cart
    const filteredProducts = allProducts.filter(
      (product) => product.id in cartProductIds,
    );
    // eslint-disable-next-line react-hooks/set-state-in-effe
ct
    setCartProducts(filteredProducts);
  }, [cartProductIds, allProducts]);
  const handleClearCart = () => {
    clearCart();
    message.success("Cart cleared");
```

## Page 24

```text
};
  const totalPrice = getTotalPriceInCart();
  
  
  
  return(
  ...
    <Col xs={24} lg={16}>
      {cartProducts.map((product) => (
        //Print our the CartProductCard
        <CartProductCard key={product.id} product={product} /
>
      ))}
    </Col>
    ...
    //Check out putton
<Button
      type="primary"
      size="large"
      block
      style={{ marginTop: "16px" }}
      //Proceed to checkouts page
      onClick={
        () => router.push("/checkouts")
        // message.info("Checkout functionality would be impl
emented here")
      }
    >
      Proceed to Checkout
    </Button>
  
  
  )
```

## Page 25

```text
When the user agree to proceed to check out, the products will be displayed in the
check out page. In order to display them, the filterProducts will filtered the
products by the cartProducts ID
export default function ListCardProducts() {
  const { cartProducts, getTotalPriceInCart} = useContext(Car
tContext);
  const {products} = useProduct()
  const filterProducts = products.filter(product => Object.ke
ys(cartProducts).includes(product.id.toString()))
  console.log("xxx003 productIds", cartProducts);
  return (...)
 }
When we click buy now in the information page, that particular product will first be
added to the cart, then proceed to checkout right away
7: Bread Crumbs
Bread crumb stores the previous and current Pathname into pathParts 
"use client";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
// These names replace route names that are not pleasant to r
ead.
// For example, "product-details" will be displayed as "Produ
ct Details".
const PAGE_NAMES: Record<string, string> = {
```

## Page 26

```text
auth: "Account",
  blogs: "Blogs",
  cart: "Cart",
  category: "Category",
  checkouts: "Checkout",
  liked: "Liked Products",
  "product-details": "Product Details",
  "about-us": "About Us",
  demo_2: "Demo 2",
};
export default function BreadcrumbNavigation() {
  // usePathname gives us the current path.
  // Example: "/product-details" or "/category".
  const pathname = usePathname();
  // Remove the empty values created by the slash characters.
  // Example: "/product-details" becomes ["product-details"].
  const pathParts = pathname.split("/").filter((part) => part 
!== "");
  // The homepage does not need a breadcrumb because it is al
ready the first page.
  if (pathname === "/") {
    return null;
  }
  // Every breadcrumb starts with a link that returns to the 
homepage.
  const breadcrumbItems = [
    {
      title: (
        <Link href="/" style={{ color: "#151515" }}>
          <HomeOutlined /> Home
        </Link>
      ),
```

## Page 27

```text
},
    ...pathParts.map((part, index) => {
      // Join the previous parts to create the link for this 
breadcrumb item.
      // This also works if a nested route is added later.
      const href = "/" + pathParts.slice(0, index + 1).join
("/");
      const isCurrentPage = index === pathParts.length - 1;
      // Use our readable page name when one exists.
      // Otherwise, replace dashes with spaces and capitalize 
the first letter.
      const defaultName = part.replaceAll("-", " ");
      const pageName =
        PAGE_NAMES[part] ||
        defaultName.charAt(0).toUpperCase() + defaultName.sli
ce(1);
      return {
        // The current page is plain text. Previous pages are 
clickable links.
        title: isCurrentPage ? (
          <span style={{ color: "#e21d2b", fontWeight: 600 }}
>{pageName}</span>
        ) : (
          <Link href={href} style={{ color: "#151515" }}>
            {pageName}
          </Link>
        ),
      };
    }),
  ];
  return (
  ...
      {/* Ant Design renders the items and places the separat
```

## Page 28

```text
or between them. */}
      <Breadcrumb items={breadcrumbItems} separator=">" />
      ...
  );
}
```
