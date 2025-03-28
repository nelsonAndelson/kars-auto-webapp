"use client";

import { useState } from "react";
import { trackCustomEvent } from "@/lib/meta-pixel";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Call the hook unconditionally at the top level
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Track the service booking with Meta Pixel
      trackCustomEvent("ServiceBooking", {
        content_name: "Service Appointment",
        status: "booked",
        service_type: formData.service,
        appointment_date: formData.date
      });

      // Build a comprehensive message that includes contact info
      const detailedMessage = `
Service booking request: ${formData.service} on ${formData.date}
Contact: ${formData.email} | ${formData.phone}
Notes: ${formData.notes || 'No additional notes'}
      `.trim();

      // Prepare EmailJS template parameters
      // Using a structured approach with form_type to differentiate sources
      const templateParams = {
        form_type: "booking",
        to_name: "Kars Auto Service Team", // Recipient name for booking form
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        // Add booking-specific parameters
        booking_service: formData.service,
        booking_date: formData.date,
        booking_notes: formData.notes,
        // Include contact info in the message for backward compatibility
        message: detailedMessage,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_v6268tk', // Your service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      if (response.status === 200) {
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          notes: ""
        });
        
        // Show success message
        if (toast?.toast) {
          toast.toast({
            title: "Booking Successful!",
            description: "We'll confirm your appointment soon.",
            variant: "default",
          });
        } else {
          alert("Appointment booked successfully!");
        }
      } else {
        throw new Error("Failed to send booking request");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      if (toast?.toast) {
        toast.toast({
          title: "Booking Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      } else {
        alert("Error booking appointment. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Book Your Auto Repair Service
      </h1>
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
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
              value={formData.phone}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.service}
              onChange={handleInputChange}
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
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
              Additional Notes
            </label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Tell us more about your vehicle or the issue you're experiencing"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:bg-orange-300"
          >
            {isSubmitting ? "Submitting..." : "Book Appointment"}
          </button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            We&apos;ll confirm your appointment within 10 minutes during business hours.
          </p>
        </form>
      </div>
    </div>
  );
} 