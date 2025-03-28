import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaCheck, FaTrophy, FaClock, FaShieldAlt, FaWrench, FaTag, FaMoneyBillWave, FaUserPlus, FaQuestionCircle } from 'react-icons/fa';

// Import images
import diagnosticImage from '@/app/images/diagnostic.jpeg';
import engineRepairImage from '@/app/images/engine-repair.jpg';
import carSuspensionImage from '@/app/images/car-suspension.jpg';
import reliableImage from '@/app/images/reliable.jpg';
import serviceImage from '@/app/images/service.jpg';
import tireRotationImage from '@/app/images/tire-rotation-services.jpeg';
import oilChangeImage from '@/app/images/oil-change.jpg';
import checkEngineImage from '@/app/images/check-engine-light-mean.jpg';
import brakesImage from '@/app/images/brakes.jpg';
import acImage from '@/app/images/AC.webp';
import prePurchaseImage from '@/app/images/pre-purchase.jpeg';

export const metadata: Metadata = {
  title: 'Auto Repair Services | KARS Auto Sales and Repair',
  description: 'Fast, reliable auto repair services in Cleveland. From diagnostics to full engine repairs, we\'ve got you covered with our 30-day guarantee.',
};

export default function AutoRepairPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={reliableImage} 
            alt="Auto repair mechanic working on a car"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 z-0" style={{ 
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.7) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fast, Reliable Auto Repair in Cleveland – Book Now!
            </h1>
            
            <h2 className="flex items-center justify-center gap-2 text-xl md:text-2xl text-yellow-300 mb-12">
              <FaTrophy className="text-yellow-300" /> 
              Backed by a 30-Day Guarantee – Fixed Right or It's Free! 
              <FaTrophy className="text-yellow-300" />
            </h2>
            
            <Link href="/auto-repair/booking">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30">
                Get a Free Diagnostic
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section with Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={serviceImage}
                  alt="Professional auto repair service"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Auto Repair Services?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  At KARS Auto, we pride ourselves on providing top-quality auto repair services with a focus on customer satisfaction. 
                  Our team of certified mechanics has the expertise and experience to handle all your vehicle repair needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <FaCheck className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Transparent pricing with no hidden fees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <FaCheck className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Quality parts and professional workmanship</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <FaCheck className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Convenient scheduling and timely service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaCheck className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Work</h3>
                    <p className="text-gray-700">30-Day Fix Guarantee – If it's not fixed right, we'll make it right at no cost to you.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaTools className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Mechanics</h3>
                    <p className="text-gray-700">Our team has 15+ years of experience with all makes and models.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaClock className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Affordable</h3>
                    <p className="text-gray-700">Free diagnostics and same-day service for most repairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Promotions Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Auto Repair Promotions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Take advantage of these limited-time offers to save on your next auto repair service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Promo 1: Fixed Right or It's Free */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-all transform hover:scale-[1.02] group">
                <div className="relative h-48">
                  <Image 
                    src={reliableImage}
                    alt="Mechanic standing confidently next to a car"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    GUARANTEE
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaShieldAlt className="text-blue-600 text-xl" />
                    <h3 className="text-xl font-bold text-gray-900">Fixed Right or It's Free</h3>
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    Never pay twice for the same repair – we fix it right or it's free!
                  </p>
                  <p className="text-gray-600 mb-6 text-sm">
                    100% satisfaction guarantee: If we fix your car and the same problem returns within 30 days, we'll fix it for FREE—no questions asked.
                  </p>
                  <Link href="/auto-repair/fixed-right-guarantee">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all">
                      Book a Guaranteed Repair
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Promo 2: Fast & Free Diagnostic */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-all transform hover:scale-[1.02] group">
                <div className="relative h-48">
                  <Image 
                    src={diagnosticImage}
                    alt="Mechanic looking under a car hood"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FREE
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaTag className="text-green-600 text-xl" />
                    <h3 className="text-xl font-bold text-gray-900">Fast & Free Diagnostic</h3>
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    We'll diagnose your car problem for FREE – no obligation!
                  </p>
                  <p className="text-gray-600 mb-6 text-sm">
                    Don't pay just to find out what's wrong—our 15-minute diagnostic is 100% free! Plus get $20 off your service.
                  </p>
                  <Link href="/auto-repair/free-diagnostic">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-all">
                      Book Your Free Diagnostic
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Promo 3: First-Time Customer VIP Deal */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-all transform hover:scale-[1.02] group">
                <div className="relative h-48">
                  <Image 
                    src={serviceImage}
                    alt="Happy customer getting their car keys back"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    $50 OFF
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaUserPlus className="text-purple-600 text-xl" />
                    <h3 className="text-xl font-bold text-gray-900">First-Time Customer VIP Deal</h3>
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    First-time customers get VIP treatment – $50 off repairs!
                  </p>
                  <p className="text-gray-600 mb-6 text-sm">
                    New to KARS Auto? Get $50 OFF your first repair over $200 + FREE tire pressure & fluid top-up.
                  </p>
                  <Link href="/auto-repair/first-time-customer">
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-all">
                      Claim Your $50 Off Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fleet Maintenance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto">
                  <Image 
                    src={serviceImage} 
                    alt="Fleet of vehicles being maintained"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
                </div>
                
                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaTools className="text-orange-400" /> Own a Fleet? Let Us Handle Your Maintenance!
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Running a business means keeping your vehicles on the road. We offer special fleet maintenance packages for:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-800/50 p-4 rounded-lg text-center">
                      <p className="text-white font-medium">Amazon DSPs & Delivery Vehicles</p>
                    </div>
                    <div className="bg-blue-800/50 p-4 rounded-lg text-center">
                      <p className="text-white font-medium">Uber/Lyft & Rideshare Drivers</p>
                    </div>
                    <div className="bg-blue-800/50 p-4 rounded-lg text-center">
                      <p className="text-white font-medium">Service & Business Fleets</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="bg-green-500 p-1 rounded-full mt-1">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <p className="text-blue-50">Save Time & Money with Preventative Maintenance</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-green-500 p-1 rounded-full mt-1">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <p className="text-blue-50">FREE Monthly Fleet Check-Ups to Catch Problems Early</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-green-500 p-1 rounded-full mt-1">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <p className="text-blue-50">Exclusive Fleet Discounts on Repairs</p>
                    </div>
                  </div>
                  
                  <Link href="/fleet-maintenance">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30">
                      Get a Custom Fleet Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Auto Repair Services</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Professional auto repair services with quality parts and our satisfaction guarantee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  name: 'Heating & AC',
                  description: 'Keep comfortable with AC & heating checks and repairs',
                  image: acImage,
                  alt: 'Car AC system service'
                },
                { 
                  name: 'Pre-Purchase Inspections',
                  description: 'Detailed inspections before you buy a used car',
                  image: prePurchaseImage,
                  alt: 'Pre-purchase car inspection'
                },
                { 
                  name: 'Oil Changes', 
                  description: 'Regular maintenance to keep your engine running smoothly',
                  image: oilChangeImage,
                  alt: 'Oil change service'
                },
                { 
                  name: 'Check Engine Light', 
                  description: 'Troubleshooting and fixing check engine light issues',
                  image: checkEngineImage,
                  alt: 'Check engine light diagnosis'
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                  <div className="relative h-48">
                    <Image 
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <Link href="/auto-repair/services" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                      Learn more <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                { 
                  name: 'Suspension Repair', 
                  description: 'Smooth out your ride with our suspension services',
                  image: carSuspensionImage,
                  alt: 'Car suspension repair'
                },
                { 
                  name: 'Tire Services', 
                  description: 'Rotation, balancing, and replacement services',
                  image: tireRotationImage,
                  alt: 'Tire rotation service'
                },
                { 
                  name: 'Brake Service', 
                  description: 'Ensure your safety with professional brake service',
                  image: brakesImage, // Reusing image as placeholder
                  alt: 'Brake service'
                },
                { 
                  name: 'Electrical Systems', 
                  description: 'Diagnosing and repairing electrical issues',
                  image: serviceImage, // Reusing image as placeholder
                  alt: 'Electrical system repair'
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                  <div className="relative h-48">
                    <Image 
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <Link href="/auto-repair/services" className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                      Learn more <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/auto-repair/services">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
                  View All Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section with Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                  <p className="text-gray-700 italic mb-4">
                    "The team at KARS Auto fixed my car quickly and for a fair price. They explained everything they were doing and why. 
                    I'll definitely be back for future repairs!"
                  </p>
                  <p className="font-semibold text-gray-900">— Michael Johnson</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <p className="text-gray-700 italic mb-4">
                    "My check engine light was on for weeks and another shop couldn't figure it out. KARS diagnosed the problem in 30 minutes 
                    and had it fixed the same day. Great service!"
                  </p>
                  <p className="font-semibold text-gray-900">— Sarah Williams</p>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
                <Image 
                  src={reliableImage}
                  alt="Satisfied customer with repaired vehicle"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Get answers to common questions about our auto repair services and special promotions.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Fixed Right or Free FAQs */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                  <FaShieldAlt /> Fixed Right or It's Free Guarantee
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-blue-500" /> Does this apply to all repairs?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      Yes! Any repair we complete is covered for 30 days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-blue-500" /> What if it's a different issue?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      If it's a new problem, we'll diagnose it for free.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-blue-500" /> How do I claim my free re-repair?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      Just call us, and we'll get you scheduled ASAP—no hassle, no paperwork.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Free Diagnostic FAQs */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <FaTag /> Fast & Free Diagnostic
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-green-500" /> Is this really free?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      Yes, 100% free—no catch.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-green-500" /> Do I have to book a repair after the diagnostic?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      Nope! We'll give you our honest recommendation, and you decide.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-green-500" /> How long does it take?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      Most diagnostics take 15-20 minutes.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* First-Time Customer FAQs */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                  <FaUserPlus /> First-Time Customer VIP Deal
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-purple-500" /> Can I use this on an oil change?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      No, this deal applies to repairs over $200.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-purple-500" /> How do I claim my $50 discount?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      Just mention this promo when booking your appointment!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaQuestionCircle className="text-purple-500" /> Can I combine this with other offers?
                    </h4>
                    <p className="text-gray-700 mt-1 pl-6">
                      This deal can't be stacked with other promos, but we'll always give you the best price!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100 border-t border-orange-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-orange-100">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Your Vehicle Fixed?</h2>
                <p className="text-xl text-gray-700 mb-8">Our team of certified mechanics is ready to help you today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/auto-repair/booking">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                      Book an Appointment
                    </button>
                  </Link>
                  <Link href="/auto-repair/contact">
                    <button className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-lg font-medium transition-all">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 