const config = {
  images: {
      unoptimized: true,
  }
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withMDX]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...config })
}