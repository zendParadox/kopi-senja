/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...konfigurasi lain mungkin ada di sini
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pagedone.io",
        port: "",
        pathname: "/asset/uploads/**", // Mengizinkan semua gambar dari path ini
      },
    ],
  },
};

module.exports = nextConfig;
