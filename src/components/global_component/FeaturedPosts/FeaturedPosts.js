import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImageData } from "../../../utils/get_image_data";
import { FeaturedPostsStyles } from "./FeaturedPosts.styled";

export const FeaturedPosts = ({path, posts, limit, random}) => {

  if (!posts.length) return <></>;

  let count = limit || 2;
  let data = posts;

  if (!path) path = '/';
  if (random) data = posts.sort(() => Math.random() - 0.5 );

  return (
    <FeaturedPostsStyles>
      <div className="container">
        <div className="heading">READ NEXT</div>
        <div className="posts">
          {
            data.map(({featuredImage, slug, title}, i) => {

              if (count < i + 1) return null;
              
              return (
                <div className="post" key={slug}>
                  <div className="thumb">
                    <GatsbyImage image={getImageData(featuredImage.node)} alt={title}/>
                  </div>
                  <div className="title">{title}</div>
                  <Link to={path + slug} className="link">
                    Read more
                    <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </FeaturedPostsStyles>
  )
}