import { Button } from "@/components/ui/button";
import { trackFBEvent } from '@/utils/analytics';
import { CarType } from "@/types/types";

interface BookAppointmentProps {
  car: CarType;
}

export default function BookAppointment({ car }: BookAppointmentProps) {
  const handleBookTestDrive = () => {
    trackFBEvent('Schedule', {
      content_category: 'Test Drive',
      content_name: `${car.year} ${car.make} ${car.model}`,
      currency: 'USD',
      value: car.price
    });
  };

  return (
    <Button onClick={handleBookTestDrive}>
      Book Test Drive
    </Button>
  );
} 