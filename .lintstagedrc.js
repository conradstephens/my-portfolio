module.exports = {
  "**src/*": "prettier --write --ignore-unknown",
  "src/*.js": "eslint --cache --fix",
  "**src/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.{js,css,md}": "prettier --write",
};
