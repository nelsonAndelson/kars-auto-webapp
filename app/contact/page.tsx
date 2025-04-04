"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { trackContact } from "@/lib/meta-pixel";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Track the contact form submission with Meta Pixel
      trackContact({
        content_name: "Contact Form",
        status: "submitted",
        contact_type: "general"
      });

      // Build a comprehensive message that includes contact info
      const detailedMessage = `
Contact message from: ${formData.name}
Contact: ${formData.email} | ${formData.phone}

Message:
${formData.message}
      `.trim();

      // Prepare EmailJS template parameters
      const templateParams = {
        form_type: "contact",
        to_name: "Kars Auto Team",
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        // Include formatted message with contact details
        message: detailedMessage
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_v6268tk',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      if (response.status === 200) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        
        // Show success message
        if (toast?.toast) {
          toast.toast({
            title: "Message Sent!",
            description: "We'll get back to you as soon as possible.",
            variant: "default",
          });
        } else {
          alert("Message sent successfully!");
        }
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (toast?.toast) {
        toast.toast({
          title: "Message Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      } else {
        alert("Error sending message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Contact <span className="text-orange-500">Us</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl max-w-2xl mx-auto">
              We&apos;re here to help. Reach out to us for any inquiries or to
              schedule your service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={fadeIn}>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="bg-gray-700 border-gray-600"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="bg-gray-700 border-gray-600"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                        className="bg-gray-700 border-gray-600"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        className="bg-gray-700 border-gray-600"
                        rows={4}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeIn} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  Feel free to reach out to us using any of the following
                  methods:
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <Link 
                      href="https://maps.google.com/?q=19100+Nottingham+Road+Cleveland+OH+44110"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-200 flex items-center gap-1"
                    >
                      <MapPin size={16} />
                      19100 Nottingham Road Cleveland OH 44110
                    </Link>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-300">Sales: (216) 304-1233</p>
                    <p className="text-gray-300">Service: (216) 372-0661</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">karsllcauto@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-300">EVERYDAY 9:00A - 5:00P</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.8675764613187!2d-81.55443492346976!3d41.45903789460284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830fc4f0e5c8b67%3A0x7c1f8c768341e6d3!2s19100%20Nottingham%20Rd%2C%20Cleveland%2C%20OH%2044110!5e0!3m2!1sen!2sus!4v1710799144070!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="KARS AUTO location map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
