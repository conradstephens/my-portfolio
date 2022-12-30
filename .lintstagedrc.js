module.exports = {
  "**/*": "prettier --write --ignore-unknown",
  "*.js": "eslint --cache --fix",
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.{js,css,md}": "prettier --write",
};
