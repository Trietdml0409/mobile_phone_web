"use client";

import { Button, Card, Flex } from "antd";
import { useState, useEffect } from "react";
import Icon, {HeartOutlined,HeartFilled} from "@ant-design/icons";

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





function CardComponent({person,handlePersonClicked,personClicked,handleLikedPerson,likedPersons}:{person:Person; handlePersonClicked(name:string):void;personClicked:string|null,handleLikedPerson(name:string):void,likedPersons:string[]}){
  return(
    <>
      <Card>
        <img src={person.image}/>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Id: {person.id}</p>
        <Button onClick={()=>handlePersonClicked(person.name)} style={{...(person.name===personClicked ? {color:"white",background:"blue"}:{} )}}>Clicked Here</Button>
        <Button onClick={()=>handleLikedPerson(person.name)} >  {likedPersons.includes(person.name) ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />} </Button>
      </Card>
    </>
  )
}



export default function Demo2(){
  const [personClicked,setPersonClicked] = useState<string|null>(null);
  const [likedPersons,setLikedPersons] = useState<string[]>([]);

  useEffect(()=>{
  const likedPersons:string|null = localStorage.getItem("likedPersons")
  if(likedPersons){
    try{
      const values = JSON.parse(likedPersons)
      setLikedPersons(values)
    } catch(error){
      console.error("Error parsing saved liked product ids: ", error);
    }
  }

},[])
  function handleLikedPerson(person_name:string){
    let newLikedPersons:string[] = [];
    if(likedPersons.includes(person_name)){
      newLikedPersons = likedPersons.filter(person_old_name => person_old_name !== person_name)
    } else {
      newLikedPersons = [...likedPersons,person_name]
    }

    setLikedPersons(newLikedPersons)
    localStorage.setItem("likedPersons",JSON.stringify(newLikedPersons))
  }

  return(
    <>
      <div>
        <p>Chosen Name:{personClicked}</p>
        <Flex>
          {PersonList.map((person:Person)=>(<CardComponent likedPersons={likedPersons} handleLikedPerson={handleLikedPerson} personClicked={personClicked} key={person.id} person={person} handlePersonClicked={setPersonClicked}/>))}
        </Flex>
        
      </div>

    </>

  )
}
