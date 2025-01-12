import { trackFBEvent } from '@/utils/analytics';
import { CarType } from '@/types/types';
import { Button } from '../ui/button';

interface BookTestDriveProps {
  car?: CarType;
}

export default function BookTestDrive({ car }: BookTestDriveProps) {
  const handleBookTestDrive = () => {
    trackFBEvent('Schedule', {
      content_category: 'Test Drive',
      content_name: car ? `${car.year} ${car.make} ${car.model}` : 'General Test Drive',
      currency: 'USD',
      value: car?.price || 0
    });
  };

  return (
    <Button onClick={handleBookTestDrive}>
      Book Test Drive
    </Button>
  );
} 