// util for simply extract gatsbyImageData from WP for GatsbyImage component

export const getImageData = data => {
  try {
    if (!data && !data.localFile && !data.localFile.childImageSharp) return 'invalid data!';

    const { localFile: {childImageSharp: { gatsbyImageData } } } = data;

    return gatsbyImageData;
  } catch (err) {
    console.warn(err);

    return null;
  }
}

