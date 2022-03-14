import React, { useCallback, useContext, useEffect, useState } from "react"
import "../styles/globalStyles.css"
import "../styles/style.css"
import "../styles/responsive.css"
import "react-toastify/dist/ReactToastify.css"
import AgeConfirmPopup from "./AgeConfirmPopup"
import { ToastContainer } from "react-toastify"
import AOS from "aos"

const Layout = ({ children, loadAnim }) => {
  const [age, setAge] = useState(false)
  const handleSubmitAge = e => {
    e.preventDefault()
    setAge(true)
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      {age ? children : <AgeConfirmPopup handleSubmitAge={handleSubmitAge} />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  )
}

export default Layout
