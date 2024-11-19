import { client } from "../sanity/lib/sanity";
import { CarWithFirstImageType } from "@/types/types";

export const getAllCars = async () => {
  const cars = await client.fetch(`*[_type == "car"]`);
  return cars;
};

export async function getCarsWithFirstImage(): Promise<
  CarWithFirstImageType[]
> {
  const query = `*[_type == "car"]{
    _id,
    make,
    model,
    year,
    price,
    mileage,
    color,
    fuelType,
    transmission,
    features,
    description,
    specialOffer,
    "image": images[0].asset->url 
  }`;

  return await client.fetch(query);
}
