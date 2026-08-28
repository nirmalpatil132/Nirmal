/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@nirmal/types', '@nirmal/validation', '@nirmal/config'],
};

export default nextConfig;
