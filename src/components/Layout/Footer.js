import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as footer from "../../styles/footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import footer_bg_img from "../../images/footer_icon_bg_img.png"
import footerImg from "../../images/footer_gif_01.gif"
import { navLinks } from "./Header"
import { Link } from "gatsby"
import useWindowSize from "../../../hooks/useWindowSize"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SocialLinks from "../../../site/socialLinks.json"
import FooterData from "../../../site/footer.json"
import RecipeData from "../../../site/recipe.json"
import { recipesData } from "../../Data/data"

const recipeLinks = RecipeData.section ? RecipeData?.section : recipesData

function Footer() {
  const [email, setEmail] = useState("")
  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    if (result.result === "success") {
      toast(result.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
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
    e.target.reset()
  }
  const { width } = useWindowSize()
  return (
    <>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0">
            <div
              style={{
                position: "relative",
                backgroundImage: `url(${footer_bg_img})`,
                width: "auto",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={footer.logo__section}
            >
              <div className={footer.logo_content}>
                <StaticImage
                  src="../../images/logo.png"
                  alt="logo"
                  placeholder="blurred"
                  layout="fixed"
                  width={154}
                  height={130}
                />
                <p>Premium Irish Cream</p>
                <div className={footer.iconSection}>
                  <Link
                    target="_blank"
                    to={
                      SocialLinks?.facebook
                        ? SocialLinks?.facebook
                        : "https://www.facebook.com/goblackirish/"
                    }
                  >
                    <FontAwesomeIcon
                      className={footer.icon}
                      icon={faFacebookF}
                      size="2x"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    to={
                      SocialLinks?.instagram
                        ? SocialLinks?.instagram
                        : "https://www.instagram.com/goblackirish/"
                    }
                  >
                    <FontAwesomeIcon
                      className={footer.icon}
                      icon={faInstagram}
                      size="2x"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    to={
                      SocialLinks?.twitter
                        ? SocialLinks?.twitter
                        : "https://twitter.com/goblackirish?lang=en"
                    }
                  >
                    <FontAwesomeIcon
                      className={footer.icon}
                      icon={faTwitter}
                      size="2x"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div
              style={{
                position: "relative",
                backgroundImage: `url(${footerImg})`,
                width: "auto",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                padding: "50px 0px",
              }}
              className="row"
            >
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
                <div className={footer.group_link}>
                  <h3>Company</h3>
                  <ul>
                    {navLinks.map((item, i) => (
                      <li className={footer.link_item} key={i}>
                        <Link style={{ color: "#fff" }} to={item.link}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 d-flex ">
                <div className={footer.group_link}>
                  <h3>Recipes</h3>
                  <ul>
                    {recipeLinks.map((item, i) => (
                      <li className={footer.link_item} key={i}>
                        <Link
                          style={{ color: "#fff" }}
                          to={`/recipes#${item.id}`}
                        >
                          {item.nickTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={
                  width < 1000
                    ? "col-lg-4 col-md-12 col-sm-12 col-12 d-flex justify-content-center"
                    : "col-lg-4 col-md-12 col-sm-12 col-12 "
                }
              >
                <div className={footer.subscribeArea}>
                  <div className="d-flex flex-column">
                    <h3>{FooterData.title}</h3>
                    <p>{FooterData.content}</p>
                  </div>
                  <form onSubmit={e => handleSubmit(e)}>
                    <input
                      className={footer.inputArea}
                      placeholder="Enter Your Email Address"
                      name="email"
                      type="email"
                      onChange={e => setEmail(e.target.value)}
                    />
                    <div className={footer.btn_area}>
                      <input
                        className={footer.btn}
                        type="submit"
                        name="Subscribe"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
