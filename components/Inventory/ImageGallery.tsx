'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/framer/animations';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <motion.div variants={fadeIn} className="relative aspect-[16/10] w-full rounded-lg overflow-hidden">
        <Image
          src={images[activeImage] || '/placeholder.svg'}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover"
          quality={95}
        />
      </motion.div>

      <div className="grid grid-cols-4 gap-2 mt-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
              activeImage === index ? "border-orange-500" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`${alt} view ${index + 1}`}
              fill
              sizes="(max-width: 768px) 25vw, 15vw"
              className="object-cover hover:opacity-90 transition-opacity"
              quality={80}
            />
          </button>
        ))}
      </div>
    </>
  );
}