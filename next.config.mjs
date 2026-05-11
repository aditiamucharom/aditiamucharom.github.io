/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages hosting
  output: "export",
  // GitHub Pages serves user/organization sites (username.github.io) at root,
  // so no basePath is required here. If you later deploy to a project page
  // (e.g. github.com/<user>/<repo>), set basePath: "/<repo>".
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
