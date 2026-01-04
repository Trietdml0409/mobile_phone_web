"use client";

import Header from "@/components/header";
import { Button, Flex } from "antd";
import { useState } from "react";

const AvatarCard = ({
  name,
  age,
  myFunction,
  //   isClicked,
  clickedName,
}: {
  name: string;
  age: number;
  myFunction: (name: string) => void;
  //   isClicked: boolean;
  clickedName: string;
}) => {
  const isClickedStyle = {
    // backgroundColor: "royalblue",
    zIndex: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    padding: 16,
    borderRadius: 10,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    border: "1px solid rgb(224, 224, 224)",
    transform: "scale(1.1) translateY(-10px)",
    transition: "all 0.3s ease",
  };

  return (
    <Flex
      vertical
      key={name.toLowerCase()}
      align="center"
      justify="center"
      style={{
        width: 200,
        height: 300,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        // ...(isClicked ? isClickedStyle : {}),
        ...(clickedName === name ? isClickedStyle : {}),
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://testingbot.com/free-online-tools/random-avatar/200?u=${
          // eslint-disable-next-line react-hooks/purity
          Math.random() % 100
        }`}
        alt="product"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <p style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>{name}</p>
      <p style={{ fontSize: 14, color: "red" }}>{age}</p>
      <Button onClick={() => myFunction(name)}>Click</Button>
    </Flex>
  );
};

export default function Demo() {
  const [clickedAvatarCardName, setClickedAvatarCardName] = useState<
    string | null
  >(null);

  const avatarCardData = [
    { name: "Alex Smith", age: 20 },
    { name: "Emily Johnson", age: 25 },
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 35 },
    { name: "Jim Beam", age: 40 },
    { name: "Jill Doe", age: 45 },
    { name: "Jack Doe", age: 50 },
    { name: "David Lee", age: 55 },
    { name: "Sarah Kim", age: 60 },
    { name: "Michael Brown", age: 65 },
  ];

  const handleClickAvatarCard = (name: string) => {
    setClickedAvatarCardName(name);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "whitesmoke",
        padding: 20,
      }}
    >
      <p style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        Clicked Avatar Card name:{" "}
        <span style={{ color: "royalblue" }}>{clickedAvatarCardName}</span>
      </p>
      {/* <Header /> */}
      <Flex gap="small" wrap style={{ padding: 40 }}>
        {/* 10 div product */}
        {/* 
        <Product
          name="Product 1"
          price={100}
          myFunction={() => handleClickProduct("Product 1")}
        />

        <Product
          name="Product 2"
          price={200}
          myFunction={() => handleClickProduct("Product 2")}
        /> */}

        {/* <Product name="Product 2" price={200} />

       <Product name="Product 3" price={300} />

       <Product name="Product 4" price={400} />

       <Product name="Product 5" price={500} />

       <Product name="Product 6" price={600} />

       <Product name="Product 7" price={700} />

       <Product name="Product 8" price={800} />

       <Product name="Product 9" price={900} />

       <Product name="Product 10" price={1000} />  */}

        {avatarCardData.map((avatarCard) => (
          <AvatarCard
            key={avatarCard.name.toLowerCase()}
            name={avatarCard.name}
            age={avatarCard.age}
            myFunction={() => handleClickAvatarCard(avatarCard.name)}
            // isClicked={clickedAvatarCardName === avatarCard.name}
            clickedName={clickedAvatarCardName || ""}
          />
        ))}
      </Flex>
    </div>
  );
}
