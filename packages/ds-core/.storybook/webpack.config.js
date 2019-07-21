// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom loaders.
      {
        test: /\.scss$/,
        // include: paths.appSrc,
        loaders: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9" // React doesn't support IE8 anyway
                  ]
                })
              ]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        loader: "style!css?importLoaders=1!postcss"
      }
    ]
  }
};
