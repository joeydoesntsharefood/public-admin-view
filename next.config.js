const withTM = require('next-transpile-modules')(['antd']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true }
}

module.exports = withTM({nextConfig})
