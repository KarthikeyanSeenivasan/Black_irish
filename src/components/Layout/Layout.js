import Footer from "./Footer"
import Header from "./Header"
import * as React from "react"
import { isLoggedIn } from "../../utils/auth"
import { navigate } from "gatsby"

function Layout({ children }) {
  return (
    <>
      {!isLoggedIn() ? (
        navigate("/")
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
