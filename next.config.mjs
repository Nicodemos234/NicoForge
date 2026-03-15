/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/twitch",
        destination: "https://twitch.tv/ForjaDoNico",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@ForjaDoNico",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/Nicodemos234",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/ForjaDoNico",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: "https://www.tiktok.com/@ForjaDoNico",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
