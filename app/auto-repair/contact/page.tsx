import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Auto Repair | KARS Auto Sales and Repair',
  description: 'Contact our auto repair team for quotes, questions, or to schedule a service. Fast response guaranteed.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">
        Contact Our Auto Repair Team
      </h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Need a quote or have questions about our services? Fill out the form below and we&apos;ll get back to you within 2 hours during business hours.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="(216) 555-1234"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                Service Needed
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              >
                <option value="">Select a service</option>
                <option value="diagnostic">Free Diagnostic</option>
                <option value="oil-change">Oil Change</option>
                <option value="brake-service">Brake Service</option>
                <option value="engine-repair">Engine Repair</option>
                <option value="transmission">Transmission Service</option>
                <option value="other">Other (please specify)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tell us about your vehicle and what you need"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="text-gray-700">19100 Nottigham Road, Cleveland OH 44110</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+12163041233" className="text-orange-500 hover:underline">
                    +1 (216) 304 1233
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Hours</h3>
                <p className="text-gray-700">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-gray-700 mb-4">
              For urgent repairs or immediate assistance, please call us directly.
            </p>
            <Link href="/auto-repair/booking">
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors mb-4">
                Book an Appointment
              </button>
            </Link>
            <a href="tel:+12163041233">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                Call Now: (216) 304-1233
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 