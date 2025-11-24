"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AllAppsList({ apps, itemsPerPage = 12 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(""); 
  const [sort, setSort] = useState(""); 

  if (!apps || !Array.isArray(apps)) {
    return <p className="text-center text-gray-400">No apps available</p>;
  }


  const filteredApps = useMemo(
    () =>
      apps.filter(
        (app) =>
          app.title.toLowerCase().includes(filter.toLowerCase()) ||
          app.companyName.toLowerCase().includes(filter.toLowerCase())
      ),
    [apps, filter]
  );


  const sortedApps = useMemo(() => {
    const copy = [...filteredApps];
    if (sort === "rating") return copy.sort((a, b) => b.ratingAvg - a.ratingAvg);
    if (sort === "downloads") return copy.sort((a, b) => b.downloads - a.downloads);
    if (sort === "title") return copy.sort((a, b) => a.title.localeCompare(b.title));
    return copy;
  }, [filteredApps, sort]);


  const totalPages = Math.ceil(sortedApps.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentApps = sortedApps.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Filter & Sort UI */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search apps..."
          className="px-4 py-2 rounded bg-gray-800 text-white w-full md:w-1/2"
          value={filter}
          onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
        />

        <select
          className="px-4 py-2 rounded bg-gray-800 text-white w-full md:w-1/2"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="rating">Rating (High to Low)</option>
          <option value="downloads">Downloads (High to Low)</option>
          <option value="title">Title (A-Z)</option>
        </select>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentApps.map((app) => (
          <Link key={app._id} href={`/apps/${app._id}`}>
            <motion.div
              className="bg-[#1e1e2e] rounded-xl p-4 shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-xl font-bold mt-4 text-cyan-400">{app.title}</h2>
              <p className="text-gray-400">{app.companyName}</p>
              <div className="flex items-center justify-between mt-2">
                <motion.span
                  className="text-yellow-400 font-semibold"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ⭐ {app.ratingAvg}
                </motion.span>
                <span className="text-gray-400 text-sm">
                  {(app.downloads / 1000000).toFixed(1)}M downloads
                </span>
              </div>
              <p className="mt-2 text-gray-300 text-sm line-clamp-3">{app.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center flex-wrap mt-8 gap-2">
        <motion.button
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition-colors"
          disabled={currentPage === 1}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </motion.button>

        {[...Array(totalPages)].map((_, idx) => (
          <motion.button
            key={idx}
            className={`px-4 py-2 rounded transition-colors ${
              currentPage === idx + 1
                ? "bg-cyan-400 text-black"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </motion.button>
        ))}

        <motion.button
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition-colors"
          disabled={currentPage === totalPages}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
}
