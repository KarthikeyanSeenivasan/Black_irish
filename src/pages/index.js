import React, { useEffect } from "react"
import { Router } from "@reach/router"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Products from "./products"
import Recipes from "./recipes"
import Press from "./press"
import Login from "../components/AgeConfirmPopup"
import PrivateRoute from "../components/PrivateRoute"

const Index = () => (
  <Router>
    <PrivateRoute path="/" component={Home} />
    <PrivateRoute path="/about" component={About} />
    <PrivateRoute path="/contact" component={Contact} />
    <PrivateRoute path="/products" component={Products} />
    <PrivateRoute path="/recipes" component={Recipes} />
    <PrivateRoute path="press" component={Press} />
  </Router>
)

export default Index
