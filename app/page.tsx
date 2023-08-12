import Image from "next/image";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Feature } from "./components/Feature";
import { How } from "./components/How";
import { Feeds } from "./components/Feeds";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Feature />
      <How />
      <Feeds />
    </div>
  );
}
