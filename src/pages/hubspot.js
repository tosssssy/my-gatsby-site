import * as React from "react"
import { Layout } from "../components/layout"
import HubspotForm from "react-hubspot-form"
import {chakra} from "@chakra-ui/react"

const HubSpot = () => (
  <Layout>
    <chakra.div
    w={"50%"}
    >
      <HubspotForm
        portalId="8564937"
        formId="3c1d082b-da5f-4e86-9554-cd9b82470408"
      />
    </chakra.div>
  </Layout>
)

export default HubSpot