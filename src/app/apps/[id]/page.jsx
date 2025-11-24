"use client";

import { useAuth } from "@/app/auth/FirebaseAuthProvider";
import Loader from "@/Components/Loader";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppFeedback from "@/Components/AppFeedback";
import PrivateRoute from "@/Private/PrivateRoute";
import AppStatsChart from "@/Components/chart/AppStateChart";

export default function AppDetailsPage() {
  const { loading: authLoading } = useAuth();
  const params = useParams();
  const [app, setApp] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      setDataLoading(true);
      axios
        .get(`http://localhost:5000/apps/${params.id}`)
        .then((res) => setApp(res.data))
        .catch((err) => console.error(err))
        .finally(() => setDataLoading(false));
    }
  }, [params]);

  if (authLoading || dataLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-[#131318]">
        <Loader />
      </div>
    );
  }

  return (
    <PrivateRoute>
      <motion.div
        className="min-h-screen bg-[#131318] text-white px-4 py-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="flex flex-col md:flex-row gap-10 bg-[#1e1e2e] rounded-2xl shadow-xl p-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image */}
          <div className="relative w-full md:w-1/3 h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={app.image}
              alt={app.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* App Details */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
              {app.title}
            </h1>
            <p className="text-purple-400 text-lg">{app.companyName}</p>

            {/* Rating */}
            <div className="flex items-center gap-4 mt-2">
              <span className="text-yellow-400 font-semibold text-lg">
                ⭐ {app.ratingAvg} / 5
              </span>
              <span className="text-gray-400 text-lg">
                ({app.reviews?.toLocaleString()} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-justify leading-relaxed">
              {app.description}
            </p>

            {/* Action & Downloads */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
              >
                Install
              </motion.button>
              <span className="text-gray-400 text-lg">
                {(app.downloads / 1000000).toFixed(1)}M Downloads
              </span>
            </div>

            {/* Ratings Breakdown */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Ratings Breakdown</h2>
              {app.ratings?.map((rate, index) => (
                <div key={index} className="flex items-center gap-3 mb-2">
                  <span className="w-24 text-gray-400">{rate.name}</span>
                  <div className="bg-gray-700 h-4 flex-1 rounded-full overflow-hidden">
                    <div
                      className="bg-yellow-400 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${(rate.count / 10200) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-14 text-right text-gray-400">
                    {rate.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Ratings Breakdown */}
        <AppStatsChart ratings={app.ratings} downloads={app.downloads} />
        <AppFeedback></AppFeedback>
      </motion.div>
    </PrivateRoute>
  );
}
