"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaPlus, FaMinus, FaQuestionCircle, FaPhoneAlt } from "react-icons/fa";
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
    question: "What do I need to bring with me?",
    answer:
      "Just bring your valid driver's license! We've simplified the process to make it as easy as possible for you.",
  },
  {
    question: "How much money down do I need?",
    answer:
      "We make it simple with flexible down payment options starting at just $1,000. Most of our customers drive home their dream car the same day!",
  },
  {
    question: "What will my monthly payment be?",
    answer:
      "We work with multiple lenders to find you the most competitive rates and comfortable monthly payments. Call us for a quick, personalized quote that fits your budget.",
  },
  {
    question: "Do I make enough money to get approved?",
    answer:
      "Good news! We work with various income levels and have helped countless customers get approved. Give us a call to discuss your options.",
  },
  {
    question: "Can I get approved with bad credit?",
    answer:
      "Absolutely! We specialize in making car buying easy for everyone, regardless of credit history. Our proven process helps customers with all credit situations drive home happy.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're conveniently located at 4364 W 130TH ST, CLEVELAND, OH 44135. We're open Monday through Saturday from 9:00 AM to 5:00 PM.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-24">
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
              Get approved in minutes - it's quick and easy!
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8"
            >
              <Link href="tel:+12163041233" className="flex items-center gap-2">
                <FaPhoneAlt className="w-4 h-4" />
                Get Approved Now
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
