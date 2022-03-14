exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   if (page.path.match(/^\/app/)) {
//     page.matchPath = "/app/*"
//     createPage(page)
//   }
// }
