import Image from "next/image";
import { Button } from 'antd';
import Banner from "@/components/banner"; //$ is src
import Header from "@/components/header";


export default function Home() {
  return (
    <div className = "app">
      <Header />
      <Banner />
      <div className = "sub-banner"
      style = {{
        backgroundColor: "green",
        height: "150px",
      }}
      >sub-banner</div>
    </div>
  );
}
