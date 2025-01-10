import { CarWithFirstImageType } from "@/types/types";
import { urlFor } from "@/sanity/sanity.config";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CarCard({ car }: { car: CarWithFirstImageType }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0 relative w-full h-36">
        <Link href={`/inventory/${car._id}`}>
          <Image
            src={urlFor(car.image).url()}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div>
            <CardTitle className="text-lg font-bold mb-2">
              {car.make.toUpperCase()} {car.model.toUpperCase()} {car.year}
            </CardTitle>
            <Badge className="bg-primary text-black font-bold mb-2">
              ${car.price.toLocaleString()}
            </Badge>
          </div>
          <div className="flex justify-between text-sm text-white">
            <span>{car.mileage.toLocaleString()} mi</span>
            <span>{car.transmission}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/pre-approval" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Get Pre-Approved
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              <MessageSquare className="mr-2 h-4 w-4" /> Message Us
            </Button>
          </div>
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