import * as React from "react"
import { Layout } from "../components/layout"
import { graphql } from "gatsby"
import { NewsCard } from "../components/NewsCard"
import { VStack } from "@chakra-ui/react"


const Lesson3 = ({ data }) => {

  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <VStack>
      {edges.map((edge, index) => {
        return (
          <NewsCard key={index} title={edge.node.frontmatter.title} date={edge.node.frontmatter.date}/>
        )
      })}
      </VStack>
    </Layout>
  )
}

export default Lesson3

export const query = graphql`
query NewsQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          date
          title
          type
        }
        html
      }
    }
  }
}
`
