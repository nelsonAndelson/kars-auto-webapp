"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import serviceImage from '@/app/images/service.jpg';
import { Shield, Cpu, User } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AutoRepair = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn} 
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Professional <span className="text-orange-500">Auto Repair</span> Services
              </h2>
              <p className="text-gray-300 text-lg">
                Our certified technicians provide comprehensive repair services to keep your 
                vehicle running smoothly. From routine maintenance to complex repairs, 
                we handle it all with precision and care.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Engine Diagnostics & Repair
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Brake System Service
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Transmission Repair
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Oil Changes & Maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Electrical System Diagnostics
                </li>
              </ul>
            </div>

            <div className="space-y-5 pt-4 border-t border-gray-700">
              <h3 className="text-2xl font-bold text-white">Special Repair <span className="text-orange-500">Promotions</span></h3>
              
              {/* Promo 1 */}
              <div className="space-y-1">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-400 mr-2" />
                  <h4 className="text-lg font-semibold text-blue-400">Fixed Right or It&apos;s Free</h4>
                  <span className="ml-auto text-sm font-bold bg-orange-500 text-white rounded-full px-3 py-0.5">GUARANTEE</span>
                </div>
                <p className="text-gray-300">Never pay twice for the same repair – 100% satisfaction guarantee for 30 days.</p>
              </div>
              
              {/* Promo 2 */}
              <div className="space-y-1">
                <div className="flex items-center">
                  <Cpu className="w-5 h-5 text-green-400 mr-2" />
                  <h4 className="text-lg font-semibold text-green-400">Fast & Free Diagnostic</h4>
                  <span className="ml-auto text-sm font-bold bg-green-500 text-white rounded-full px-3 py-0.5">FREE</span>
                </div>
                <p className="text-gray-300">15-minute diagnostic at no cost, plus get $20 off your service.</p>
              </div>
              
              {/* Promo 3 */}
              <div className="space-y-1">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-purple-400 mr-2" />
                  <h4 className="text-lg font-semibold text-purple-400">First-Time Customer VIP Deal</h4>
                  <span className="ml-auto text-sm font-bold bg-purple-500 text-white rounded-full px-3 py-0.5">$50 OFF</span>
                </div>
                <p className="text-gray-300">$50 off your first repair over $200 + free tire pressure & fluid top-up.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/auto-repair">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Get Auto Repair Services
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn} 
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src={serviceImage}
              alt="Auto repair service"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutoRepair; 