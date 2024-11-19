import { CarWithFirstImageType } from "@/types/types";
import { urlFor } from "@/sanity/sanity.config";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CarCard({ car }: { car: CarWithFirstImageType }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0 relative w-full h-36">
        <Image
          src={urlFor(car.image).url()}
          alt={`${car.make} ${car.model}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-bold mb-2">
              {car.make.toUpperCase()} {car.model.toUpperCase()} {car.year}
            </CardTitle>
            <Badge className="bg-primary text-black font-bold mb-2">
              ${car.price.toLocaleString()}
            </Badge>
          </div>
          <Link href="tel:+12163041233">
            <Button>
              <Phone className="mr-2 h-4 w-4" /> Call us Today!
            </Button>
          </Link>
        </div>
        <div className="flex justify-between text-sm text-white">
          <span>{car.mileage.toLocaleString()} mi</span>
          <span>{car.transmission}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-100 p-2">
        {car.specialOffer && (
          <Badge className="bg-orange-500 text-white">Special Offer</Badge>
        )}
      </CardFooter>
    </Card>
  );
} 