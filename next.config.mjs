/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",                    // এটা সবচেয়ে জরুরি (static export)
  trailingSlash: true,                 // Firebase Hosting-এর জন্য দরকার
  images: {
    unoptimized: true,                 // এটা না দিলে build fail করবে (Firebase-এ Image Optimization চলে না)
    domains: [
      "i.ibb.co.com",
      "cdn.rareblocks.xyz", 
      "i.pravatar.cc"
    ],
  },
  reactCompiler: true,                 // চাইলে রাখতে পারো (Next.js 14+)
  // distDir: "out",                   // ডিফল্টই out, চাইলে লিখতে পারো
};

export default nextConfig; // default এর বদলে এভাবে export করো (Next.js 13+ এর সাথে কম্প্যাটিবল)