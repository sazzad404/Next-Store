"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/app/auth/FirebaseAuthProvider";
import { FaUser } from "react-icons/fa";
import { FcDoughnutChart } from "react-icons/fc";
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const avatarUrl = user?.photoURL ? user.photoURL : null;

  return (
    <div className="navbar items-center bg-base-100 shadow-sm ">
      {/* Logo */}
         {/* Mobile menu toggle */}
      <button
        className="lg:hidden -ml-4 btn items-center btn-ghost"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <FiAlignJustify className="p-0" size={28} />
      </button>
      <div className="navbar-start flex items-center  -ml-2 lg:ml-0 ">
        <Link
          href="/"
          className="font-bold text-xl flex items-center gap-1"
        >
          <FcDoughnutChart size={30} /> NEXT STORE
        </Link>

     
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          
            <li>
              <Link href="/allApps">Apps</Link>
            </li>
          
        </ul>
      </div>

      {/* Navbar end (user profile/login) */}
      <div className="navbar-end relative flex items-center">
        {!user ? (
          <Link
            href="/Login"
            className="btn bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2 px-5 rounded-xl shadow-lg transform transition-transform hover:scale-105"
          >
            Login
          </Link>
        ) : (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2 border-blue-800 overflow-hidden">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="User Avatar" />
                ) : (
                  <FaUser className="w-full h-full p-1 text-gray-400" />
                )}
              </div>
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-blue-800  text-white rounded-lg shadow-lg z-50">
                <li className="px-4 py-2 border-b border-black">
                  {user.displayName || user.email}
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="w-full cursor-pointer hover:bg-blue-950 text-left px-4 py-2 bg-blue-800 rounded-b-lg"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 text-white shadow-md z-40">
          <ul className="flex flex-col p-2">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-gray-700 rounded"
                href="/allApps"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apps
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
