const path = require(`path`)
// Log out information after a build is done
export const onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
export const createPages = async ({ graphql, actions }) => {
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