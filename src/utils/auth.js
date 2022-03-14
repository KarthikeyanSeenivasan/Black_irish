import Cookies from "js-cookie"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  // isBrowser() && window.localStorage.getItem("ageConfirm")
  //   ? JSON.parse(window.localStorage.getItem("ageConfirm"))
  //   : false
  Cookies.get("ageConfirm") ? Cookies.get("ageConfirm") : false

const setValue = user => {
  // window.localStorage.setItem("ageConfirm", JSON.stringify(user))
  var date = new Date()
  var midnight = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59
  )
  let expired = "; expires=" + midnight.toGMTString()
  document.cookie = `ageConfirm=${true};expires=${expired}`
}

export const handleLogin = () => {
  setValue(true)
}

export const isLoggedIn = () => {
  const user = getUser()
  return user
}
