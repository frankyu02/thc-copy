const path = require(`path`)
// Log out information after a build is done
export const onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/Blog-post.js`)
  const result = await graphql(`
    query {
             allWpPost {
    nodes {
      slug
      blogPost {
        linkName
        signUpForm {
          fieldGroupName
          showForm
          signUpFormButton
          signUpFormChechboxText
          signUpFormPlaceholdeer
          signUpFormTitle
        }
        socialLink {
          socialLinkItem {
            target
            title
            url
          }
        }
      }
      content
    }
  }
    }
  `)
  result.data.allWpPost.nodes.forEach(node => {
    createPage({
      path: `${node.slug}`,
      component: blogPostTemplate,
      context: {
        node: node
      }
    })
  })
}