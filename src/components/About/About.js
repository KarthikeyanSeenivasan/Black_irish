import React from "react"
import useWindowSize from "../../../hooks/useWindowSize"
import * as globalStyle from "../../styles/global.module.css"
import * as aboutStyle from "../../styles/about.module.css"
function About({ data }) {
  const { width } = useWindowSize()
  return (
    <>
      <div className={aboutStyle.container}>
        {data.map((item, i) => (
          <>
            <div
              key={i}
              className={`${aboutStyle.section}`}
              style={
                i % 2 === 0
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }
              }
            >
              <div
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="750"
              >
                <img
                  className={aboutStyle.image}
                  src={item.img}
                  width={
                    width < 400
                      ? 280
                      : width < 450
                      ? 380
                      : width < 881
                      ? 400
                      : width < 1200
                      ? 450
                      : 550.45
                  }
                  height={
                    width < 400
                      ? 177.62
                      : width < 450
                      ? 247.8
                      : width < 881
                      ? 236
                      : 320
                  }
                  alt="about"
                />
              </div>
              <div className={aboutStyle.content}>
                <div
                  className={globalStyle.individual}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="750"
                >
                  <h4 className={aboutStyle.cardTitle}>{item?.title}</h4>
                  <h6>{item?.description}</h6>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default About
