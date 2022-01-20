import styled from 'styled-components';


export const LinkStyles = styled.section` 
  a {
    position: fixed;
    width: 140px;
    height: 140px;
    right: 60px;
    bottom: 60px;
    z-index: 100;
    img{
        animation: spin 5s linear 0s infinite;
    }
  }
  a: hover{
      img{
        animation-play-state: paused;
      }
  }
  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }

  @media (max-width: 1365px) {
      a {
        width: 100px;
        height: 100px;
      }
  }
  @media (max-width: 767px) {
      a {
        width: 75px;
        height: 75px;
      }
  }
`;
