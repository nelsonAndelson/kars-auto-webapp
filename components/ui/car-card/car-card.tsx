"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Phone, Calendar, Fuel, Gauge, Cog, Info, MessageSquare, DollarSign, User, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { CarCardProps } from "@/types/types";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const CarCard = ({
  _id,
  make,
  model,
  year,
  price,
  mileage,
  transmission,
  fuelType = "Gasoline",
  engineSize = "2.0L",
  image,
  featured = false,
}: CarCardProps) => {
  const { toast } = useToast();
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
        car_details: `${year} ${make} ${model}`,
        car_price: price ? `$${price.toLocaleString()}` : 'N/A',
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
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
      >
        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group cursor-pointer">
          {/* Image Container */}
          <Link href={`/inventory/${_id}`}>
            <div className="relative">
              <div className="relative h-48 md:h-64 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={`${year} ${make} ${model}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={100}
                  loading="eager"
                  className="group-hover:scale-110 transition-transform duration-300 object-cover w-full h-full"
                />
                {featured && (
                  <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                    Featured
                  </Badge>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>
          </Link>

          {/* Content */}
          <CardContent className="relative p-6">
            {/* Title and Price */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1 uppercase">
                  {make} {model}
                </h3>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">{year}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-500">
                  ${price.toLocaleString()}
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Info className="w-3 h-3" />
                        <span>Est. $150/mo</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Estimated monthly payment with 20% down for 72 months at
                        4.9% APR
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{mileage.toLocaleString()} mi</span>
              </div>
              <div className="flex items-center gap-2">
                <Cog className="w-4 h-4 text-gray-400" />
                <span className="text-sm capitalize">{transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel className="w-4 h-4 text-gray-400" />
                <span className="text-sm capitalize">{fuelType}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 text-gray-400"
                >
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M5 17H3v-6l2-5h12l2 5v6h-2m-4 0h-4" />
                </svg>
                <span className="text-sm capitalize">{engineSize}</span>
              </div>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="p-6 pt-0 grid grid-cols-2 gap-4">
            <Link
              href="https://secure.carsforsale.com/ssfinance.aspx?jesxel=726917"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-2">
                <DollarSign className="w-4 h-4" />
                Get Pre-Approved
              </Button>
            </Link>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 text-white">
                {!isSuccess ? (
                  <>
                    <DialogHeader>
                      <DialogTitle>Contact Us About This Vehicle</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Fill out the form below and we&apos;ll get back to you about
                        this {year} {make} {model}.
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
                          {' '}{year} {make} {model}.
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
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default CarCard;

// Example usage
// export default function ExampleCarCard() {
//   return (
//     <div className="p-4 max-w-sm mx-auto">
//       <CarCard
//         make="KIA"
//         model="RIO"
//         year={2012}
//         price={3499}
//         mileage={138000}
//         transmission="automatic"
//         image="/placeholder.svg?height=300&width=400"
//         featured={true}
//       />
//     </div>
//   );
// }
