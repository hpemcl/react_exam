// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tailwindui.com',
          pathname: '/img/ecommerce-images/**',
        },
      ],
    },
  };
  