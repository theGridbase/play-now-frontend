const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    inncludePaths: [path.join(__dirname, "app/styles")],
  },
};
// q
module.exports = nextConfig;