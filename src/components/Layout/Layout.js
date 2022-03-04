import Footer from "./Footer"
import Header from "./Header"
import * as React from "react"

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
