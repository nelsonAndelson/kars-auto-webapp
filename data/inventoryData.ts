import { CarListingType } from "@/types/types";
import car1 from "@/app/images/car-listing.jpg";
import hondaOdyssey2010 from "@/app/images/honda-od-2010.jpg";
import hondaOdyssey2007 from "@/app/images/honda-od-07.jpeg";
import hondaPilotGray from "@/app/images/honda-pilot-gray.jpg";
import hondaPilotSilver from "@/app/images/honda-pilot-silver.jpg";
import kiaRio from "@/app/images/kia-rio-2012.jpg";

export const mockInventory: CarListingType[] = [
  {
    id: "1",
    make: "HONDA",
    model: "ODYSSEY",
    year: 2010,
    price: 6985,
    mileage: 130000,
    transmission: "Automatic",
    image: hondaOdyssey2010,
  },
  {
    id: "2",
    make: "HONDA",
    model: "ODYSSEY",
    year: 2007,
    price: 5095,
    mileage: 171000,
    transmission: "Automatic",
    image: hondaOdyssey2007,
  },
  {
    id: "3",
    make: "HONDA",
    model: "PILOT",
    year: 2009,
    price: 6995,
    mileage: 142000,
    transmission: "Automatic",
    image: hondaPilotGray,
  },
  {
    id: "4",
    make: "HONDA",
    model: "PILOT",
    year: 2009,
    price: 5499,
    mileage: 191000,
    transmission: "Automatic",
    image: hondaPilotSilver,
  },
  {
    id: "5",
    make: "TOYOTA",
    model: "RAV4",
    year: 2022,
    price: 15000,
    mileage: 50000,
    transmission: "Automatic",
    image: car1,
  },
  {
    id: "6",
    make: "KIA",
    model: "RIO",
    year: 2012,
    price: 4500,
    mileage: 138000,
    transmission: "Automatic",
    image: kiaRio,
  },
];
