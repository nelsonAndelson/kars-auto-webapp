import { z } from 'zod';

export const fleetFormSchema = z.object({
  businessName: z.string().min(2, 'Business name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  fleetType: z.enum(['service', 'rideshare', 'mixed'], {
    required_error: 'Please select a fleet type',
  }),
  vehicleCount: z.number().min(1, 'Must have at least 1 vehicle'),
  maintenanceNeeds: z.string().optional(),
  mobileService: z.boolean().default(false),
});

export type FleetFormData = z.infer<typeof fleetFormSchema>;

export interface FleetLead extends FleetFormData {
  timestamp: Date;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
} 