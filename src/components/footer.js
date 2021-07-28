import * as React from "react"

const Footer = () => (
  <footer className="w-300 h-50 bg-blue-200 text-2xl text-right pr-10">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">tossy</a>
  </footer>
)


export default Footer