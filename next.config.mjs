/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co.com", "cdn.rareblocks.xyz", "i.pravatar.cc"], // external domain allow
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
