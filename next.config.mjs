/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",                   
  trailingSlash: true,                 
  images: {
    unoptimized: true,                
    domains: [
      "i.ibb.co.com",
      "cdn.rareblocks.xyz", 
      "i.pravatar.cc"
    ],
  },
  reactCompiler: true,                
  // distDir: "out",                   
};

export default nextConfig; 