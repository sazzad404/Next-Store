"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HeroBanner() {
  const images = [
    "https://i.ibb.co.com/MyKJ7LV1/pngtree-d-rendering-of-a-3d-android-phone-with-app-icons-on-image-2604005.jpg",
    "https://i.ibb.co.com/TB6pY612/Pjt-V34z1cw-UVWHwv7-Eq1y-Jz-Nglt41l-A15-Rel-He-UXp-R0.jpg",
    "https://i.ibb.co.com/xSGDxtf4/pngtree-illustration-of-app-icons-in-a-shopping-basket-representing-the-concept-image-3838037.jpg",
    "https://i.ibb.co.com/7PwQnpD/og-c59t0pflacq6.png",
    "https://i.ibb.co.com/PZRVYygz/1736925834-1478x1100.webp",
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Banner Image"
              fill
              className=" object-cover   brightness-75"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white max-w-3xl px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl md:text-7xl font-extrabold leading-tight drop-shadow-xl"
        >
          Discover Apps That
          <span className="text-purple-500"> Transform Your Life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow-lg"
        >
          Smart, fast & beautifully engineered applications — built for the
          future.
        </motion.p>

        <Link href={"/allApps"}>
          <motion.button
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            className="mt-6 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xl rounded-lg shadow-xl"
          >
            Explore Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
