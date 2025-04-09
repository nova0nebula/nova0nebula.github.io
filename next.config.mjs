/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export for GitHub Pages
  // For GitHub Pages, if your repo is username.github.io, you don't need basePath
  // If your repo is username.github.io/repo-name, uncomment and set the following:
  // basePath: '/repo-name',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
