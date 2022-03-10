import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import * as globalStyle from "../styles/global.module.css"
import * as contactStyle from "../styles/contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import InstaFeed from "../components/InstaFeed"
import useWindowSize from "../../hooks/useWindowSize"
import Aos from "aos"
import ContactSign from "../components/ContactSign"
import { useTimeout } from "usehooks-ts"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import addToMailchimp from "gatsby-plugin-mailchimp"

function Contact() {
  const { width } = useWindowSize()
  const [imgSrc, setImgSrc] = useState(
    "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645812942/Black_irish/output-onlinegiftools_hhd4r9.png"
  )
  const gifChange = () => {
    setImgSrc(
      "https://res.cloudinary.com/dq4fvmcte/image/upload/v1646050366/Black_irish/butterfly_01_dxmom5.gif"
    )
  }
  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
    })
  }, [])
  useTimeout(gifChange, 5000)

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email)

    if (result.result === "success") {
      toast("We will Contact you soon", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      try {
        const response = await fetch(
          `https://v1.nocodeapi.com/tjscivsav/google_sheets/lQwJOgRcsXupZYHs?tabId=Sheet1`,
          {
            method: `POST`,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [firstName, email, message, new Date().toLocaleString()],
            ]),
          }
        )
        await response.json()
        e.target.reset()
      } catch (err) {
        console.log(err)
      }
    } else {
      toast(`${result.msg}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <>
      <Seo title="contact" description="Black Irish" />
      <Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className={globalStyle.page}>
          <div className={globalStyle.pageTitle}>
            <h1>contact</h1>
          </div>
          <div className={globalStyle.border}></div>
        </div>
        <div className="container my-5">
          <div className="row d-flex flex-row-reverse">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
              {width < 850 ? (
                <div
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  dat-aos-delay="100"
                  className={contactStyle.butterfly_img}
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dq4fvmcte/image/upload/v1645812942/Black_irish/output-onlinegiftools_hhd4r9.png)`,
                  }}
                ></div>
              ) : (
                <div
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                  dat-aos-delay="100"
                  className={contactStyle.butterfly_img}
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                  }}
                ></div>
              )}
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 px-1 ">
              <div className="d-flex justify-content-center">
                <div
                  style={{
                    height: `${width < 500 ? "131.6px" : "158.83px"}`,
                    width: `${width < 500 ? "280px" : "334.19px"}`,
                  }}
                >
                  <ContactSign />
                </div>
              </div>
              <form
                autoComplete="off"
                onSubmit={e => handleSubmit(e)}
                className="row my-1"
              >
                <div
                  className={`col-lg-6 col-md-12 col-sm-12 col-12 ${contactStyle.input_area}`}
                >
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={e => setFirstName(e.target.value)}
                      name="name"
                      placeholder="Name"
                      type="text"
                      // required
                    />
                  </div>
                </div>
                <div
                  className={`col-lg-6 col-md-12 col-sm-12 col-12 ${contactStyle.input_area}`}
                >
                  <div>
                    <label htmlFor="name">Email</label>
                    <input
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="Email"
                      // required
                    />
                  </div>
                </div>
                <div className={`my-4  ${contactStyle.input_area}`}>
                  <div>
                    <label htmlFor="name">Message</label>
                    <textarea
                      onChange={e => setMessage(e.target.value)}
                      name="message"
                      placeholder="Message"
                      type="text"
                      // required
                    />
                  </div>
                </div>
                <div className="row d-flex align-items-center my-1">
                  <div className="col-8 ">
                    <a
                      target="_blank"
                      className="text-dark social_icon mx-2"
                      href="https://www.tiktok.com/@goblackirish"
                    >
                      <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                    <a
                      target="_blank"
                      className="text-dark social_icon mx-2"
                      href="https://twitter.com/goblackirish?lang=en"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      target="_blank"
                      className="text-dark social_icon mx-2"
                      href="https://www.facebook.com/goblackirish/"
                    >
                      <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                    <a
                      target="_blank"
                      className="text-dark social_icon mx-2"
                      href="https://www.instagram.com/goblackirish/"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </div>
                  <div className="col-4 ">
                    <div className="float-end">
                      <input
                        type="submit"
                        className={`${contactStyle.green}`}
                        name="Send"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="my-5">
          <InstaFeed />
        </div>
      </Layout>
    </>
  )
}

export default Contact
