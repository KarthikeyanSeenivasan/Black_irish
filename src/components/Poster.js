import { Link } from "gatsby"
import React from "react"
import posterImg from "../images/poster.png"
import * as poster from "../styles/poster.module.css"

function Poster({ data }) {
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
          {data.slice(0, 1).map((item, i) => (
            <div
              key={i}
              className={poster.contentArea}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>{item.title ? item.title : `Black Irish`}</h1>
              <p>
                {item.content
                  ? item.content
                  : ` When thinking of Irish cream, many may think of curling up with
                those they love by the fire, or enjoying it as an after-dinner
                drink on a cold winter night. A classic holiday beverage, Irish
                cream has always captured those festive feelings of warmth,
                laughter and love.`}
              </p>
              <button className={poster.green}>
                <Link to="/about">
                  {item.btnName ? item.btnName : `Our Story`}
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Poster
