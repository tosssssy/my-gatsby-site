import * as React from "react"
import { Layout } from "../components/layout"
import { Input, Spinner } from "@chakra-ui/react"

const Lesson1 = () => (
  <Layout>
    <Input placeholder="Basic usage" />
    <Spinner />
  </Layout>
)

export default Lesson1
