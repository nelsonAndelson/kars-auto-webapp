// types.ts
export interface CarType {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  fuelType: string;
  transmission: string;
  features: string[];
  description: string;
  images: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }[];
}

export interface CarWithFirstImageType {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  fuelType: string;
  transmission: string;
  features: string[];
  description: string;
  specialOffer: boolean;
  image: string; // URL of the first image
}

export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  exteriorColor: string;
  interiorColor: string;
  transmission: string;
  vin: string;
  description: string;
  images: string[];
}
