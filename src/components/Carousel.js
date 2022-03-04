import React, { useRef } from "react"
import Slider, { slickNext, slickPrev } from "react-slick"
import * as productStyle from "../styles/product.module.css"
import icon_img from "../images/bulletin.png"
const SimpleSlider = ({ data }) => {
  const customeSlider = useRef()
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <div>
      <div
        className={`${carousel.owl_nav} d-flex justify-content-end`}
        style={{
          marginTop: "-25px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      ></div>
      <Slider {...settings} ref={customeSlider}>
        {data?.map((item, index) => (
          <div className={productStyle.details}>
            <img width={44} height={40} src={icon_img} alt="icon_img" />
            <div className="m-1">
              <h6> TASTING NOTES</h6>
              <p>Notes of bright citrus with a smooth, fresh finish.</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default SimpleSlider
