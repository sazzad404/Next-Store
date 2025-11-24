"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AppStatsChart({ ratings, downloads }) {
  // Transform rating data to chart-friendly format
  const ratingData = ratings?.map((rate) => ({
    name: rate.name,
    count: rate.count,
  })) || [];

  // Downloads can be shown as another chart if needed
  const downloadData = [
    { name: "Downloads", count: downloads || 0 },
  ];

  return (
    <div className="mt-10 bg-[#1e1e2e] p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">App Stats</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Rating Breakdown */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-300 mb-2">Ratings Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ratingData} layout="vertical" margin={{ top: 5, bottom: 5, left: 20, right: 20 }}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" tick={{ fill: '#fff' }} width={80} />
              <Tooltip contentStyle={{ backgroundColor: '#1e1e2e', border: 'none' }} itemStyle={{ color: '#fff' }} />
              <Bar dataKey="count" fill="#FACC15" barSize={20} radius={[5, 5, 5, 5]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Downloads */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-300 mb-2">Downloads</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={downloadData} margin={{ top: 5, bottom: 5, left: 20, right: 20 }}>
              <XAxis dataKey="name" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1e1e2e', border: 'none' }} itemStyle={{ color: '#fff' }} />
              <Bar dataKey="count" fill="#3B82F6" barSize={30} radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
