import styled from 'styled-components';
import { sm, xs } from '../../../styles/utils/media_queries';

export const FeaturedPostsStyles = styled.section` 
  background: var(--darkpurple);
  padding: 50px 0 156px 0;
  color: #fff;

  ${sm(`
    padding: 132px 0 100px 0;
  `)}
    
  .heading {
    font-size: 60px;
    line-height: 60px;
    font-family: var(--fontPrimaryBold);
    font-style: italic;
    margin-bottom: 50px;
    text-transform: uppercase;

    ${sm(`
      font-size: 70px;
      line-height: 70px;
      margin-bottom: 70px;
    `)}
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;

    ${xs(`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    `)}
  }

  .thumb {
    height: 300px;

    ${sm(`
      height: 400px;
    `)}

    [data-gatsby-image-wrapper] {
      height: 100%;
    }
  }

  .title {
    font-family: 'Neumatic Compressed Bold';
    font-size: 70px;
    line-height: 70px;
    margin: 25px 0 10px 0;
    text-transform: uppercase;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${sm(`
      margin: 35px 0 20px 0;
    `)}
  }

  .link {
    font-family: 'MADE Outer Sans Light';
    font-size: 18px;
    line-height: 18px;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-left: 12px;
    }
  }


`;