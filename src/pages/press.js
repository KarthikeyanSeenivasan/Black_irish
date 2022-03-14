import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import * as globalStyle from "../styles/global.module.css"
import bottleImg from "../images/center_bottle.png"
import * as pressStyle from "../styles/press.module.css"
import useWindowSize from "../../hooks/useWindowSize"
import { Link } from "gatsby"

const titleImgData = [
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604505/Black_irish/company_ov1xvk.png",
    link: `https://www.irishtimes.com/culture/music/black-irish-mariah-carey-launches-liqueur-named-with-a-nod-to-her-irish-heritage-1.4649151`,
    name: "irishtimes",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604506/Black_irish/company1_sixumv.png",
    link: "https://www.refinery29.com/en-gb/2021/08/10635202/mariah-carey-black-irish-cream-liquor-reaction",
    name: "refinery29",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604505/Black_irish/company8_hqxnhy.png",
    link: `https://www.forbes.com/sites/abigailabesamis/2021/11/24/inside-mariah-careys-irish-cream-brand-and-her-holiday-plans/?sh=39dc0fbf199e`,
    name: "forbes",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604507/Black_irish/company7_bojxz4.png",
    link: "https://www.thespiritsbusiness.com/2021/08/mariah-carey-creates-black-irish-cream-liqueur/",
    name: "thespiritsbusiness",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604506/Black_irish/company9_ay9gxz.png",
    link: "https://www.rollingstone.com/product-recommendations/lifestyle/mariah-carey-black-irish-buy-online-1212942/",
    name: "rollingstone",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604506/Black_irish/company5_tkgw3k.png",
    link: "https://people.com/food/mariah-carey-launch-black-irish-cream-liqueur/",
    name: "people",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604506/Black_irish/company6_isvwcy.png",
    link: "https://www.foodandwine.com/news/mariah-carey-black-irish-cream",
    name: "foodandwine",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604506/Black_irish/company4_hs8sfk.png",
    link: "https://beveragedynamics.com/2021/08/17/mariah-carey-black-irish-cream-liqueur/",
    name: "beveragedynamics",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604506/Black_irish/company3_y9e0po.png",
    link: "https://www.delicious.com.au/drinks/spirits-cocktails/article/mariah-carey-launches-black-irish-cream-liqueurs/b61uo34v",
    name: "delicious",
  },
  {
    img: "https://res.cloudinary.com/dq4fvmcte/image/upload/v1645604506/Black_irish/company2_xfdznh.png",
    link: "https://chicago.suntimes.com/2021/11/19/22789895/mariah-carey-favorite-christmas-songs-movies-kirk-franklin",
    name: "chicago.suntimes",
  },
]

function Press() {
  const Eyeball = () => {
    var eye = document.querySelectorAll(".bottle")
    eye.forEach(function (eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2
      let radian =
        // eslint-disable-next-line no-restricted-globals
        Math.atan2(event.pageX - x, event.pageY - y)
      let rot = radian * (180 / Math.PI) * -1.35 + 180
      if (rot > 360 || rot < 0) {
        rot = 0
      }
      eye.style.transform = "rotate(" + rot + "deg)"
    })
  }

  const { width } = useWindowSize()
  return (
    <>
      <Seo title="Press" description="Black Irish" />
      <Layout>
        <div className={globalStyle.page}>
          <div className={globalStyle.pageTitle}>
            <h1>Press</h1>
          </div>
          <div className={globalStyle.border}></div>
        </div>
        <div
          onMouseMove={() => Eyeball()}
          id="center_bottle"
          className={pressStyle.body}
        >
          <div className={pressStyle.center_img}>
            <img
              className="bottle"
              height={width < 504 ? 300 : width < 700 ? 350 : 466}
              width={width < 504 ? 192 : width < 700 ? 224 : 300}
              src={bottleImg}
              alt="bottleImg"
            />
          </div>

          <div className={pressStyle.companyLogoMain}>
            {titleImgData.map((item, i) => (
              <div key={i} className="circle">
                <Link target="_blank" to={item.link}>
                  <img src={item.img} alt={item.name} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Press
