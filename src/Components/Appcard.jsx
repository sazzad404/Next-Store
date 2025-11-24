"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

export default function AppCard({ app }) {
  // Generate star rating display
  const totalStars = 5;
  const filledStars = Math.round(app.rating || 0);

  return (
    <Link href={`/apps/${app._id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="bg-[#131318] border border-[#1f1f28] rounded-2xl shadow-lg overflow-hidden flex flex-col"
      >
        {/* App Image */}
        <div className="relative w-full h-48">
          <Image
            src={app.image || "/default-app.png"}
            alt={app.title}
            fill
            className="object-cover"
          />
        </div>

        {/* App Info */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-semibold text-lg">{app.title}</h3>
            <p className="text-purple-400 text-sm">{app.companyName}</p>

            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(totalStars)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < filledStars ? "text-yellow-400" : "text-gray-700"
                  }`}
                />
              ))}
              <span className="text-gray-400 text-sm ml-2">
                {app.rating} ({app.reviews.toLocaleString()})
              </span>
            </div>

            {/* Short description */}
            <p className="mt-3 text-gray-400 text-sm line-clamp-3">
              {app.description}
            </p>
          </div>

          {/* Footer: downloads + size + install */}
          <div className="mt-4 flex justify-between items-center">
            <div className="text-gray-400 text-xs">
              <p>{(app.downloads / 1000000).toFixed(1)}M Downloads</p>
              <p>{app.size} MB</p>
            </div>

            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition">
              Install
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
