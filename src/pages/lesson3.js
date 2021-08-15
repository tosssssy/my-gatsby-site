import * as React from "react"
import { Layout } from "../components/layout"
import { graphql } from "gatsby"


const Lesson3 = ({data}) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;
  return(
  <Layout>
    <div>{frontmatter.slug}</div>
    <div>{frontmatter.title}</div>
    <div dangerouslySetInnerHTML={{ __html: html }}/>
  </Layout>
);}

export default Lesson3

export const query = graphql`
query MdQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          date
          description
          ogpThumbnail
          slug
          title
          type
        }
        html
      }
    }
  }
}
`
