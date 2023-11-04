/** @type {import('next').NextConfig} */
// next.config.js

module.exports = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization
  },
  distDir: "./docs",
};
