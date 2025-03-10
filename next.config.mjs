/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
        },
      ],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Frame-Options',
              value: '"ALLOW-FROM https://app.contentful.com"',
            },
            {
              key: 'Content-Security-Policy',
              value: `frame-ancestors 'self' https://app.contentful.com`,
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
