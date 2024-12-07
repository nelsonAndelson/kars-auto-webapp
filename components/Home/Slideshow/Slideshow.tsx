"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slide } from "@/types/types";
import Image from "next/image";

import serviceImage from "@/app/images/service.jpg";
import buyingCarImage from "@/app/images/buying-car.png";
import reliableImage from "@/app/images/reliable.jpg";
import Link from "next/link";

const slides: Slide[] = [
  {
    title: "EASY BUYING",
    subtitle: "Fast, simple process. Dri  ve away hassle-free today!",
    buttonText: "VIEW INVENTORY",
    link: "#",
    image: buyingCarImage, // Replace with your image path
  },
  {
    title: "RELIABLE CARS",
    subtitle: "We only sell reliable cars.",
    buttonText: "VIEW INVENTORY",
    link: "#",
    image: reliableImage, // Replace with your image path
  },
  {
    title: "EXPERT REPAIR",
    subtitle: "Keep your vehicle in top condition.",
    buttonText: "CALL US TODAY ON 216-304-1233",
    link: "tel:+12163041233",
    image: serviceImage, // Replace with your image path
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" max-h-[500px] h-auto overflow-hidden text-center ">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-auto max-h-[500px]"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
            >
              {slides[currentSlide].title.split(" ").map((word, index) => (
                <span key={index} className={index === 1 ? "text-primary" : ""}>
                  {word}{" "}
                </span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl mb-4"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="outline"
                className="bg-primary text-black hover:bg-yellow-600"
              >
                <Link href={slides[currentSlide].link}> 
                  {slides[currentSlide].buttonText}
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
