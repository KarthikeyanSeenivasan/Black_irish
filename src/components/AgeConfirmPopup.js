import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import useWindowSize from "../../hooks/useWindowSize"
const AgeConfirmPopup = ({ handleSubmitAge }) => {
  const { width } = useWindowSize()

  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg2.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1280
              placeholder: TRACED_SVG
              formats: [WEBP]
              quality: 70
              webpOptions: { quality: 70 }
            )
          }
        }
        mobileImage: file(relativePath: { eq: "bg2-mb.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 480
              placeholder: TRACED_SVG
              formats: [WEBP]
              quality: 80
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const image = getImage(data?.placeholderImage)
  const mbImage = getImage(data?.mobileImage)

  const [bg, setBg] = useState(image)

  useEffect(() => {
    if (width <= 767) {
      setBg(mbImage)
    } else {
      setBg(image)
    }
  }, [width])

  const bgImage = convertToBgImage(bg)

  return (
    <>
      <BackgroundImage Tag="div" {...bgImage} preserveStackingContext>
        <div className="confirm">
          <div className="confirmation">
            <a href="#" className="logo_wrap">
              <StaticImage
                src="../images/logo.png"
                alt=""
                placeholder="tracedSVG"
                layout="fullWidth"
              />
            </a>

            <div className="confirm-btn-part">
              <h3>Are you Over 21?</h3>
              <div className="confirm-btn">
                <a href="#" className="yes-btn" onClick={handleSubmitAge}>
                  Yes
                </a>
                <a
                  href="#"
                  className="no-btn"
                  onClick={() => alert("Age need to be more than 21")}
                >
                  No
                </a>
              </div>
            </div>
            <p>
              You must have cookies enabled to use this website. By entering
              this site you agree to our Terms & Conditions and Privacy.
            </p>
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

export default AgeConfirmPopup
