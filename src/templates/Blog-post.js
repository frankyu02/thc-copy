import React from "react"


//data come from gatsby-node.esm.js
const BlogPost = ({ pageContext }) => {

  console.log(pageContext);
 
  return (
    < >
      123
      {/* <div>
        {pageContext.node.blogPost.signUpForm.signUpFormChechboxText}
      </div>
      <div dangerouslySetInnerHTML={{ __html: pageContext?.node?.content }} /> */}
    </ >
  )
}

export default BlogPost