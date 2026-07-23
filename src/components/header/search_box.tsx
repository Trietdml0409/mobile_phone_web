"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import debounce from "lodash/debounce";
import { useProduct } from "@/shared/hooks/useProducts";
import type { IProduct } from "@/shared/types/common.types";
import SearchResult from "./components/SearchResult";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const suffix = <AudioOutlined style={{ fontSize: 16, color: "#e21d2b" }} />;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const SearchBox: React.FC = () => {
  const { products } = useProduct(); // 100 products
  const [searchValue, setSearchValue] = useState<string>(""); // ssd => filter 5 products.
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const latestSearchValue = useRef<string>("");

  // get only the products that match the search value
  // const filterProducts = products.filter(
  //   (product) => product.name.toLowerCase().includes(searchValue.toLowerCase()), // check if the product name includes the search value
  // ); // filter process: 0.2s = 200ms => every re-render, memory address of filterProducts is changed

  // use memo => memorize the filterProducts function/values => only re-run when the searchValue or products change
  // const filteredProducts = useMemo(() => {
  //   return products.filter((product) =>
  //     product.name.toLowerCase().includes(searchValue.toLowerCase()),
  //   );
  // return callAPI result
  // }, [searchValue, products]); // keep the same memory address if searchValue or products not change

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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

  const searchProductsAPI = useCallback(async (value: string) => {
    console.log("searchProductsAPI", value);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds. fake api call
    return products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase()),
    );
  }, [products]);

  // Create debounced function when searchProductsAPI identity changes. Repeated calls reset the timer; only the last runs.
  const debouncedSearchFn = useMemo(
    () =>
      debounce((value: string) => {
        searchProductsAPI(value).then((results) => {
          if (latestSearchValue.current === value) {
            setSearchResults(results);
            setIsSearching(false);
            setHasSearched(true);
            console.log("Products:", results);
          }
        });
      }, 2000), // after 2 seconds, the function will be called
    [searchProductsAPI], // only re-run when searchProductsAPI changes
  );

  useEffect(() => {
    return () => {
      debouncedSearchFn.cancel();
    };
  }, [debouncedSearchFn]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    latestSearchValue.current = searchValue;
    setSearchValue(searchValue);
    console.log("Value changed to:", searchValue);
    if (searchValue.trim().length >= 3) {
      setSearchResults([]);
      setIsSearching(true);
      setHasSearched(false);
      debouncedSearchFn(searchValue);
    } else {
      debouncedSearchFn.cancel();
      setSearchResults([]);
      setIsSearching(false);
      setHasSearched(false);
    }
  };

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
      <SearchResult
        products={searchResults}
        searchValue={searchValue}
        isSearching={isSearching}
        hasSearched={hasSearched}
      />
    </div>
  );
};

export default SearchBox;
