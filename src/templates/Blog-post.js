import React from "react"


//data come from gatsby-node.esm.js
const BlogPost = ({ pageContext }) => {
 
  return (
    < >
      <div>
        {pageContext.node.blogPost.signUpForm.signUpFormChechboxText}
      </div>
      <div dangerouslySetInnerHTML={{ __html: pageContext?.node?.content }} />
    </ >
  )
}

export default BlogPost