import * as React from "react"
import { Layout } from "../components/layout"
import { graphql } from "gatsby"


const Lesson3 = ({ data }) => {

  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      {edges.map((edge, index) => {
        return (
          <>
            <div key={index}>
              {/*<div>{edge.node.frontmatter.slug}</div>*/}
              <div>{edge.node.frontmatter.title}</div>
              <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            </div>
          </>
        )
      })}
    </Layout>
  )
}

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
          title
          type
        }
        html
      }
    }
  }
}
`
