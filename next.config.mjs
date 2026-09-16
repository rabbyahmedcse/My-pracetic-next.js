/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
   //https://i.ibb.co.com/gLdb4f4K/mustafa.png
    //https://images.unsplash.com/photo-1789283170426-1d1305571e26
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/gLdb4f4K/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
