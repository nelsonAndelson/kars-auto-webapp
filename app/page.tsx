import Inventory from "@/components/Home/Inventory/Inventory";
import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import AboutUsSection from "@/components/AboutUs/AboutUs";
import FAQ from "@/components/Home/FAQ/FAQ";

import React from "react";

const Home = async () => {
  return (
    <main className="w-full">
      <Hero />
      <Inventory />
      <HowItWorks />
      <AboutUsSection />
      <FAQ />
    </main>
  );
};

export default Home;
