/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // distDir: 'dist',
  // output: 'export',
  // experimental: {
  //   ppr: true,
  // },
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    })

    return config
  },

  // ...other config
}

export default nextConfig
