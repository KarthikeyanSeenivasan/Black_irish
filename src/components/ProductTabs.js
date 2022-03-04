import React, { useState } from "react"
import icon_img from "../images/bulletin.png"
import { TabList, TabPanel, Tabs, Tab } from "react-tabs"
import styled from "styled-components"
import * as productStyle from "../styles/product.module.css"
import { tabDetails } from "./tabData"
import useWindowSize from "../../hooks/useWindowSize"
import Slider from "react-slick"
import "../styles/slick.css"

const ProductTabs = ({ productDetails, selected }) => {
  const [index, setIndex] = useState(0)
  const [flip, setFlip] = useState(false)
  const { width } = useWindowSize()

  const settings = {
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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 mb-4 d-flex justify-content-center">
            <img
              height={width < 504 ? 350 : width < 700 ? 350 : 466}
              width={width < 504 ? 120 : width < 700 ? 120 : 150}
              src={tabDetails[index]?.img}
              alt="bottleImg"
            />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <StyledH1>THE DETAILS</StyledH1>
            <StyledTabs>
              <StyledTabList>
                {tabDetails?.map((item, i) => (
                  <TabHead
                    selectedClassName="tab_selected"
                    key={i}
                    onClick={() => setIndex(i)}
                    current={index === i}
                  >
                    {item?.tab}
                  </TabHead>
                ))}
              </StyledTabList>

              {tabDetails?.map((item, i) => (
                <TabPanel key={i}>
                  <div className={productStyle.wrapper_content}>
                    <TabIntro className={productStyle.taste_title}>
                      <h6>{item?.heading}</h6>
                      <p>{item?.subHeading}</p>
                    </TabIntro>
                    {width > 767 ? (
                      <div className={productStyle.wrapper}>
                        {item?.tabItems?.map((sub, i) => (
                          <div key={i} className={productStyle.details}>
                            <img
                              width={44}
                              height={40}
                              src={icon_img}
                              alt="icon_img"
                            />
                            <div className="m-1">
                              <h6>{sub?.title}</h6>
                              <p>{sub?.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="row">
                        <Slider {...settings}>
                          {item?.tabItems?.map((sub, i) => (
                            <div className="col-6 px-2" key={i}>
                              <ScrollCard>
                                <img
                                  width={44}
                                  height={40}
                                  src={icon_img}
                                  alt="icon_img"
                                />
                                <div className="m-1">
                                  <h6>{sub?.title}</h6>
                                  <p>{sub?.desc}</p>
                                </div>
                              </ScrollCard>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    )}
                  </div>
                </TabPanel>
              ))}
            </StyledTabs>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductTabs

const StyledTabs = styled(Tabs)`
  @media screen and (max-width: 767px) {
    ul {
      padding-left: 0px;
    }
  }
`

const TabHead = styled(Tab)`
  border: 0px;
  color: ${props => (props.current ? "black" : "rgba(30, 39, 34, 0.5)")};
  border-bottom: ${props => (props.current ? "4px solid #d59f38" : "unset")};
  transition-duration: 0.5s;

  &:hover {
    border-bottom: 4px solid #d59f38;
    color: black;
    transition-duration: 0.5s;
  }
`

const StyledTabList = styled(TabList)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Roboto";
  font-style: bold;
  font-size: 24px;
  line-height: 28px;
  list-style-type: none;
  width: 100%;

  @media screen and (max-width: 767px) {
    justify-content: space-around;
  }
`
const TabIntro = styled.div`
  padding-left: 2rem;
`
const StyledH1 = styled.h1`
  color: rgba(213, 159, 56, 1);
  font-family: "Roboto";
  font-style: bold;
  font-size: 36px;
  line-height: 42px;
  padding-left: 2rem;
  padding-bottom: 25px;

  @media screen and (max-width: 767px) {
    text-align: center;
    padding-left: 0;
  }
`
const ScrollCard = styled.div`
  width: 100%;
  border-top: 1px solid rgba(30, 39, 34, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: 0 10px;
  }

  div p {
    font-size: 13px;
    line-height: 16px;
  }
`
