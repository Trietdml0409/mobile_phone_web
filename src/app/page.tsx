import Image from "next/image";
import { Button } from "antd";
import Banner from "@/components/home/banner"; //$ is src
import Header from "@/components/header";
import Contents from "@/components/home/contents";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Contents />
    </div>
  );
}
