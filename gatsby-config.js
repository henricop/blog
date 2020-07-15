// o siteMetaData reune informações do projeto para que seja reutilizado
// nas páginas e componentes
const config = require("./data/config");
module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription
  },
  plugins: [

    "gatsby-plugin-catch-links",
    // responsavel por transformar os posts escritos em markdown para html
    "gatsby-transformer-remark",
    // componente que permite  você controlar o head do site
    "gatsby-plugin-react-helmet",
    // da suporte para o site funcionar offline
    "gatsby-plugin-offline",
    // gera um sitemap automático no build
    "gatsby-plugin-sitemap",
    {
      //pega os dados dos arquivos do sistema
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url:'/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: "static/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html}],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {frontmatter: { draft: { ne: true } }}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "gatsby RSS Feed",
          },
        ],
      },
    },
  ]
}