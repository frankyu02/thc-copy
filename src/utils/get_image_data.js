// util for simply extract gatsbyImageData from WP for GatsbyImage component

export const getImageData = data => {
  if (!data && !data.localFile) return 'invalid data!';

  const { localFile: {childImageSharp: { gatsbyImageData } } } = data;

  return gatsbyImageData;
}

