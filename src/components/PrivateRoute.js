import React, { useState } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import Cookies from "js-cookie"
import AgeConfirmPopup from "./AgeConfirmPopup"
import useLocalStorage from "../../hooks/useLocalStorage"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [age, setAge] = useLocalStorage("ageConfirm", false)
  const handleSubmitAge = e => {
    e.preventDefault()
    // var expires = ""
    // var date = new Date()
    // var midnight = new Date(
    //   date.getFullYear(),
    //   date.getMonth(),
    //   date.getDate(),
    //   23,
    //   59,
    //   59
    // )
    // expires = "; expires=" + midnight.toGMTString()
    // document.cookie = `ageConfirm=${true};expires=${expires}`
    // let windowData = cookies.get("ageConfirm")
    localStorage.setItem("ageConfirm", true)
    setAge(true)
  }

  return (
    <>
      {age ? (
        <Component {...rest} />
      ) : (
        <AgeConfirmPopup handleSubmitAge={handleSubmitAge} />
      )}
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
