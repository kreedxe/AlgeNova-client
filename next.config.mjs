/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use `NEXT_OUTPUT=export` only when you intentionally want a fully static export.
  // API route handlers (like `app/api/**`) require a running Next server.
  output: process.env.NEXT_OUTPUT === "export" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
