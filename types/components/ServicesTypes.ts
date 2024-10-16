import { StaticImageData } from "next/image";

export interface ServiceType {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: StaticImageData;
}
