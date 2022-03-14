import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import * as insta from "../styles/insta.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function InstaFeed() {
  const data = useStaticQuery(graphql`
    query InstaImgs {
      allInstagramContent {
        nodes {
          permalink
          localImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  let arrayOfInstaImages = data?.allInstagramContent?.nodes
  const { width } = useWindowSize()
  return (
    <>
      <div className={width < 1000 ? "container-fluid" : "container"}>
        <div className={`row ${insta.feedTwo}`}>
          {arrayOfInstaImages?.slice(0, 10).map((item, i) => {
            let image = getImage(item?.localImage)
            let url = item?.permalink
            return (
              <>
                <div
                  key={i}
                  className={
                    width < 500 && i % 2 === 0
                      ? "col-6 d-flex justify-content-center pe-1"
                      : "col d-flex justify-content-center"
                  }
                >
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="800"
                    data-aos-delay="50"
                  >
                    <Link target="_blank" to={url}>
                      <GatsbyImage
                        className={insta.img}
                        image={image}
                        alt="Insta Feed"
                      />
                    </Link>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default InstaFeed
