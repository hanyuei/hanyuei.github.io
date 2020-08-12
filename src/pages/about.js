import React from "react"
import Layout from "../components/Layout"

export default function About({ data, location }) {
  return (
    <Layout location={location} title={`About Hanyuei`}>
      <div>
        <h1>About me</h1>
        <p>something about me.</p>
      </div>
    </Layout>
  )
}
