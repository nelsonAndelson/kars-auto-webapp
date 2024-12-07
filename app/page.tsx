import Inventory from "@/components/Home/Inventory/Inventory";
import Slideshow from "@/components/Home/Slideshow/Slideshow";
import Services from "@/components/Services/Services";
import AboutUsSection from "@/components/AboutUs/AboutUs";

import React from "react";

const Home = async () => {
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
