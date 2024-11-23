"use client";

import { HeroSection } from "@/components/Services/Hero";
import { ServicesGrid } from "@/components/Services/ServicesGrid";
import { WhyChooseUs } from "@/components/Services/WhyChooseUs";
import { CTASection } from "@/components/Services/CTASection";
import { ServiceCard } from "@/types/components/ServicesTypes";
import { Wrench, Gauge } from "lucide-react";
import generalRepaidImg from "@/app/images/service.jpg";
import tireRotationImg from "@/app/images/tire-rotation-services.jpeg";
import engineRepairImg from "@/app/images/engine-repair.jpg";
import diagnosticsImg from "@/app/images/diagnostic.jpeg";
import { GiCarWheel } from "react-icons/gi";

const services: ServiceCard[] = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "General Repairs",
    description:
      "Comprehensive auto repair services to keep your vehicle running smoothly",
    features: [
      "Brake Service",
      "Suspension Work",
      "Engine Repair",
      "Transmission Service",
    ],
    image: engineRepairImg,
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Diagnostics",
    description:
      "Advanced diagnostic testing to identify and resolve issues quickly",
    features: [
      "Computer Diagnostics",
      "Engine Analysis",
      "Electrical Systems",
      "Performance Testing",
    ],
    image: diagnosticsImg,
  },
  {
    icon: <GiCarWheel className="w-8 h-8" />,
    title: "Tire Services",
    description: "Expert tire services to keep your vehicle safe and reliable",
    features: [
      "Tire Rotation",
      "Tire Repair",
      "Tire Installation",
      "Tire Balancing",
    ],
    image: tireRotationImg,
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Preventive Maintenance",
    description: "Regular maintenance services to prevent costly repairs",
    features: [
      "Oil Changes",
      "Filter Replacement",
      "Fluid Services",
      "Tire Rotation",
    ],
    image: generalRepaidImg,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <HeroSection />
      <ServicesGrid services={services} />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
