"use client";
import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";

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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Value changed to:", event.target.value);
    //  value length>3 => call api to search products
    if (event.target.value.length >= 3) {
      console.log("Calling API to search products");
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
