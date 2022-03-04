import React from "react"
import useWindowSize from "../../hooks/useWindowSize"

function Frame6({ data }) {
  const { width } = useWindowSize()
  // const data = useStaticQuery(graphql`
  //   query one {
  //     allFile(filter: { relativeDirectory: { eq: "set1" }, relativePath: {} }) {
  //       edges {
  //         node {
  //           base
  //           childImageSharp {
  //             fluid {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div
        className={width < 992 ? "row" : "row d-flex justify-content-between"}
      >
        {data.map((item, i) => (
          <div
            className="col-lg-2 col-md-12 col-sm-12 col-12 my-2"
            data-aos="zoom-in"
            data-aos-duration={`${1000 * i}`}
          >
            <div style={{ maxWidth: "200px" }}>
              <a href={item.link} target="_blank">
                <img
                  width={width < 1200 ? 150 : width < 1930 ? 190 : 220}
                  src={item.src}
                  alt={item.name}
                  placeholder="blurred"
                  layout="fixed"
                />
              </a>
            </div>
          </div>
        ))}
        {/* {data.allFile.edges.map(({ node }, i) => (
          <div className="col-lg-2 col-md-12 col-sm-12 col-12 my-2">
            <div data-aos="zoom-in-up" data-aos-duration={`${750 * i}`}>
              <Img
                style={
                  width < 600
                    ? width < 500
                      ? { maxWidth: "130px" }
                      : { maxWidth: "161px" }
                    : { maxWidth: "250px" }
                }
                fluid={node.childImageSharp.fluid}
                alt={node.base}
              />
            </div>
          </div>
        ))} */}
      </div>
    </>
  )
}

export default Frame6
