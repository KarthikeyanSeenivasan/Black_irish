import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Recipe from "../components/Recipes/Recipe"
import * as recipeStyle from "../styles/recipe.module.css"
import InstaFeed from "../components/InstaFeed"
import Seo from "../components/seo"
import Aos from "aos"
import { recipesData } from "../Data/data"
import Consumer from "../../context/Consumer"

function Recipes() {
  useEffect(() => {
    Aos.init({
      delay: 100,
      once: true,
    })
  }, [])

  return (
    <>
      <Seo title="Recipes" description="Black Irish" />
      <Layout>
        <div className={recipeStyle.recipe}>
          <div className={recipeStyle.title}>
            <h1>COCKTAIL RECIPES</h1>
          </div>
          <div className={recipeStyle.border}></div>
        </div>
        <div className="container my-5">
          <Recipe data={recipesData} />
        </div>
        <div className="my-5">
          <InstaFeed />
        </div>
      </Layout>
    </>
  )
}

export default Recipes
