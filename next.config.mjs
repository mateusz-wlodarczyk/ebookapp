export default {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/en/home",
        permanent: true,
      },
    ];
  },
};
