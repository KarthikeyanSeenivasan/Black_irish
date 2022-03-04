import React from "react"
import useWindowSize from "../../../hooks/useWindowSize"
import * as globalStyle from "../../styles/global.module.css"
import * as aboutStyle from "../../styles/about.module.css"
function About({ data }) {
  const { width } = useWindowSize()
  return (
    <>
      <>
        <div className={aboutStyle.container}>
          {data.map((item, i) => (
            <>
              <div
                key={i}
                className={`${aboutStyle.section}`}
                style={
                  i % 2 == 0
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
                    <h4>{item?.title}</h4>
                    <h6>{item?.subTitle}</h6>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
      {/* {data.map((item, i) => (
        <>
          <div className="d-flex justify-content-center">
            <div
              style={width<1300? {width:'100%'}: { width: "85%" }}
              className={
                i % 2 == 0
                  ? "row d-flex justify-content-center align-items-center"
                  : "row d-flex flex-row-reverse justify-content-center align-items-center"
              }
            >
              <div
                data-aos="fade-up"
                data-aos-duration="850"
                className={`${globalStyle.individual} col-lg-6 col-md-12 col-sm-12 col-12`}
              >
                <h4>{item?.title}</h4>
                <h6>{item?.subTitle}</h6>
                <p>{item?.desc}</p>
              </div>

              <div
                className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center"
                data-aos="zoom-in"
                data-aos-duration="750"
              >
                <img
                  src={item.img}
                  width={
                    width < 400
                      ? 300
                      : width < 500
                      ? 350
                      : width < 1800
                      ? 450
                      : 550
                  }
                  height={
                    width < 400
                      ? 174
                      : width < 500
                      ? 203
                      : width < 1800
                      ? 280
                      : 320
                  }
                  alt={item.title}
                />
              </div>
            </div>
          </div>
        </>
      ))} */}
    </>
  )
}

export default About
