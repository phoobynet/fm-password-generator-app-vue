module.exports = {
  './src/**/*.{css,scss,less,html,vue}': ['stylelint --fix'],
  './src/**/*.{js,ts,tsx,vue}': ['prettier --write', 'eslint --fix'],
}
