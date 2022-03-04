import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import AboutComponent from "../components/About/About.js"
import * as globalStyle from "../styles/global.module.css"
import InstaFeed from "../components/InstaFeed"
import Seo from "../components/seo"
import AOS from "aos"
import { aboutPageData } from "../Data/data"
import Consumer from "../../context/Consumer"

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      once: true,
    })
  }, [])

  return (
    <>
      <Consumer>
        <Seo title="About" description="Black Irish" />
        <Layout>
          <>
            <div className={globalStyle.page}>
              <div className={globalStyle.pageTitle}>
                <h1>About</h1>
              </div>
              <div className={globalStyle.border}></div>
            </div>
            <div className="container d-flex justify-content-center my-5">
              <AboutComponent data={aboutPageData} />
            </div>
            <div className="my-5">
              <InstaFeed />
            </div>
          </>
        </Layout>
      </Consumer>
    </>
  )
}

export default About
