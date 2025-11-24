"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({ title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-800 text-white rounded-xl p-8 shadow-xl hover:shadow-2xl"
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}
