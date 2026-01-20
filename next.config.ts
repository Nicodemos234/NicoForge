import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/twitch",
        destination: "https://twitch.tv/NicoForge",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@Nico_Forge",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/Nicodemos234",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/nico_forge",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
