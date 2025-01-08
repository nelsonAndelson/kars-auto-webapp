export interface CarCardProps {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuelType?: string;
  engineSize?: string;
  image: string;
  featured?: boolean;
}
