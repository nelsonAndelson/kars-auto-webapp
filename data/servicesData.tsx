import { Wrench, Car, CreditCard, Headphones } from "lucide-react";
import { ServiceType } from "@/types/components/ServicesTypes";
import brakesImage from "@/app/images/car-suspension.jpg";

export const services: ServiceType[] = [
  {
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
    title: "Brakes and Suspension Repair",
    description:
      "We specialize in brake and suspension repair, ensuring your vehicle handles safely and smoothly.",
    image: brakesImage,
  },
  {
    icon: <Car className="w-8 h-8 text-orange-500" />,
    title: "Car Sales",
    description: "Wide selection of quality used cars at competitive prices.",
    image: brakesImage,
  },
  {
    icon: <CreditCard className="w-8 h-8 text-orange-500" />,
    title: "Financing",
    description: "Flexible financing options to fit your budget.",
    image: brakesImage,
  },
  {
    icon: <Headphones className="w-8 h-8 text-orange-500" />,
    title: "Customer Support",
    description: "Dedicated support team for all your inquiries.",
    image: brakesImage,
  },
];
