import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn2.thecatapi.com' }],
  },
};

export default config;
