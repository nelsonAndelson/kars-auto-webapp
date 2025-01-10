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
  DialogFooter,
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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CarType } from "@/types/types";
import { useState } from "react";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CarDetails({ car }: { car: CarType }) {
  const { toast } = useToast();
  // Calculate estimated monthly payment (simple calculation for display)
  const estimatedMonthly = Math.round((car.price || 0) / 60); // 60 months term

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[id as keyof ContactFormData]) {
      setFormErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);

      // Prepare email template data
      const templateParams = {
        from_name: validatedData.name,
        from_email: validatedData.email,
        from_phone: validatedData.phone,
        message: validatedData.message,
        car_details: `${car.year} ${car.make} ${car.model}`,
        car_vin: car.vin,
        car_stock: car.stockNumber,
        car_price: car.price ? `$${car.price.toLocaleString()}` : 'N/A',
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (response.status === 200) {
        // Clear form and show success message
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setIsSuccess(true);
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const errors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setFormErrors(errors);
        toast({
          variant: "destructive",
          title: "Form Error",
          description: "Please fix the form errors and try again."
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to send message. Please try again."
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    // Reset success state after dialog is closed
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  return (
    <motion.div variants={fadeIn} className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
          {car.make} {car.model} {car.year}
        </h1>
        <div className="flex items-center gap-4 mb-4">
          {car.price && (
            <>
              <Badge className="bg-orange-500 text-white text-lg px-4 py-1">
                ${car.price.toLocaleString()}
              </Badge>
              <span className="text-gray-400">
                Est. ${estimatedMonthly}/mo
              </span>
            </>
          )}
          {car.status && (
            <Badge className="bg-green-600 text-white">
              {car.status}
            </Badge>
          )}
        </div>
      </div>

      {/* Quick Specs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-800/50 rounded-lg">
        <div className="flex items-center gap-2">
          <Gauge className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-400">Mileage</p>
            <span className="uppercase">{car.mileage?.toLocaleString() || 'N/A'} MI</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Cog className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-400">Transmission</p>
            <span className="uppercase">{car.transmission || 'N/A'}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-400">Year</p>
            <span className="uppercase">{car.year || 'N/A'}</span>
          </div>
        </div>
      </div>

      {/* Key Vehicle Info */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-lg">
        <div>
          <p className="text-sm text-gray-400">Engine</p>
          <span className="uppercase">{car.engineSize || '2.5L'} {car.cylinders || 'I4'}</span>
        </div>
        <div>
          <p className="text-sm text-gray-400">Fuel Type</p>
          <span className="uppercase">{car.fuelType || 'Gasoline'}</span>
        </div>
        <div>
          <p className="text-sm text-gray-400">Drivetrain</p>
          <span className="uppercase">{car.drivetrain || 'FWD'}</span>
        </div>
        <div>
          <p className="text-sm text-gray-400">Fuel Economy</p>
          <span className="uppercase">{car.fuelEconomy || '25/32'} MPG</span>
        </div>
        <div>
          <p className="text-sm text-gray-400">Exterior Color</p>
          <span className="uppercase">{car.exteriorColor || 'N/A'}</span>
        </div>
        <div>
          <p className="text-sm text-gray-400">Interior Color</p>
          <span className="uppercase">{car.interiorColor || 'N/A'}</span>
        </div>
        <div>
          <p className="text-sm text-gray-400">Stock #</p>
          <span className="uppercase">{car.stockNumber || 'N/A'}</span>
        </div>
        <div>
          <p className="text-sm text-gray-400">VIN</p>
          <span className="uppercase">{car.vin || 'N/A'}</span>
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
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Button 
            className="w-full bg-gray-700 hover:bg-gray-600 py-6 text-lg"
            onClick={() => setIsDialogOpen(true)}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
          <DialogContent className="bg-gray-800 text-white">
            {!isSuccess ? (
              <>
                <DialogHeader>
                  <DialogTitle>Contact Us About This Vehicle</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Fill out the form below and we&apos;ll get back to you about
                    this {car.year} {car.make} {car.model}.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className={`pl-10 bg-gray-700 border-gray-600 ${
                          formErrors.name ? 'border-red-500' : ''
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="1234567890"
                        required
                        className={`pl-10 bg-gray-700 border-gray-600 ${
                          formErrors.phone ? 'border-red-500' : ''
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className={`pl-10 bg-gray-700 border-gray-600 ${
                          formErrors.email ? 'border-red-500' : ''
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..."
                        required
                        className={`pl-10 bg-gray-700 border-gray-600 ${
                          formErrors.message ? 'border-red-500' : ''
                        }`}
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                      )}
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </>
            ) : (
              <div className="py-6 text-center space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                    <p className="text-gray-400">
                      We've received your message and will get back to you shortly about the
                      {' '}{car.year} {car.make} {car.model}.
                    </p>
                  </div>
                </div>
                <DialogFooter className="flex flex-col gap-3 sm:gap-0">
                  <Link
                    href="/inventory"
                    className="w-full"
                    onClick={handleClose}
                  >
                    <Button className="w-full bg-gray-700 hover:bg-gray-600">
                      Browse More Vehicles
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link
                    href="https://secure.carsforsale.com/ssfinance.aspx?jesxel=726917"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="w-full"
                  >
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Apply for Financing
                      <DollarSign className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}
