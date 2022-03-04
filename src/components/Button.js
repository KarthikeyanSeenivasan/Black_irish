import { Link } from "gatsby"
import React from "react"
import * as btn from "../styles/button.module.css"

const Button = ({ classN, name, link }) => {
  return (
    <>
      <Link to={link} className={classN ? btn.green : btn.orange}>
        {name}
      </Link>
    </>
  )
}

export default Button
