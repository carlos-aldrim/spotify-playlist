/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    ANOTHER_VARIABLE: process.env.ANOTHER_VARIABLE
  },
}

module.exports = nextConfig
