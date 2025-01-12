// import { trackCustomFBEvent } from '@/utils/analytics';

// interface ServiceFormData {
//   serviceType: string;
//   year: number;
//   make: string;
//   model: string;
//   estimatedCost: number;
// }

// export default function ServiceForm() {
//   const handleSubmit = async (formData: ServiceFormData) => {
//     try {
//       // ... existing form submission logic

//       trackCustomFBEvent('ServiceRequest', {
//         service_type: formData.serviceType,
//         vehicle_info: `${formData.year} ${formData.make} ${formData.model}`,
//         estimated_value: formData.estimatedCost
//       });

//     } catch (error) {
//       console.error('Service form submission error:', error);
//     }
//   };

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       handleSubmit({
//         serviceType: 'maintenance',
//         year: 2024,
//         make: 'Toyota',
//         model: 'Camry',
//         estimatedCost: 500
//       });
//     }}>
//       <button type="submit">Submit Service Request</button>
//     </form>
//   );
// } 