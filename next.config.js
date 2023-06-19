/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: [
    '@mui/system',
    '@mui/material',
    '@mui/icons-material',
    '@emotion/react',
    '@emotion/styled',
    '@emailjs/browser',
    'styled-components',
  ],
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
    '@mui/icons-material/?(((\\w*)?/?)*)': {
      transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}',
    },
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};
module.exports = nextConfig;
