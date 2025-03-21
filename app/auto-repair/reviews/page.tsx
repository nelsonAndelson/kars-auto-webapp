import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auto Repair Reviews | KARS Auto Sales and Repair',
  description: 'Read what our customers say about our auto repair services. Real testimonials from satisfied customers in Cleveland.',
};

// Sample reviews data - in a real app, this would come from a database or API
const reviews = [
  {
    id: 1,
    name: 'Michael Johnson',
    rating: 5,
    date: 'March 15, 2025',
    service: 'Brake Repair',
    review: 'Excellent service! They fixed my brakes quickly and for a fair price. The mechanics explained everything they were doing and why. Will definitely return for future repairs.',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    rating: 5,
    date: 'February 28, 2025',
    service: 'Engine Diagnostics',
    review: 'My check engine light was on for weeks and another shop couldn\'t figure it out. KARS diagnosed the problem in 30 minutes and had it fixed the same day. Great service!',
  },
  {
    id: 3,
    name: 'David Thompson',
    rating: 4,
    date: 'February 10, 2025',
    service: 'Oil Change',
    review: 'Fast and efficient oil change service. The staff was friendly and professional. They also pointed out a few maintenance items I should consider, but weren\'t pushy about it.',
  },
  {
    id: 4,
    name: 'Jennifer Martinez',
    rating: 5,
    date: 'January 22, 2025',
    service: 'Transmission Repair',
    review: 'I was worried my transmission issues would cost thousands, but KARS gave me an honest assessment and fixed it for much less than I expected. My car runs perfectly now!',
  },
  {
    id: 5,
    name: 'Robert Wilson',
    rating: 5,
    date: 'January 5, 2025',
    service: 'Electrical System',
    review: 'Had an electrical issue that was draining my battery. They found the problem quickly and fixed it at a reasonable price. Very impressed with their knowledge and service.',
  },
];

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">
        Customer Reviews
      </h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Don't just take our word for it. See what our customers have to say about our auto repair services.
      </p>
      
      {/* Reviews List */}
      <div className="space-y-8 mb-16">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-xl">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.date} • {review.service}</p>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    {i < review.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
      
      {/* Leave a Review CTA */}
      <div className="bg-orange-50 p-8 rounded-xl border border-orange-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Had a Great Experience?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We appreciate your feedback! If you've had a positive experience with our auto repair services, please consider leaving a review.
        </p>
        <a 
          href="https://g.page/r/kars-auto-repair/review" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-block"
        >
          Leave a Google Review
        </a>
      </div>
      
      {/* Book Service CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Experience Our Service?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Join our satisfied customers and book your auto repair service today.
        </p>
        <Link href="/auto-repair/booking">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
} 