import { Link } from "gatsby"
import React from "react"
import posterImg from "../images/poster.png"
import * as poster from "../styles/poster.module.css"

function Poster() {
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${posterImg})`,
          width: "auto",
          height: "456px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className={poster.contentWrapper}>
          <div
            className={poster.contentArea}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Black Irish</h1>
            <p>
              When thinking of Irish cream, many may think of curling up with
              those they love by the fire, or enjoying it as an after-dinner
              drink on a cold winter night. A classic holiday beverage, Irish
              cream has always captured those festive feelings of warmth,
              laughter and love
            </p>
            <button className={poster.green}>
              <Link to="/about">Our Story</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poster
