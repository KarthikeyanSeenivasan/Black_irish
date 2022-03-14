import React, { useState, useEffect } from "react"
import Seo from "../components/seo"
import * as productStyle from "../styles/product.module.css"
import * as globalStyle from "../styles/global.module.css"
import Layout from "../components/Layout/Layout"
import useWindowSize from "../../hooks/useWindowSize"
import InstaFeed from "../components/InstaFeed"
import Aos from "aos"
import "../styles/slick.css"
import { useLocation } from "@reach/router"
import { productData } from "../Data/data"
import ProductData from "../../site/product.json"

function Products() {
  const location = useLocation()
  const { width } = useWindowSize()
  const hashId = location?.hash ? location?.hash : "#original"
  const [selected, setSelected] = useState(hashId.slice(1, hashId.length))
  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
    })
  }, [])

  const data = ProductData ? ProductData : productData
  return (
    <>
      <Seo
        title={ProductData?.seoTitle ? ProductData?.seoTitle : "Products"}
        description={
          ProductData?.seoDescription
            ? ProductData?.seoDescription
            : "Black Irish"
        }
      />
      <Layout>
        <div className={globalStyle.page}>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="750"
            className={globalStyle.pageTitle}
          >
            <h1>{ProductData?.title ? ProductData?.title : "Products"}</h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="750"
            className={globalStyle.border}
          ></div>
        </div>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              {data?.section.map((item, i) =>
                selected === item.id ? (
                  <>
                    <div id={item.id} className={productStyle.img_section}>
                      <div key={i} className={productStyle.bottle_img}>
                        <img
                          data-aos="zoom-in-up"
                          data-aos-easing="linear"
                          data-aos-duration="750"
                          height={width < 504 ? 350 : width < 700 ? 350 : 500}
                          width={width < 504 ? 210 : width < 700 ? 120 : 300}
                          src={item.img}
                          alt="bottleImg"
                        />
                      </div>
                    </div>
                  </>
                ) : null
              )}
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="750"
                className={productStyle.content}
              >
                <h1>THE DETAILS</h1>
                <ul className={productStyle.menu_list}>
                  {data?.section.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setSelected(item.id)
                      }}
                      className={
                        selected === item.id
                          ? productStyle.selected
                          : productStyle.menu_item
                      }
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>

                {data?.section.map((item, i) =>
                  selected === item.id ? (
                    <p id={item.id} key={i}>
                      {item.desc}
                    </p>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <InstaFeed />
        </div>
      </Layout>
    </>
  )
}

export default Products
