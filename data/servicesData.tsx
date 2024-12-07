import { Wrench } from "lucide-react";
import { GiCarWheel, GiAutoRepair } from "react-icons/gi";
import { PiEngineBold } from "react-icons/pi";
import { ServiceCard } from "@/types/components/service-types";
import brakesImage from "@/app/images/car-suspension.jpg";
import tireImage from "@/app/images/tire-rotation-services.jpeg";
import engineImage from "@/app/images/engine-repair.jpg";
import maintenanceImage from "@/app/images/service.jpg";

export const services: ServiceCard[] = [
  {
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
    title: "Brakes and Suspension Repair",
    description:
      "We specialize in brake and suspension repair, ensuring your vehicle handles safely and smoothly.",
    features: ["Brake Service", "Suspension Work", "Engine Repair", "Transmission Service"],
    image: brakesImage,
  },
  {
    icon: <GiCarWheel className="w-8 h-8 text-orange-500" />,
    title: "Tires and Wheel Repair",
    description:
      "Keep your ride safe a nd smooth with our tire and wheel services. From rotations and alignments to replacements, we ensure your tires wear evenly and your car handles perfectly.",
    image: tireImage,
    features: ["Tire Rotation", "Wheel Alignment", "Tire Replacement", "Wheel Balancing"],
  },
  {
    icon: <PiEngineBold className="w-8 h-8 text-orange-500" />,
    title: "Engine and Transmission Repair",
    description:
      "Get back on the road with confidence. Our expert team handles everything from diagnostics to repairs for engines and transmissions, ensuring reliable performance and peace of mind.",
    image: engineImage,
    features: ["Engine Diagnostics", "Transmission Repair", "Engine Overhaul", "Performance Tuning"],
  },
  {
    icon: <GiAutoRepair className="w-8 h-8 text-orange-500" />,
    title: "Preventive Maintenance",
    description:
      "Keep your car in peak condition with our preventive maintenance services. From oil changes and filter replacements to full inspections, we help you avoid costly repairs down the road.",
    image: maintenanceImage,
    features: ["Oil Changes", "Filter Replacement", "Fluid Checks", "Safety Inspections"],
  },
];