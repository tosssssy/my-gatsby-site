import * as React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import tw, { styled } from "twin.macro"

const Button  = styled.button`
${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}`

const ThirdPage = () => (
    <Layout>
        <Seo title="Page three"/>
        <h1 tw>Hi from the 3 page</h1>
        <p>success</p>
        <Link to="/">Go back to the homepage</Link>
      <Button>activate</Button>
        <div>
            <Link to="/page-2">Go to the second page</Link>
        </div>

    </Layout>
)

export default ThirdPage