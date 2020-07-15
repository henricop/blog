// nesse arquivo é feito uma consulta
// utilizando o GraphQL para pegarmos
// dados do blog que estão dentro de gatsby-config

import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import SEO from '../components/SEO/SEO';

// remove o estilo  padrão dos navegadores
import 'minireset.css';

export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO/>
        <Posts data={data}/>
      </Layout>
    )
  }
};


// o Gatsby pode consultar
// dados com page query ou com static query.
// A page query permite que as páginas consultem 
// dados, e a static query , que veio na segunda 
// versão do Gatsby permite que componentes que 
// não são páginas, como o Header, façam consultas
//  com GraphQL.
export const PageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title 
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;