"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/app/auth/FirebaseAuthProvider";

export default function FeedbackCarousel() {
  const { user } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  const dummyFeedbacks = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "https://i.pravatar.cc/150?u=alice",
      message: "Amazing app! Really helped me improve productivity.",
      rating: 5,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "https://i.pravatar.cc/150?u=bob",
      message: "Nice design, but could use some performance improvements.",
      rating: 4,
    },
    {
      id: 3,
      name: "Charlie Davis",
      email: "charlie@example.com",
      avatar: "https://i.pravatar.cc/150?u=charlie",
      message: "Great app, easy to use and very intuitive!",
      rating: 5,
    },
  ];

  // Load feedbacks from localStorage or dummy
  useEffect(() => {
    setHydrated(true);
    const stored = localStorage.getItem("app_feedbacks");
    if (stored) {
      setFeedbacks(JSON.parse(stored));
    } else {
      setFeedbacks(dummyFeedbacks);
      localStorage.setItem("app_feedbacks", JSON.stringify(dummyFeedbacks));
    }
  }, [dummyFeedbacks]);

  // Save feedbacks whenever updated
  useEffect(() => {
    if (hydrated) localStorage.setItem("app_feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks, hydrated]);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const addFeedback = (e) => {
    e.preventDefault();
    if (!user || !message) return;

    const newFeedback = {
      id: Date.now(),
      name: user.displayName || user.email,
      email: user.email,
      avatar: user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`,
      message,
      rating,
    };

    setFeedbacks((prev) => [newFeedback, ...prev]);
    setMessage("");
    setRating(5);
    setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  if (!hydrated) return null;

  return (
    <div className="bg-[#0b0b0e]  py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">User Feedback</h2>

      <div className="relative flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-gray-800/50 hover:bg-gray-700/60 text-white rounded-full p-2"
        >
          ‹
        </button>

        <div className="flex items-center justify-center w-full overflow-hidden relative h-64 md:h-72">
          {feedbacks.map((fb, index) => {
            let position = "nextSlide";
            if (index === currentIndex) position = "activeSlide";
            if (index === (currentIndex - 1 + feedbacks.length) % feedbacks.length) position = "prevSlide";

            const isActive = position === "activeSlide";
            const isPrevOrNext = position !== "activeSlide";

            return (
              <motion.div
                key={fb.id}
                className={`absolute top-0 w-4/5 md:w-3/5 p-6 rounded-3xl shadow-lg flex flex-col md:flex-row gap-4 bg-[#1e1e2e] ${
                  isActive ? "z-20" : "z-10"
                }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  x: isActive ? 0 : isPrevOrNext ? (position === "prevSlide" ? -200 : 200) : 0,
                  scale: isActive ? 1 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <img
                  src={fb.avatar}
                  alt={fb.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-cyan-400">{fb.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < fb.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300">{fb.message}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-gray-800/50 hover:bg-gray-700/60 text-white rounded-full p-2"
        >
          ›
        </button>
      </div>

      {/* Feedback Form */}
      {user && (
        <motion.form
          onSubmit={addFeedback}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-[#1e1e2e] rounded-2xl p-6 shadow-lg flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold text-cyan-400">Add Your Feedback</h3>

          <textarea
            placeholder="Write your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none resize-none h-24"
          />

          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-semibold">Rating:</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setRating(i + 1)}
                className={`text-2xl ${i < rating ? "text-yellow-400" : "text-gray-500"}`}
              >
                ★
              </button>
            ))}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-400 text-black font-semibold py-3 rounded-lg mt-2"
          >
            Submit Feedback
          </motion.button>
        </motion.form>
      )}
    </div>
  );
}
