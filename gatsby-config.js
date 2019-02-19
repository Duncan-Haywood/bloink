module.exports = {
    siteMetadata: {
      title: `I like Google fonts`
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Comfortaa`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ]
        }
      },
      `gatsby-plugin-sass`
    ]
  }