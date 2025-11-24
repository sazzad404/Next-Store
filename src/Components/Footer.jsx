"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FcDoughnutChart } from "react-icons/fc";

export default function PolishedFooter() {
  const footerLinks = [
    { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
    {
      title: "Products",
      links: ["Features", "Pricing", "Integrations", "API"],
    },
    { title: "Support", links: ["Docs", "Community", "FAQ", "Help Center"] },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  const socialIcons = ["facebook", "twitter", "instagram", "linkedin"];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white pt-20 pb-10 px-5 md:px-20"
    >
      {" "}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Logo & Description */}{" "}
        <div className="md:col-span-1 text-center md:text-left">
          {" "}
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            {" "}
            <FcDoughnutChart size={50} />{" "}
            <span className="text-2xl font-bold">NEXT STORE</span>{" "}
          </Link>{" "}
          <p className="text-gray-400 text-sm md:text-base">
            Creating amazing digital experiences with modern web design and
            technology.{" "}
          </p>
          ```
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 gap-5 text-xl">
            {socialIcons.map((icon) => (
              <motion.a
                key={icon}
                whileHover={{ scale: 1.3, color: "#facc15" }}
                transition={{ type: "spring", stiffness: 300 }}
                href="#"
                className="text-gray-400 hover:text-yellow-400"
              >
                <i className={`fab fa-${icon}`}></i>
              </motion.a>
            ))}
          </div>
        </div>
        {/* Footer Links */}
        {footerLinks.map((section) => (
          <div key={section.title} className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5, color: "#facc15" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-yellow-400"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Bottom Section */}
      <div className="mt-14 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm md:text-base">
        &copy; {new Date().getFullYear()} NEXT STORE. All rights reserved.
      </div>
    </motion.footer>
  );
}
