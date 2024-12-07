import { StaticImageData } from "next/image";

export interface ServiceType {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: StaticImageData;
}

export interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: StaticImageData;
}
