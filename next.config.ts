import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kglquljfoggmpl4k.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
