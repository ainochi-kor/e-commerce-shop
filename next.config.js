import {
  createVanillaExtractPlugin
} from '@vanilla-extract/next-plugin'

/** @type {import('next').NextConfig} */

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  transpilePackages: ["ui"],
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      "firebasestorage.googleapis.com"
    ]
  }
}

export default withVanillaExtract(nextConfig);
