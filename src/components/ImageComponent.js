import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import home_img from ".././images/home_img.png"

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query Image {
      file(relativePath: { eq: "home_img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img fluid={data.file.childImageSharp.fluid} alt="home" />
    </div>
  )
}
