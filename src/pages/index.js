import React, { useEffect } from "react"
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
import HomeData from "../../site/home.json"
import RecipeData from "../../site/recipe.json"

const IndexPage = () => {
  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
    })
  }, [])

  return (
    <>
      <Seo
        title={HomeData?.seoTitle ? HomeData?.seoTitle : "Black Irish"}
        description={
          HomeData?.seoDescription ? HomeData?.seoDescription : "Black Irish"
        }
      />
      <Layout>
        <Banner
          videoLink={HomeData.banner_video}
          imgLink={HomeData.banner_img}
        />
        <div className="my-5">
          <div className="container d-flex justify-content-center">
            <Section
              data={HomeData?.section ? HomeData?.section : sectionData}
            />
          </div>
        </div>
        <div className="my-5">
          <ProductSection data={productData} />
        </div>
        <div className="my-5">
          <Poster data={HomeData?.poster} />
        </div>
        <div className="my-5">
          <div className="container">
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
          <Frame7
            data={RecipeData?.section ? RecipeData.section : recipesData}
          />
        </div>
        <div className="my-5">
          <InstaFeed />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
