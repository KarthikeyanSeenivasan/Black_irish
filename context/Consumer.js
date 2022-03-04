import React from "react"
import AgeConfirmPopup from "../src/components/AgeConfirmPopup"
import Provider, { popupContext } from "./Provider"

const Consumer = props => {
  return (
    <>
      <Provider>
        <popupContext.Consumer>
          {({ age, handleSubmitAge }) =>
            age ? (
              props.children
            ) : (
              <AgeConfirmPopup handleSubmitAge={handleSubmitAge} />
            )
          }
        </popupContext.Consumer>
      </Provider>
    </>
  )
}

export default Consumer
