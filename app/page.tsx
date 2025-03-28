import FeaturedInventory from "@/components/Home/Inventory/FeaturedInventory";
import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import AboutUsSection from "@/components/AboutUs/AboutUs";
import FAQ from "@/components/Home/FAQ/FAQ";
import dynamic from "next/dynamic";

// Use dynamic import with SSR disabled for components using framer-motion
const AutoRepair = dynamic(() => import("@/components/Home/AutoRepair/AutoRepair"), { ssr: false });

const Home = async () => {
  return (
    <main className="w-full">
      <Hero />
      <AutoRepair />
      <FeaturedInventory />
      <HowItWorks />
      <AboutUsSection />
      <FAQ />
    </main>
  );
};

export default Home;
