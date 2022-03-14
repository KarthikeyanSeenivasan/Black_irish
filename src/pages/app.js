import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Products from "./products"
import Recipes from "./recipes"
import Press from "./press"
import Login from "./login"
import PrivateRoute from "../components/PrivateRoute"

const App = () => (
  <Router>
    <PrivateRoute path="/" component={Home} />
    <PrivateRoute path="/about" component={About} />
    <PrivateRoute path="/contact" component={Contact} />
    <PrivateRoute path="/products" component={Products} />
    <PrivateRoute path="/recipes" component={Recipes} />
    <PrivateRoute path="/press" component={Press} />
    <Login path="/login" />
  </Router>
)

export default App
