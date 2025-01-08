// types.ts
export interface CarType {
  // Basic Info
  _id: string;
  make: string;
  model: string;
  year: number;
  vin: string;

  // Details
  price: number;
  mileage: number;
  transmission: string;
  fuelType: string;

  // Colors
  color: string;
  exteriorColor: string;
  interiorColor: string;

  // Additional Info
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
