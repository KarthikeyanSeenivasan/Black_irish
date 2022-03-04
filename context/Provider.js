import React, { useState } from "react"
import Cookies from "js-cookie"
import AgeConfirmPopup from "../src/components/AgeConfirmPopup"
import IndexPage from "../src/pages"

export const popupContext = React.createContext({})

const Provider = props => {
  let windowData = Cookies.get("ageConfirm")
  let isBool = windowData === "true"
  const [age, setAge] = useState(isBool)
  const handleSubmitAge = e => {
    e.preventDefault()
    var expires = ""
    var date = new Date()
    var midnight = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59
    )
    expires = "; expires=" + midnight.toGMTString()
    document.cookie = `ageConfirm=${true};expires=${expires}`
    let windowData = Cookies.get("ageConfirm")
    setAge(windowData)
  }

  return (
    <popupContext.Provider
      value={{
        age,
        setAge,
        handleSubmitAge: handleSubmitAge,
      }}
    >
      {props.children}
    </popupContext.Provider>
  )
}

export default Provider
