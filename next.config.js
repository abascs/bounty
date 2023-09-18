/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  experimental: {
    serverActions: true,
  },
    images: {
        
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },{
          protocol: 'https',
          hostname: 'i.dummyjson.com',
        },{
          protocol: 'https',
          hostname: 'static.independent.co.uk',
        }
        ,{
          protocol: 'https',
          hostname: 'fakestoreapi.com',
        }
      ],
    },
  }
