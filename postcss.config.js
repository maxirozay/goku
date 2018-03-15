module.exports = () => ({
  plugins: {
    'postcss-import': {},
    stylelint: {},
    'postcss-cssnext': {},
    cssnano: { autoprefixer: false }
  }
})
