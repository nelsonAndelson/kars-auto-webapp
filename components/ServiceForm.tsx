// // For repair service inquiries
// const handleServiceSubmit = (serviceType: string, year: number, make: string, model: string, estimatedCost: number) => {
//   if (typeof window !== 'undefined' && (window as any).fbq) {
//     (window as any).fbq('trackCustom', 'ServiceRequest', {
//       service_type: serviceType,
//       vehicle_info: `${year} ${make} ${model}`,
//       estimated_value: estimatedCost
//     });
//   }
// }; 