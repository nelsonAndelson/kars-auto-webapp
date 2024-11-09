import { client } from "../sanity/lib/sanity";

export const getAllCars = async () => {
  const cars = await client.fetch(`*[_type == "car"]`);
  return cars;
};

export async function getCarsWithFirstImage() {
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

  const cars = await client.fetch(query);
  console.log("cars", cars);
  return cars;
  // return await client.fetch(query);
}
