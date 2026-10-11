import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The brief PDF reads its fonts and pictures from disk at request time.
  outputFileTracingIncludes: {
    "/api/brief": ["./pdf-assets/**/*"],
    "/api/brief/pdf": ["./pdf-assets/**/*"],
  },
};

export default nextConfig;
