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
    createPage({
      path: '/products',
      matchPath: '/products/*',
      component: path.resolve(__dirname, 'src', 'pages', 'products.js'),
    });
  }
}

// Create blog pages dynamically
export const createPages = async ({ page, graphql, actions }) => {
  const { createPage } = actions;


  const blogPostTemplate = path.resolve(`src/templates/Blog-post.js`);
  const educationsPostTemplate = path.resolve(`src/templates/Education-post.js`);
  const ProductTemplate = path.resolve(`src/templates/ProductPage.js`);

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

  const productsQuery = await graphql(
    `
      {
        dutchieplus {
          menu(retailerId: "4c9422c5-d248-415b-8a88-0a75822c50e6",
          pagination: {limit: 10000, offset: 0}) {
            products {
              brand {
                description
                id
                imageUrl
                name
              }
              category
              description
              descriptionHtml
              effects
              id
              image
              name
              posId
              potencyCbd {
                formatted
                range
                unit
              }
              potencyThc {
                formatted
                range
                unit
              }
              productBatchId
              slug
              staffPick
              strainType
              subcategory
              variants {
                id
                option
                priceMed
                priceRec
                quantity
                specialPriceMed
                specialPriceRec
              }
            }
            productsCount
          }
        }
      }
    `
  );

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

  console.log("Building all (Dutchie) Product pages...");
  console.log("products.length: "+ productsQuery.data.dutchieplus.menu.productsCount)
  productsQuery.data.dutchieplus.menu.products.forEach((product) => {
    console.log(product.slug)
    createPage({
      path: `/products/${product.id}`,
      component: ProductTemplate,
      context: {
        product: product
      },
    });
  });
  console.log("COMPLETE")

}