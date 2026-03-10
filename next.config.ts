import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/datenschutzerklaerung",
        destination: "/datenschutz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
