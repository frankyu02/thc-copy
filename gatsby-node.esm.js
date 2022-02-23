const path = require(`path`)
// Log out information after a build is done
export const onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

export const onCreatePage = async({ page, actions }) => {

  // if (page.path.match(/^\/products/)) {
  //   createPage({
  //     path: '/products',
  //     matchPath: '/products/*',
  //     component: path.resolve(__dirname, 'src', 'pages', 'products.js'),
  //   });
  // }

  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/products/)) {
    page.matchPath = "/products/*"

    // Update the page.
    createPage(page)
  }
}

// Create blog pages dynamically
export const createPages = async ({ page, graphql, actions }) => {
  const { createPage } = actions;


  const blogPostTemplate = path.resolve(`src/templates/Blog-post.js`);
  const educationsPostTemplate = path.resolve(`src/templates/Education-post.js`);

  const queryPosts = await graphql(`
    query {
      allWpPost {
        nodes {
          slug
          categories {
            nodes {
              id
            }
          }
        }
      }
    }
  `)

  const queryEducations = await graphql(`
    query {
      allWpEducation {
        nodes {
          slug
        }
      }
    }
  `)

  queryPosts.data.allWpPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: { 
        slug: node.slug,
        category: node.categories.nodes[0].id
      }
    })
  });

  queryEducations.data.allWpEducation.nodes.forEach(node => {
    createPage({
      path: `/education/${node.slug}`,
      component: educationsPostTemplate,
      context: { 
        slug: node.slug,
      }
    })
  });
}