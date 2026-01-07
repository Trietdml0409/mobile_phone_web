"use client";

import { Button, Card, Flex } from "antd";
import { useState } from "react";

function GenerateImage(width = 200, height = 200): string {
  const seed = Math.floor(Math.random() * 100000);
  return `https://picsum.photos/${width}/${height}?random=${seed}`;
}

type Person = { id: string; name: string; age: number; image: string };
const PersonList: Person[] = [
  {
    id: "01",
    name: "Jackson",
    age: 30,
    image: GenerateImage(),
  },
  {
    id: "02",
    name: "Martha",
    age: 28,
    image: GenerateImage(),
  },
  {
    id: "03",
    name: "Dwayne",
    age: 40,
    image: GenerateImage(),
  },
  {
    id: "04",
    name: "Anthony",
    age: 35,
    image: GenerateImage(),
  },
  {
    id: "05",
    name: "Json",
    age: 35,
    image: GenerateImage(),
  },
];

//THE CORRECT MEANING OF RE-RENDER, EXPLAIN USE STATE BASED ON THIS MEANING
//DONT UNDERSTAND THE SPREAD OPERATOR FOR THE STYLE
//HOW CAN I PUT THIS OPERATOR IN A FUNCTION, AND PASS IT TO THE STYLE
function CardComponent({
  person,
  handleClickName,
  clickedName,
}: {
  person: Person;
  handleClickName(name: string): void;
  clickedName: string | null;
}) {
  return (
    <Card>
      <img src={person.image} />
      <p>{person.name}</p>
      <p>{person.age}</p>
      <Button
        style={{
          ...(clickedName === person.name
            ? { background: "blue", color: "white" }
            : {}),
        }}
        onClick={() => {
          handleClickName(person.name);
        }}
      >
        Click here
      </Button>
    </Card>
  );
}

export default function Demo2() {
  const [clickedName, setClickedName] = useState<string | null>(null);
  const [persons, setPersons] = useState<Person[]>(PersonList);

  function handleSortBy() {
    const sorted = [...persons].sort((a, b) => a.name.localeCompare(b.name));
    setPersons(sorted); // update state so React re-renders
  }

  return (
    <>
      <div
        style={{ backgroundColor: "white", height: "100vh", width: "100vw" }}
      >
        <p style={{ color: "black" }}>Clicked Name: {clickedName}</p>
        <Button onClick={() => handleSortBy()}>Sort by name</Button>
        <Flex gap="middle">
          {persons.map((person: Person) => (
            <CardComponent
              clickedName={clickedName}
              handleClickName={setClickedName}
              key={person.id}
              person={person}
            />
          ))}
        </Flex>
      </div>
    </>
  );
}
