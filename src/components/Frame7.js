import React from "react"
import * as frame from "../styles/frame7.module.css"
import Button from "./Button"
import useWindowSize from "../../hooks/useWindowSize"
import { Link } from "gatsby"

function Frame7({ data }) {
  const { width } = useWindowSize()
  return (
    <>
      <div className={frame.content}>
        <h1 className="mb-3">Recipes</h1>
        <h6 className="mb-5">OUR FAVORITE WAYS TO ENJOY BLACK IRISH</h6>
        <div className={frame.imgSection}>
          {data.slice(0, 3).map((item, i) => (
            <div
              className="text-decoration-none mb-5"
              key={i}
              className="mx-4"
              data-aos="zoom-out"
              data-aos-duration={`${1000 * i}`}
            >
              <div className="d-flex justify-content-center align-content-center">
                <Link to={`/recipes#${item.id}`}>
                  <img
                    src={item.img}
                    alt="recipies"
                    placeholder="blurred"
                    layout="fixed"
                    width={250}
                    height={250}
                    className="cover"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-content-center">
                <Link to={`/recipes#${item.id}`}>
                  <p className="mt-3">{item.nickTitle}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button link="/recipes" classN="green" name="View all Recipes" />
        </div>
      </div>
    </>
  )
}

export default Frame7
