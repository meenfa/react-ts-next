import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: process.cwd(),
  },
  images:{
    domains:["images.unsplash.com"]
  }
};

export default nextConfig;
