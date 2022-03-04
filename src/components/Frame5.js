import React from "react"
import Button from "./Button"
import * as home from "../styles/home.module.css"

const Frame5 = ({ data }) => {
  return (
    <div className="container">
      <div className={home.frame5}>
        {data?.map((item, i) => (
          <div
            key={i}
            className={home.frame}
            data-aos="zoom-in"
            data-aos-duration={`${1250 * i}`}
          >
            <img src={item.img} height={273.1} alt="" />
            <h3>{item.title}</h3>
            <Button
              link={`/products${item.id}`}
              classN="green"
              name="Learn more"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Frame5
