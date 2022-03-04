import React, { useState, useEffect } from "react"
import * as banner from "../styles/banner.module.css"
import "../../node_modules/video-react/dist/video-react.css"
import { ControlBar, Player, BigPlayButton } from "video-react"
import useWindowSize from "../../hooks/useWindowSize"
import SmallBg from "../images/black_irish.svg"
import Signature from "./Signature"

const Banner = () => {
  const { width } = useWindowSize()
  const [startAnim, setStartAnim] = useState(false)
  const loadAnim = () =>
    setTimeout(() => {
      setStartAnim(true)
    }, 2500)

  useEffect(() => {
    loadAnim()
  }, [])

  return (
    <>
      {width < 850 ? (
        <>
          <div
            className="container-fluid"
            style={{
              backgroundImage: `url(${SmallBg})`,
              width: "auto",
              height: "100vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
          <div className={banner.contentArea}>
            <div className={banner.content}>
              <div className="ms-5">
                {startAnim && <Signature startAnim={startAnim} />}
                {/* <img src={sign_img} width={330} height={163} alt="" /> */}
              </div>
              {/* <div className={banner.button}>
              <div className="me-3">
                <Button name="Learn more" />
              </div>
              <Button classN="green" name="Where to Find Us" />
            </div> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={banner.vedioArea}>
            <Player
              fluid={true}
              // poster={bannerImg}
              muted
              autoPlay={true}
              src={
                "https://res.cloudinary.com/jaffa/video/upload/v1644611348/homepage_video_llnlqn.mp4"
              }
              loop
            >
              <BigPlayButton position="center" />
              <ControlBar disableCompletely autoHide={true} />
            </Player>
          </div>

          <div className={banner.contentArea}>
            <div className={banner.content}>
              <div className="ms-5">
                {startAnim && <Signature startAnim={startAnim} />}
              </div>
              {/* <div className={banner.button}>
              <div className="me-3">
                <Button name="Learn more" />
              </div>
              <Button classN="green" name="Where to Find Us" />
            </div> */}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Banner
