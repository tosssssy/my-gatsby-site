import * as React from "react"
import { Layout } from "../components/layout"
import { graphql } from "gatsby"


const Lesson2 = ({data}) => {
  return(
  <Layout>
    <div>{data.site.siteMetadata.title}</div>
    <div>{data.site.siteMetadata.description}</div>
    <div>{data.site.siteMetadata.author}</div>
  </Layout>
);}

export default Lesson2

export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}
`
