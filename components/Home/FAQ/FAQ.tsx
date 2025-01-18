"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaPlus, FaMinus, FaQuestionCircle, FaDollarSign } from "react-icons/fa";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

const questions = [
  {
    question: "What is the Satisfaction Guarantee with Repairs, and what does it cover?",
    answer:
      "If any mechanical issues arise in the first 14 days or 500 miles, we’ll cover up to $500 in repairs. This includes major mechanical problems like engine or transmission issues, but not normal wear-and-tear items like brakes or tires. Just call us within the window, and our trusted mechanic will handle the repairs.",
  },
  {
    question: "How do I claim my free oil changes, and can they be transferred?",
    answer:
      "Schedule your oil changes with us, and we’ll take care of up to 4 changes within the first 12 months. This offer applies only to the car you purchased and cannot be transferred.",
  },
  {
    question: "What is included in the 30-day warranty, and how does VSC and GAP insurance work?",
    answer:
      "Our 30-day warranty covers major mechanical problems. When you finance, VSC and GAP insurance are included at no extra cost, providing extended protection for your car and covering the difference if it’s ever totaled.",
  },
  {
    question: "What does the certified inspection include, and can I see the report?",
    answer:
      "Our trusted mechanic checks all major systems like brakes, tires, engine, and transmission. We’re happy to show you the inspection report before you buy.",
  },
  {
    question: "What’s included in the maintenance discount, and can it be combined with other offers?",
    answer:
      "After your first year, enjoy 15% off all labor costs for services at our dealership for the next 6 months. This discount cannot be combined with other promotions.",
  },
  {
    question: "How much do I need to put down, and can I apply for financing online?",
    answer:
      "Drive home with as little as $1,000 down. Apply online quickly and easily. We work with all credit types to find a plan that fits your situation.",
  },
  {
    question: "Are there any hidden fees, and how can I contact you?",
    answer:
      "We believe in transparency and will explain all fees upfront. Call or text Nelson at 2163041233, or send us a message anytime.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-24" id="faqs">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <FaQuestionCircle className="w-12 h-12 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get quick answers to your car buying questions
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div variants={staggerContainer} className="space-y-4">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-orange-500 flex-shrink-0 ml-4"
                  >
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={fadeIn} className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Drive Home Happy?
            </h3>
            <p className="text-gray-600 mb-6">
              Get approved in minutes - it&apos;s quick and easy!
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8"
            >
              <Link href="/pre-approval" className="flex items-center gap-2">
                <FaDollarSign className="w-4 h-4" />
                Get Pre-Approved Now
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
