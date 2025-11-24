"use client";

import { motion } from "framer-motion";
import {
  IconApps,
  IconRocket,
  IconShield,
  IconStars,
  IconWorld,
  IconDownload,
} from "@tabler/icons-react";

export default function FeatureDark() {
  const features = [
    {
      icon: <IconApps size={48} stroke={1.5} />,
      title: "Curated App Collection",
      desc: "Hand-picked apps with top performance and quality.",
    },
    {
      icon: <IconRocket size={48} stroke={1.5} />,
      title: "Ultra Fast Performance",
      desc: "Optimized loading and smooth experience.",
    },
    {
      icon: <IconShield size={48} stroke={1.5} />,
      title: "Secure & Safe",
      desc: "Every app is verified and protected.",
    },
    {
      icon: <IconWorld size={48} stroke={1.5} />,
      title: "Available Worldwide",
      desc: "Users can access apps from anywhere.",
    },
    {
      icon: <IconStars size={48} stroke={1.5} />,
      title: "Top Rated Developers",
      desc: "Premium apps from trusted creators.",
    },
    {
      icon: <IconDownload size={48} stroke={1.5} />,
      title: "One-Click Install",
      desc: "Install apps instantly with one tap.",
    },
  ];

  return (
    <section className="py-20 bg-[#0b0b0e] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            Powerful Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Built for a smooth, fast and stylish app experience.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="
                bg-[#131318] 
                border border-[#1f1f28] 
                rounded-2xl 
                p-8 
                group 
                shadow-[0_0_20px_-5px_rgba(0,0,0,0.7)]
                hover:shadow-[0_0_25px_5px_rgba(140,50,250,0.25)]
                transition-all duration-300 text-center
              "
            >
              <div className="flex justify-center mb-6 text-purple-400 group-hover:text-purple-300 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-400 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
