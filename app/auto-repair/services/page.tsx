import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auto Repair Services | KARS Auto Sales and Repair',
  description: 'Comprehensive auto repair services in Cleveland. From oil changes to engine repairs, our certified mechanics provide quality service with a 30-day guarantee.',
};

const services = [
  {
    id: 'diagnostics',
    title: '🔍 Engine Diagnostics',
    description: "Check engine light on? We'll diagnose the problem with our advanced computer systems.",
    pricing: 'Free with repair',
  },
  {
    id: 'brakes',
    title: '🛑 Brake Repair & Replacement',
    description: 'Full brake inspection & replacement for safe stopping power.',
    pricing: 'Starting at $99',
  },
  {
    id: 'oil-change',
    title: '🛢️ Oil Changes & Maintenance',
    description: 'Regular oil changes to keep your engine running smoothly.',
    pricing: 'Starting at $39.99',
  },
  {
    id: 'transmission',
    title: '⚙️ Transmission Repairs',
    description: 'Transmission fluid changes, repairs, and rebuilds.',
    pricing: 'Starting at $149',
  },
  {
    id: 'electrical',
    title: '⚡ Electrical System Repairs',
    description: 'Battery, alternator, and starter repairs and replacements.',
    pricing: 'Starting at $89',
  },
  {
    id: 'cooling',
    title: '❄️ Cooling System Service',
    description: 'Radiator repairs, coolant flushes, and thermostat replacements.',
    pricing: 'Starting at $79',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">
        Our Auto Repair Services
      </h1>
      <p className="text-lg text-gray-100 text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        From routine maintenance to major repairs, our certified mechanics provide quality service with a 30-day guarantee.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="service-box bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-orange-500 font-medium">{service.pricing}</span>
                <Link href="/auto-repair/booking">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Service?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-gray-100">
          Don&apos;t see what you&apos;re looking for? Contact us for a custom quote on any auto repair service.
        </p>
        <Link href="/auto-repair/booking">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Request a Custom Quote
          </button>
        </Link>
      </div>
    </div>
  );
} 