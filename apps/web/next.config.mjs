/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions ? '/Nirmal' : '');

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  transpilePackages: ['@nirmal/types', '@nirmal/validation', '@nirmal/config'],
};

export default nextConfig;
