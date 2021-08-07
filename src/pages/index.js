import * as React from "react"
import { Layout } from "../components/layout"
import styled from "styled-components"
import HubspotForm from "react-hubspot-form"


const IndexPage = () => {
  return (
    <Layout>
      <SDiv>メイン</SDiv>
      {/*<SHb>*/}
      {/*  <HubspotForm*/}
      {/*    portalId="8564937"*/}
      {/*    formId="3c1d082b-da5f-4e86-9554-cd9b82470408"*/}
      {/*  /></SHb>*/}
    </Layout>
  )
}
export default IndexPage

const SDiv = styled.div`
  background-color: #b6782c;
`

const SHb = styled.div`
  width: 50%;
`
