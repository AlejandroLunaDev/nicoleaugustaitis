/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'scontent.cdninstagram.com',
      'scontent-iad3-1.cdninstagram.com',
      'scontent-iad3-2.cdninstagram.com', 
      'instagram.fcgh10-1.fna.fbcdn.net',
      'scontent.fcgh10-1.fna.fbcdn.net',
      'video.cdninstagram.com',
      'scontent.xx.fbcdn.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
        pathname: '**',
      },
      {
        protocol: 'https', 
        hostname: '**.cdninstagram.com',
        pathname: '**',
      }
    ],
    unoptimized: true // Add this to handle expiring URLs
  },
};

export default nextConfig;