import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully prerendered static site — no server runtime needed on Vercel.
  output: "export",
  // The image optimizer requires a server; static export can't use it.
  images: { unoptimized: true },
  // Emit `about/index.html` rather than `about.html` so paths resolve
  // consistently on any static host.
  trailingSlash: true,

  // Hides the floating dev-only route indicator, which reads as a stray "N"
  // badge on the page during review. It never shipped in the production
  // build; this just keeps local review honest. Compile and runtime errors
  // are still surfaced.
  devIndicators: false,
};

export default nextConfig;
