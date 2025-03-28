"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { 
   FaCheck, 
  FaTruck, FaCar, FaHeadset,
  FaMoneyBillWave, FaUserClock, FaFileAlt, FaTimes,
  FaSpinner
} from 'react-icons/fa';
import { trackCustomEvent } from "@/lib/meta-pixel";

import { fleetFormSchema, type FleetFormData } from '../types/fleet';
import { submitFleetForm } from '../services/fleet';

// Import images
import fleetServiceBg from '@/app/images/Fleet-Service-bg.jpg';
import fleetVanLift from '@/app/images/fleet-van-on-lift.png';
import fleetVanRepair from '@/app/images/fleet-van-on-repair.jpg';
import fleetVanRepair2 from '@/app/images/fleet-van-on-repair2.jpg';
import fleetVanOnRepair from '@/app/images/fleet-van-on-repair.jpg';
import uberFleetImage from '@/app/images/intro-1683051283.jpg';
import lyftImage from '@/app/images/lyft-image.jpg';

export default function FleetMaintenancePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FleetFormData>({
    resolver: zodResolver(fleetFormSchema)
  });

  const onSubmit = async (data: FleetFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await submitFleetForm(data);

      // Track the fleet inquiry
      trackCustomEvent("FleetInquiry", {
        content_name: "Fleet Maintenance Inquiry",
        status: "submitted",
        fleet_type: data.fleetType,
        vehicle_count: data.vehicleCount,
        mobile_service: data.mobileService
      });

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting fleet inquiry:", error);
      setSubmitError("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={fleetServiceBg}
            alt="Fleet maintenance service background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fleet Maintenance Made Easy: Keep Your Service Vans & Uber Vehicles Running 24/7
            </h1>
            <h2 className="text-xl md:text-2xl text-yellow-300 mb-8">
              Plumbers, HVAC, and rideshare fleet owners: Say goodbye to costly breakdowns. Get priority maintenance & predictable pricing for your fleet today!
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('fleet-assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
              >
                Get a Free Fleet Assessment
              </button>
              <Link href="#pricing">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:bg-white/10">
                  View Fleet Plans
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problems */}
              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-red-800 mb-6">Most Fleet Owners Struggle With...</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full mt-1">
                      <FaTimes className="text-red-600" />
                    </div>
                    <div>
                      <p className="text-red-900 font-medium">Unreliable Mechanics</p>
                      <p className="text-red-700">Shops that don&apos;t prioritize fleet vehicles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full mt-1">
                      <FaTimes className="text-red-600" />
                    </div>
                    <div>
                      <p className="text-red-900 font-medium">Long Wait Times</p>
                      <p className="text-red-700">A vehicle sitting in a shop = lost income</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full mt-1">
                      <FaTimes className="text-red-600" />
                    </div>
                    <div>
                      <p className="text-red-900 font-medium">Expensive Repairs</p>
                      <p className="text-red-700">Small problems turn into major expenses</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Our Fleet Solutions</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <FaCheck className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-900 font-medium">Fast Turnaround</p>
                      <p className="text-green-700">Priority service keeps your vehicles on the road</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <FaCheck className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-900 font-medium">Predictable Pricing</p>
                      <p className="text-green-700">No surprise fees. Simple monthly plans.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <FaCheck className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-900 font-medium">Mobile Service Available</p>
                      <p className="text-green-700">We come to YOU for oil changes & minor repairs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fleet Maintenance Plans</h2>
              <p className="text-xl text-gray-700">
                Predictable Pricing. Maximum Uptime. No Surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contractor Plan */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-blue-200 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Contractor Plan</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$99<span className="text-lg text-gray-600">/vehicle/mo</span></div>
                  <p className="text-gray-600">Perfect for HVAC, plumbing & service vans</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Free Monthly Check-Up</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">15% Off All Repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Free Oil Changes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Mobile Service Available</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all">
                  Choose Contractor Plan
                </button>
              </div>

              {/* Rideshare Plan */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500 hover:border-blue-600 transition-all transform scale-105">
                <div className="text-center mb-6">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rideshare Plan</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$49<span className="text-lg text-gray-600">/vehicle/mo</span></div>
                  <p className="text-gray-600">Perfect for Uber/Lyft fleet owners</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Express Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">10% Off All Repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Free Tire Rotations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Basic Fleet Support</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all">
                  Choose Rideshare Plan
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-blue-200 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Plan</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$199<span className="text-lg text-gray-600">/vehicle/mo</span></div>
                  <p className="text-gray-600">For larger fleets (5+ vehicles)</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Priority Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">20% Off All Repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Mobile Service Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">24/7 Emergency Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated Fleet Manager</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all">
                  Choose Premium Plan
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-blue-600 font-semibold">🎉 SPECIAL OFFER: First Month for Just $49 – Try Us Risk-Free!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Fleet Owners Get With Us</h2>
              <p className="text-xl text-gray-700">
                Everything you need to keep your fleet running smoothly
              </p>
            </div>

            {/* Add image showcase before benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={fleetVanLift}
                  alt="Fleet van on service lift"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={fleetVanRepair}
                  alt="Fleet van being repaired"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={fleetVanRepair2}
                  alt="Fleet van maintenance"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeadset className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Fleet Manager</h3>
                <p className="text-gray-700">24/7 Support for all your repair needs</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserClock className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround Times</h3>
                <p className="text-gray-700">Your vehicles come first, every time</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMoneyBillWave className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fleet-Exclusive Pricing</h3>
                <p className="text-gray-700">Lower rates than one-off repairs</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaFileAlt className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Tracking</h3>
                <p className="text-gray-700">Monthly reports on fleet health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us Over Dealerships & Chain Shops?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-red-800 mb-6">Typical Repair Shops</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaTimes className="text-red-600" />
                    <span className="text-red-900">Long wait times - Your vehicles sit idle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaTimes className="text-red-600" />
                    <span className="text-red-900">High repair costs - No fleet discounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaTimes className="text-red-600" />
                    <span className="text-red-900">No emergency support when you need it</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaTimes className="text-red-600" />
                    <span className="text-red-900">No mobile service options</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-green-800 mb-6">Our Fleet Maintenance</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-600" />
                    <span className="text-green-900">Priority Service – No Delays</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-600" />
                    <span className="text-green-900">Fixed, Discounted Fleet Pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-600" />
                    <span className="text-green-900">Same-Day/Urgent Repairs Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-600" />
                    <span className="text-green-900">Mobile Service for Minor Repairs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Help</h2>
              <p className="text-xl text-gray-700">
                Specialized maintenance solutions for service fleets and rideshare operators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Vans Section */}
              <div className="space-y-6">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={fleetVanOnRepair}
                    alt="Service van maintenance"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">Service & Contractor Fleets</h3>
                    <p className="text-sm">HVAC, Plumbing, Electrical & More</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaTruck className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">For Contractors & Service Vans</h3>
                      <p className="text-gray-600">Your business depends on your vehicle—let&apos;s keep it running</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">Priority scheduling for emergency repairs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">Mobile service for basic maintenance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">Weekend & after-hours availability</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rideshare Section */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 h-64">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src={uberFleetImage}
                      alt="Uber fleet vehicles"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-bold">Uber Fleets</p>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src={lyftImage}
                      alt="Lyft fleet vehicles"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-bold">Lyft Fleets</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaCar className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">For Uber/Lyft Fleet Owners</h3>
                      <p className="text-gray-600">More uptime = More money. We keep your vehicles moving</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">Express service for quick turnaround</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">Fleet-wide maintenance tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">Rideshare-specific maintenance plans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Fleet Owners Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <FaTruck className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">James Anderson</h3>
                    <p className="text-gray-600">Owner, Anderson HVAC Services</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I used to lose money every time my work vans broke down. Now with their fleet plan, I have predictable maintenance costs and priority service. My vans stay on the road, which means more jobs completed!"
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <FaCar className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Sarah Johnson</h3>
                    <p className="text-gray-600">Uber/Lyft Fleet Owner (12 vehicles)</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Managing a rideshare fleet is challenging, but their maintenance plan makes it easier. Express service means my drivers are back on the road quickly, and the fleet pricing saves us thousands each month!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="fleet-assessment" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Fleet Assessment</h2>
                <p className="text-blue-100">
                  Whether you have service vans or rideshare vehicles, we&apos;ll create a custom maintenance plan that keeps your fleet running at peak efficiency.
                </p>
              </div>

              {submitSuccess ? (
                <div className="text-center p-8 bg-green-100 rounded-lg">
                  <FaCheck className="text-green-500 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">We&apos;ve received your request and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-blue-100 mb-2" htmlFor="businessName">
                      Business Name
                    </label>
                    <input
                        {...register('businessName')}
                      type="text"
                        id="businessName"
                        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                          errors.businessName ? 'border-red-400' : 'border-blue-400'
                        } text-white placeholder-blue-200`}
                      placeholder="Your business name"
                    />
                      {errors.businessName && (
                        <p className="mt-1 text-red-400 text-sm">{errors.businessName.message}</p>
                      )}
                  </div>
                  <div>
                      <label className="block text-blue-100 mb-2" htmlFor="contactName">
                      Contact Name
                    </label>
                    <input
                        {...register('contactName')}
                      type="text"
                        id="contactName"
                        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                          errors.contactName ? 'border-red-400' : 'border-blue-400'
                        } text-white placeholder-blue-200`}
                      placeholder="Your name"
                    />
                      {errors.contactName && (
                        <p className="mt-1 text-red-400 text-sm">{errors.contactName.message}</p>
                      )}
                    </div>
                </div>

                <div>
                  <label className="block text-blue-100 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                      {...register('email')}
                    type="email"
                    id="email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                        errors.email ? 'border-red-400' : 'border-blue-400'
                      } text-white placeholder-blue-200`}
                    placeholder="you@company.com"
                  />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-blue-100 mb-2" htmlFor="fleetType">
                        Fleet Type
                      </label>
                      <select
                        {...register('fleetType')}
                        id="fleetType"
                        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                          errors.fleetType ? 'border-red-400' : 'border-blue-400'
                        } text-white`}
                      >
                        <option value="" className="text-gray-900">Select fleet type</option>
                        <option value="service" className="text-gray-900">Service Vans (HVAC, Plumbing, etc.)</option>
                        <option value="rideshare" className="text-gray-900">Uber/Lyft Fleet</option>
                        <option value="mixed" className="text-gray-900">Mixed Fleet</option>
                      </select>
                      {errors.fleetType && (
                        <p className="mt-1 text-red-400 text-sm">{errors.fleetType.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-blue-100 mb-2" htmlFor="vehicleCount">
                        Number of Vehicles
                      </label>
                      <input
                        {...register('vehicleCount', { valueAsNumber: true })}
                        type="number"
                        id="vehicleCount"
                        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                          errors.vehicleCount ? 'border-red-400' : 'border-blue-400'
                        } text-white placeholder-blue-200`}
                        placeholder="How many vehicles?"
                        min="1"
                      />
                      {errors.vehicleCount && (
                        <p className="mt-1 text-red-400 text-sm">{errors.vehicleCount.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-blue-100 mb-2" htmlFor="maintenanceNeeds">
                      Current Maintenance Needs
                    </label>
                    <textarea
                      {...register('maintenanceNeeds')}
                      id="maintenanceNeeds"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-blue-400 text-white placeholder-blue-200"
                      placeholder="Tell us about your current maintenance challenges or requirements..."
                    />
                  </div>

                  <div className="flex items-center gap-2 text-blue-100">
                    <input
                      {...register('mobileService')}
                      type="checkbox"
                      id="mobileService"
                      className="w-4 h-4 rounded border-blue-400"
                    />
                    <label htmlFor="mobileService">
                      I'm interested in mobile service options
                    </label>
                </div>

                  {submitError && (
                    <div className="text-red-400 text-sm text-center">{submitError}</div>
                  )}

                <button
                  type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-4 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      'Get My Custom Fleet Quote'
                    )}
                </button>

                  <p className="text-blue-200 text-sm text-center">
                    🎉 First Month Special: Try any plan for just $49 per vehicle!
                  </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Fleet Maintenance?</h2>
            <p className="text-xl text-gray-700 mb-8">
                Join successful fleet owners who trust us with their vehicles. Whether you run service vans or rideshare vehicles, we&apos;ll keep your fleet running smoothly.
            </p>
            <div className="space-y-4">
            <button 
              onClick={() => document.getElementById('fleet-assessment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
            >
              Schedule Your Free Fleet Assessment
            </button>
              <p className="text-blue-600 font-medium">
                🔥 Limited Time: First Month Just $49/Vehicle
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 