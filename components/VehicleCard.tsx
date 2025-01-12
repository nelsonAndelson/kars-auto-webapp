import { trackFBEvent } from '@/utils/analytics';
import { Button } from './ui/button';
import Link from 'next/link';
import { CarType } from '@/types/types';

export default function VehicleCard({ car }: { car: CarType }) {
  const handleDetailsClick = () => {
    trackFBEvent('ViewContent', {
      content_type: 'vehicle_details',
      content_ids: [car._id],
      content_name: `${car.year} ${car.make} ${car.model}`,
      value: car.price,
      currency: 'USD',
      status: car.status || 'available'
    });
  };

  return (
    // ... existing JSX ...
    <Link href={`/inventory/${car._id}`} onClick={handleDetailsClick}>
      <Button variant="secondary" className="w-full">
        Get Details
      </Button>
    </Link>
  );
} 