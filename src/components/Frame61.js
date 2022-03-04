import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import useWindowSize from "../../hooks/useWindowSize"

function Frame61() {
  const { width } = useWindowSize()

  const data = useStaticQuery(graphql`
    query two {
      allFile(filter: { relativeDirectory: { eq: "set2" }, relativePath: {} }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="row d-flex justify-content-between align-items-center">
        {data.allFile.edges.map(({ node }, i) => (
          <div className="col-lg-2 col-md-12 col-sm-12 col-12 my-2">
            <div data-aos="zoom-in-up" data-aos-duration={`${750 * i}`}>
              <Img
                style={
                  width < 600
                    ? width < 500
                      ? { maxWidth: "130px" }
                      : { maxWidth: "161px" }
                    : { maxWidth: "200px" }
                }
                fluid={node.childImageSharp.fluid}
                alt={node.base}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Frame61
