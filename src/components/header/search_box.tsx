"use client";
import React, { useMemo } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import debounce from "lodash/debounce";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1677ff" }} />;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const SearchBox: React.FC = () => {
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

  // fake api call to search products
  const searchProductsAPI = async (value: string) => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds
    return [
      { id: 1, name: `Product ${value} 1`, price: 100 },
      { id: 2, name: `Product ${value} 2`, price: 200 },
      { id: 3, name: `Product ${value} 3`, price: 300 },
    ];
  };

  // Create debounced function ONCE so repeated calls reset the timer; only the last call runs.
  const debouncedSearchFn = useMemo(
    () =>
      debounce((value: string) => {
        searchProductsAPI(value).then((products) => {
          console.log("Products:", products);
        });
      }, 2000),
    [],
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    console.log("Value changed to:", searchValue);
    if (searchValue.length >= 3) {
      debouncedSearchFn(searchValue);
    }
  };

  return (
    <Search
      placeholder="Search"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};

export default SearchBox;
