import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import AboutComponent from "../components/About/About.js"
import * as globalStyle from "../styles/global.module.css"
import InstaFeed from "../components/InstaFeed"
import Seo from "../components/seo"
import AOS from "aos"
import { aboutPageData } from "../Data/data"
import AboutData from "../../site/about.json"
import useWindowSize from "../../hooks/useWindowSize"

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      once: true,
    })
  }, [])
  const { width } = useWindowSize()
  return (
    <>
      <Seo
        title={AboutData?.seoTitle ? AboutData?.seoTitle : "About"}
        description={
          AboutData?.seoDescription ? AboutData?.seoDescription : "Black Irish"
        }
      />
      <Layout>
        <>
          <div className={globalStyle.page}>
            <div className={globalStyle.pageTitle}>
              <h1>{AboutData?.title ? AboutData?.title : "About"}</h1>
            </div>
            <div className={globalStyle.border}></div>
          </div>
          <div
            className={
              width < 765
                ? "container d-flex justify-content-center my-5 px-3"
                : "container d-flex justify-content-center my-5"
            }
          >
            <AboutComponent
              data={AboutData?.section ? AboutData?.section : aboutPageData}
            />
          </div>
          <div className="my-5">
            <InstaFeed />
          </div>
        </>
      </Layout>
    </>
  )
}

export default About
