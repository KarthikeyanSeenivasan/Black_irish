import React, { useEffect, useRef, useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner"
import Section from "../components/Section"
import ProductSection from "../components/Frame5"
import Poster from "../components/Poster"
import Frame6 from "../components/Frame6"
import Frame7 from "../components/Frame7"
import InstaFeed from "../components/InstaFeed"
import Aos from "aos"
import {
  productData,
  recipesData,
  sectionData,
  titleImgsDataOne,
  titleImgsDataTwo,
} from "../Data/data"
import Consumer from "../../context/Consumer"
import Seo from "../components/seo"

const IndexPage = () => {
  const { width } = useWindowSize()

  const [startAnim, setStartAnim] = useState(false)
  const loadAnim = () =>
    setTimeout(() => {
      setStartAnim(true)
    }, 2500)

  useEffect(() => {
    loadAnim()
    Aos.init({
      delay: 100,
      once: true,
    })
  }, [])

  return (
    <>
      <Consumer>
        <Seo title="Black Irish" description="Black Irish" />
        <Layout>
          <Banner />
          <div className="my-5">
            <div className="container d-flex justify-content-center">
              <Section data={sectionData} />
            </div>
          </div>
          <div className="my-5">
            <ProductSection data={productData} />
          </div>
          <div className="my-5">
            <Poster />
          </div>
          <div className="my-5">
            <div className={"container"}>
              <div className="row ">
                <div className="col-lg-12 col-md-6 col-sm-6 col-6 ">
                  <Frame6 data={titleImgsDataOne} />
                </div>
                <div className="col-lg-12 col-md-6 col-sm-6 col-6 ">
                  <Frame6 data={titleImgsDataTwo} />
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <Frame7 data={recipesData} />
          </div>
          <div className="my-5">
            <InstaFeed />
          </div>
          <>
            {/* <div
  className="container-fluid"
  style={{
    backgroundImage: `url(${
      (width > 768 && LargeBg) || (width < 768 && SmallBg)
    })`,
    width: "auto",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
  }}
>
  <div className="subscribe-area">
    {startAnim && <Signature startAnim={startAnim} />}
    <p>Sign Up Now For More Information</p>
    <MailchimpForm />
    <div className="d-flex flex-row mt-3 ">
      <a
        target="_blank"
        className="text-white social_icon mx-2"
        href="https://www.facebook.com/goblackirish/"
      >
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a
        target="_blank"
        className="text-white social_icon mx-2"
        href="https://www.instagram.com/goblackirish/"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        target="_blank"
        className="text-white social_icon mx-2"
        href="https://twitter.com/goblackirish?lang=en"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        target="_blank"
        className="text-white social_icon mx-2"
        href="https://www.tiktok.com/@goblackirish"
      >
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
    </div>
  </div>
</div> */}
          </>
        </Layout>
      </Consumer>
    </>
  )
}

export default IndexPage
