"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/app/auth/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const { login, googleLogin } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      router.push("/"); // redirect home
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await googleLogin();
      toast.success("Logged in successfully!");
      router.push("/"); // redirect home
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-900 rounded-3xl p-10 shadow-2xl w-96 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
        <p className="text-gray-400 mb-8 text-center">Sign in to continue</p>

        {/* Google Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex items-center justify-center w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-colors mb-6 disabled:opacity-50"
        >
          <FcGoogle />
          <span className="ml-2">Sign in with Google</span>
        </motion.button>

        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-gray-700" />
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Email/Password Login Form */}
        <form onSubmit={handleEmailLogin} className="w-full flex flex-col gap-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-600 py-3 rounded-xl font-semibold transition-colors disabled:opacity-50"
          >
            {loading ? "Processing..." : "Sign In"}
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4">
          Don't have an account?{" "}
          <Link href="/Register" className="text-green-400 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
