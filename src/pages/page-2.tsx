// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }: { location: Location }) => {
  console.log("Render page component")
  return (
    <a href={`https://google.com${location.search ?? ""}`}>
      Link to site {location.search}
    </a>
  )
}

export default SecondPage
