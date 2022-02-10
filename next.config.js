const withTM = require("next-transpile-modules")(["@mui/material", "@mui/system"])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["img.shields.io"],
  }
})
