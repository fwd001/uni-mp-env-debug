const path = require('path')

const plugins = [
  require('postcss-import')({
    resolve(id, basedir, importOptions) {
      if (id.startsWith('~@/')) {
        return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
      } else if (id.startsWith('@/')) {
        return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
      } else if (id.startsWith('/') && !id.startsWith('//')) {
        return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
      }
      return id
    },
  }),
  require('autoprefixer')({
    remove: process.env.UNI_PLATFORM !== 'h5',
  }),
  require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
]

if (process.env.UNIT === 'rpx') {
  const postcss = require('postcss')
  const px2RpxPlugin = postcss.plugin('px2rpx', (opts = {}) => {
    const { proportion = 2 } = opts
    const pxRegExp = /\b(\d+(\.\d+)?)px\b/g

    return (root) => {
      root.replaceValues(pxRegExp, { fast: 'px' }, string => {
        return `${ proportion * parseInt(string) }rpx`
      })
    }
  })
  plugins.unshift(px2RpxPlugin())
}

module.exports = {
  parser: require('postcss-comment'),
  plugins,
}
