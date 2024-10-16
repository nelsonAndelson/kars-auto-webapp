import { StaticImageData } from "next/image";

export interface Slide {
  title: string;
  subtitle: string;
  buttonText: string;
  image: StaticImageData;
}
