/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    URL: process.env.URL,
    ANOTHER_VARIABLE: process.env.ANOTHER_VARIABLE
  },
}

module.exports = nextConfig
