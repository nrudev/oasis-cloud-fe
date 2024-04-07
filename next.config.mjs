/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "localhost"],
  },
  transpilePackages: ["jotai-devtools"],
};

export default nextConfig;
