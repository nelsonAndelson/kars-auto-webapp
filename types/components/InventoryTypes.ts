import { StaticImageData } from "next/image";

export interface CarListingType {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: "Automatic" | "Manual";
  image: StaticImageData;
  specialOffer?: boolean;
}
