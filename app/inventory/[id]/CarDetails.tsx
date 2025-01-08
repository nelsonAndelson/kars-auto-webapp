"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Gauge,
  Cog,
  DollarSign,
  Phone,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CarType } from "@/types/types";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CarDetails({ car }: { car: CarType }) {
  return (
    <motion.div variants={fadeIn} className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
          {car.make} {car.model} {car.year}
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <Badge className="bg-orange-500 text-white text-lg px-4 py-1">
            ${car.price.toLocaleString()}
          </Badge>
          <span className="text-gray-400">
            Est. ${Math.round(car.price / 24)}/mo
          </span>
        </div>
      </div>

      {/* Quick Specs */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Gauge className="w-5 h-5 text-gray-400" />
          <span className="uppercase">{car.mileage.toLocaleString()} MI</span>
        </div>
        <div className="flex items-center gap-2">
          <Cog className="w-5 h-5 text-gray-400" />
          <span className="uppercase">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="uppercase">{car.year}</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-4">
        <Link
          href="https://secure.carsforsale.com/ssfinance.aspx?jesxel=726917"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Button className="w-full bg-orange-500 hover:bg-orange-600 py-6 text-lg">
            <DollarSign className="w-5 h-5 mr-2" />
            Apply for Financing
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gray-700 hover:bg-gray-600 py-6 text-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Contact Us About This Vehicle</DialogTitle>
              <DialogDescription className="text-gray-400">
                Fill out the form below and we&apos;ll get back to you about
                this {car.year} {car.make} {car.model}.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="pl-10 bg-gray-700 border-gray-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    required
                    className="pl-10 bg-gray-700 border-gray-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10 bg-gray-700 border-gray-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    className="pl-10 bg-gray-700 border-gray-600"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}
