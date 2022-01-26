import styled from "styled-components"
import { lg } from "../../../../styles/utils/media_queries"
import { __BREAKPOINTS } from "../../../../styles/utils/variables"

export const DropDownStyled = styled.ul`
  max-height: ${(props) => props.isOpen ? "200vh" : 0};
  transition: ${(props) => props.isOpen ? "1000ms" : "500ms"};
  overflow: hidden;
  list-style: none;
  padding: 0;
  background-color: var(--grey);

  grid-template-columns: repeat(${({ columnCounter }) => columnCounter}, 1fr);


  ${lg(`
  position:absolute; 
  
  transition:0.1s;
  top:100%;
  left:0;
  right:0;
  display: grid;
  grid-template-rows: auto auto;
  
  background-color: #fff;
  border-bottom:solid black 0.5px;
  `)}
  &.odd {
    .dropdown-item :first-child {
      grid-row: 1/3;

      .dropdown-item-link:hover {
        ${lg(`
      
         background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
      `
        )}
      }

      .dropdown-item-link {
        ${lg(`
        font-size: clamp(20px , 1.5vw , 30px);
         
      `
        )}
      }


    }

  }

  &.even {
    .dropdown-item:hover {
      .dropdown-item-link {

        ${lg(`
         background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
      `
        )}

      }
    }

  }

  .dropdown-item {

    font-size: 14px;
    line-height: 1;
    font-family: 'Integral CF Bold';
    position: relative;

    .iconArrow {
      display: none;
    }

    @media (min-width: ${__BREAKPOINTS.lg}px) {
      padding-bottom: calc(100% / 6 * ${({ columnCounter }) => columnCounter});
      &:hover {
        .dropdown-item {
          &-img {
            opacity: 1;
          }


          &-link {
            color: white;

            .iconArrow {
              display: inline;
              margin-left: 5px;
              margin-right: auto;
            }
          }

        }
      }
    }


    &-img {
      display: none;


      ${lg(`
      transition:0.3s;
      opacity:0;
      display : block;
      position:absolute;
      left:0;
      right:0;
      bottom:0px;
      top:0;
    
      img {
        object-position: 0 0;
      }
      `)}
    }

    &:hover {
      background-color: #d3d3d3;
    }

    &-link {
      padding: 15px 5px 15px 40px;
      width: 100%;
      display: block;
      ${lg(`
      transition:0.3s;
         position:absolute;
         left:0;
         right:0;
         bottom:0;
         top:0;
         z-index:4;
        padding:20px;
        display:flex;
        align-items:flex-end;
        font-size:20px;
        font-weight:600;
        justify-content:flex-start;
        text-align:left;
        
      `
      )}
    }

    &:last-child {
      margin-bottom: 15px;
      ${lg(`margin:0`)}
    }


    ${lg(`
    border:solid black 0.5px;
    margin:0;
    &:hover {
      background-color: #fff;
    }
    
  `)}

  }

`