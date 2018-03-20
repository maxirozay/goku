module.exports = () => ({
  plugins: {
    stylelint: {},
    'postcss-import': {},
    'postcss-cssnext': {},
    cssnano: { autoprefixer: false }
  }
})
