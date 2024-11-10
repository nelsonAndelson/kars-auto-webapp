import Inventory from "@/components/Home/Inventory/Inventory";
import Slideshow from "@/components/Home/Slideshow/Slideshow";
import Services from "@/components/Services/Services";
import AboutUsSection from "@/components/AboutUs/AboutUs";
import { getAllCars } from "@/actions/sanity-actions";
import React from "react";

const Home = async () => {
  const cars = await getAllCars();
  console.log("cars", cars.length);
  return (
    <main className="w-full">
      <Slideshow />
      <Inventory />
      <Services />
      <AboutUsSection />
    </main>
  );
};

export default Home;
