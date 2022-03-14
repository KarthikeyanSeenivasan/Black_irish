import React, { useEffect, useRef } from "react"

const Signature = ({ startAnim }) => {
  const letterM = useRef(null)
  const letterA1 = useRef(null)
  const letterR1 = useRef(null)
  const letterRi = useRef(null)
  const letterAh = useRef(null)
  const heart1 = useRef(null)
  const heart2 = useRef(null)

  useEffect(() => {
    const svgArr = [
      letterM.current,
      letterA1.current,
      letterR1.current,
      letterRi.current,
      letterAh.current,
      heart1.current,
      heart2.current,
    ]

    svgArr.forEach(function (el) {
      el?.setAttribute("stroke-dasharray", Math.ceil(el?.getTotalLength()))
      el?.setAttribute("stroke-dashoffset", Math.ceil(el?.getTotalLength()))
    })
  }, [])

  return (
    <div className="signature-img">
      <svg
        id="mariah-an"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 385.64 183.5"
      >
        <g>
          <path
            id="letter-m"
            d="M11.92,141.66C29.85,128.33,47,115.08,64.29,100.51c19.95-16.78,40.21-35,61.36-52.36-38.32,40.05-74.16,75.6-65.07,88C67.69,144,81,138.1,113.32,115c28.74-20.49,33.4-23.39,39-28.59C158.19,81.52,186,55,203.82,40.13,222,25.38,245.36,3.71,248.8,7c2.63,2.68-18.66,19.27-34.18,28.22-15.54,9.63-27.77,18.41-49.48,36.44s-52.58,57.71-63.25,105.37"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            ref={letterM}
          />
          <path
            id="letter-a1"
            d="M177.6,107c2.45-3.83,2.9-8.79,2-10.09-3.51-4.41-22.36-5.3-38.25,8.67s-25.41,27.86-19.26,33.68c9.14,6.87,32.29-14.23,46.21-30.09-9.41,12.81-10.09,20.37-8.09,21.84,3.05,2.44,11.25-8.65,19.83-13.31,3.94-2,9-2.53,12.33-6.88"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            ref={letterA1}
          />
          <path
            id="letter-r1"
            d="M192.35,110.83c-4.13,4.51-12.38,5.65-17.54,10.35s-9.29,8.95-16.51,22"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            ref={letterR1}
          />
          <path
            id="letter-ri"
            d="M182.21,116.6c2.29.11,4.81,2.69,3,7.34s-2.18,8.94,5.85,4.81,17.27-9.36,32-20.75c0,0-22.69,18.65-12.22,26.22,5.43,3.51,14.14-5.87,26.07-20.59"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            ref={letterRi}
          />
          <path
            id="letter-ah"
            d="M267.71,111.25c3-3.67,4.63-9.36,2.18-11.93s-10.64-3.51-24,6-15,20.14-12.16,22.83,13.44,4.2,33.46-16.53l-21,25.65S284,119.12,311.93,95.16,369.08,48.27,371.28,43c4.15-6.55,2.86-7.55-4.44-2.63C354,49,334.75,71.46,309.58,100.22c-8.43,10.49-16.13,18.4-15.36,19.44s10.28-5.85,11.58-4.67c.84,1.32-6.71,16.55,10.83,17.39"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            ref={letterAh}
          />
          <path
            id="heart-1"
            d="M235,76.82s-5.26-22.19-14.94-19.15,3.15,21.44,12.84,28"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            ref={heart1}
          />
          <path
            id="heart-2"
            d="M235,76.82s5.29-10.38,24.61-23.6c19.38-12.61,29.24-12.7,29.24-5.64s-11.35,19-55.95,38.12"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            ref={heart2}
          />
        </g>
      </svg>
    </div>
  )
}

export default Signature
