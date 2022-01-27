import styled from "styled-components"
import { lg, md, xs, sm } from "../../../styles/utils/media_queries"
import { __POSTS_CONTENT_SIZE } from "../../../styles/utils/variables"

export const ContentStyles = styled.main`
  width: 100%;
  padding: 40px 0;
  

  ${sm(`
    width: ${__POSTS_CONTENT_SIZE};
    margin-left: 24px;
    padding: 0 0 100px 0;
  `)}

  h2 {
    color: var(--darkpurple);
    font-size: 30px;
    line-height: 30px;
    font-style: italic;
    margin: 40px 0;
    font-family: 'Integral CF Bold';

    ${sm(`
      font-size: 50px;
      line-height: 50px;
      margin: 50px 0;
    `)}

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 20px;
    line-height: 20px;
    font-style: italic;
    margin: 40px 0;

    ${sm(`
      font-size: 30px;
      line-height: 30px;
      margin: 50px 0;
    `)}

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    color: #000;

    ${sm(`
      font-size: 18px;
      line-height: 23px;
    `)}
  }

  blockquote {
    margin: 40px 0;

    ${sm(`
      margin: 50px 0;
    `)}

    p {
      font-size: 30px;
      line-height: 40px;
      font-family: 'Integral CF';
      font-style: italic;
      font-weight: 400;      
      margin: 0;
    }

    cite {
      font-size: 18px;
      margin-top: 40px;
      display: block;
    }
  }

  figure {
    margin: 40px 0;
    height: 350px;

    ${sm(`
      margin: 100px 0;
      height: 388px;
    `)}

    figcaption {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: #fff;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      z-index: -1;
    }

  }

  .banner-link {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
    }

    figcaption {
      font-family: 'Neumatic Compressed Bold';
      font-size: 60px;
      line-height: 60px;
      letter-spacing: 0.01em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 90%;

      ${sm(`
        font-size: 80px;
        line-height: 80px;
      `)}
    }

    .wp-block-buttons {
      position: absolute;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;

      div {
        cursor: pointer;
      }
    }
  }

  .banner-text {
    position: relative;

    figcaption {
      font-family: 'Integral CF Bold';
      font-size: 40px;
      line-height: 40px;
      font-weight: 700;
      font-style: italic;
      top: 50%;
      transform: translate(-50%, -50%);

      ${sm(`
        max-width: 46%;
      `)}

      ${md(`
        font-size: 50px;
        line-height: 50px;
      `)}      
    }
  }

`