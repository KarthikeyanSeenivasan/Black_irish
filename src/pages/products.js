import React, { useState, useEffect } from "react"
import Seo from "../components/seo"
import * as productStyle from "../styles/product.module.css"
import * as globalStyle from "../styles/global.module.css"
import Layout from "../components/Layout/Layout"
import product1 from "../images/products/product1.png"
import product2 from "../images/products/product2.png"
import product3 from "../images/products/product3.png"
import useWindowSize from "../../hooks/useWindowSize"
import InstaFeed from "../components/InstaFeed"
import flip_img from "../images/flip.png"
import icon_img from "../images/bulletin.png"
import Aos from "aos"
import SimpleSlider from "../components/SimpleSlider"
import ProductTabs from "../components/ProductTabs"
import Slider from "react-slick"
import "../styles/slick.css"
import styled from "styled-components"
import { useLocation } from "@reach/router"
import { productData } from "../Data/data"
import Consumer from "../../context/Consumer"

const ScrollCard = styled.div`
  width: 90%;
  border-top: 1px solid rgba(30, 39, 34, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    padding: 0 10px;
  }

  div p {
    font-size: 13px;
    line-height: 16px;
  }
`
const tasteDetails = [
  {
    icon: icon_img,
    title: "TASTING NOTES",
    desc: "Notes of bright citrus with a smooth, fresh finish.",
  },
  {
    icon: icon_img,
    title: "TASTING NOTES",
    desc: "Notes of bright citrus with a smooth, fresh finish.",
  },
  {
    icon: icon_img,
    title: "TASTING NOTES",
    desc: "Notes of bright citrus with a smooth, fresh finish.",
  },
  {
    icon: icon_img,
    title: "TASTING NOTES",
    desc: "Notes of bright citrus with a smooth, fresh finish.",
  },
  {
    icon: icon_img,
    title: "TASTING NOTES",
    desc: "Notes of bright citrus with a smooth, fresh finish.",
  },
  {
    icon: icon_img,
    title: "TASTING NOTES",
    desc: "Notes of bright citrus with a smooth, fresh finish.",
  },
  {
    icon: icon_img,
    title: "TASTING NOTES",
    desc: "Notes of bright citrus with a smooth, fresh finish.",
  },
  {
    icon: icon_img,
    title: "TASTING NOTES",
    desc: "Notes of bright citrus with a smooth, fresh finish.",
  },
]

function Products() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          dotsClass: "button__bar",
        },
      },
    ],
  }
  const location = useLocation()
  const { width } = useWindowSize()
  const [selected, setSelected] = useState(
    location.hash ? location.hash : "#original"
  )

  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
    })
  }, [])

  return (
    <>
      <Consumer>
        <Seo title="Products" description="Black Irish" />
        <Layout>
          <div className={globalStyle.page}>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="750"
              className={globalStyle.pageTitle}
            >
              <h1>Products</h1>
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
                {productData.map((item, i) =>
                  selected === item.id ? (
                    <>
                      <div className={productStyle.img_section}>
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
                    {productData.map((item, i) => (
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

                  {productData.map((item, i) =>
                    selected === item.id ? <p key={i}>{item.desc}</p> : null
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <InstaFeed />
          </div>
        </Layout>
      </Consumer>
    </>
  )
}

export default Products
