import React from "react"
import * as styles from "../styles/frame6.module.css"
import useWindowSize from "../../hooks/useWindowSize"

function Frame6({ data }) {
  const { width } = useWindowSize()

  return (
    <>
      <div
        className={width < 992 ? "row" : "row d-flex justify-content-between"}
      >
        {data.map((item, i) => (
          <div
            className="col-lg-2 col-md-12 col-sm-12 col-12 my-2"
            data-aos="zoom-in"
            data-aos-duration={`${1000 * i}`}
          >
            <div className={styles.isgBox} style={{ maxWidth: "200px" }}>
              <a
                href={item.link}
                target="_blank"
                style={{ alignItems: "center" }}
              >
                <img
                  width={width < 1200 ? 150 : width < 1930 ? 190 : 220}
                  src={item.src}
                  alt={item.name}
                  placeholder="blurred"
                  layout="fixed"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Frame6
