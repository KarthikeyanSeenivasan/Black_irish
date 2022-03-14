import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner"
import Section from "../components/Section"
import ProductSection from "../components/Frame5"
import Poster from "../components/Poster"
import Frame6 from "../components/Frame6"
import Frame7 from "../components/Frame7"
import InstaFeed from "../components/InstaFeed"
import Seo from "../components/seo"
import Aos from "aos"
import useWindowSize from "../../hooks/useWindowSize"
import {
  productData,
  recipesData,
  sectionData,
  titleImgsDataOne,
  titleImgsDataTwo,
} from "../Data/data"

const Home = () => {
  const { width } = useWindowSize()
  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
    })
  }, [])
  return (
    <>
      <Seo title="Home" description="Black Irish" />
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
      </Layout>
    </>
  )
}

export default Home
