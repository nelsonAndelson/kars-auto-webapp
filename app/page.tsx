import Inventory from "@/components/Home/Inventory/Inventory";
import Slideshow from "@/components/Home/Slideshow/Slideshow";
import Services from "@/components/Services/Services";
import React from "react";

const Home = () => {
  return (
    <main className="w-full">
      <Slideshow />
      <Inventory />
      <Services />
    </main>
  );
};

export default Home;
