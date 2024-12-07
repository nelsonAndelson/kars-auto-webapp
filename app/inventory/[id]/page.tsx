import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { getCarById } from "@/actions/sanity-actions";
import CarPage from "./CarPage";

// Cache the car data fetching
const getCachedCarById = unstable_cache(
  async (id: string) => {
    try {
      const car = await getCarById(id);
      if (!car) return null;
      return car;
    } catch (error) {
      console.error("Error fetching car:", error);
      throw new Error("Failed to fetch car data");
    }
  },
  ["car-details"],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ["car-details"]
  }
);

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  try {
    const car = await getCachedCarById(params.id);
    
    if (!car) return { title: 'Car Not Found' };

    return {
      title: `${car.year} ${car.make} ${car.model} | Your Dealership Name`,
      description: `${car.year} ${car.make} ${car.model} with ${car.mileage.toLocaleString()} miles. ${car.description?.slice(0, 150)}...`,
      openGraph: {
        images: [{ url: car.images[0] }],
      },
    };
  } catch {
    return {
      title: 'Car Details | Your Dealership Name',
    };
  }
}

export default async function VehicleDetailPage({ params }: Props) {
  try {
    const car = await getCachedCarById(params.id);

    if (!car) {
      notFound();
    }

    return <CarPage car={car} />;
  } catch (error) {
    console.error("Error in VehicleDetailPage:", error);
    throw error;
  }
}
