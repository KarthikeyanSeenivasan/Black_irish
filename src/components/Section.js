import React from "react"
import * as home from "../styles/home.module.css"
import Button from "./Button"
import useWindowSize from "../../hooks/useWindowSize"

const Section = ({ data }) => {
  const { width } = useWindowSize()
  return (
    <>
      <div className={home.container}>
        {data.map((item, i) => (
          <>
            <div
              key={i}
              className={`mb-5 ${home.section}`}
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
                  className={home.image}
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
                      ? 210
                      : width < 450
                      ? 285
                      : width < 881
                      ? 300
                      : width < 1200
                      ? 337.5
                      : 412.83
                  }
                  alt="home"
                />
              </div>
              <div
                className={home.content}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="750"
              >
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <Button classN="green" name={item.btnName} link={item.link} />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Section
