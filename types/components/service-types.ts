import { ReactNode } from "react";
import { StaticImageData } from "next/image";

interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  image: StaticImageData;
}

export type { ServiceCard };
