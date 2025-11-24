"use client";

import { useEffect, useState } from "react";
import HeroBanner from "@/Components/HeroBanner";
import Feature from "@/Components/Feature";
import AppCard from "@/Components/Appcard";
import Investors from "@/Components/Investors";
import Link from "next/link";

export default function Home() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hero-store-server.vercel.app/apps?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0f]">
      <HeroBanner />
      <Feature />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Popular Apps
        </h2>

        {loading ? (
          <p className="text-gray-400">Loading apps...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {apps.map((app) => (
              <AppCard key={app._id} app={app} />
            ))}
          </div>
        )}
      </section>
      <div className="flex justify-center pb-8">
        <Link
          href={"/allApps"}
          className=" px-4 py-2 bg-purple-600 cursor-pointer hover:bg-purple-700 text-white rounded-lg text-sm transition"
        >
          Discover more apps
        </Link>
      </div>
      <Investors></Investors>
    </div>
  );
}
