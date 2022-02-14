import styled from "styled-components";
import ReactMarkdown from 'react-markdown'; 
import { CgClose, CgBorderStyleSolid } from "react-icons/cg";
import { __BREAKPOINTS } from "../../../styles/utils/variables";

const TrueBackground = styled.div`
    background: #EBEBEB;
`;

const Background = styled.div`
width: 100%;
height: 100%;
background: #EBEBEB;
z-index: 0;
padding-bottom: 100px;
`;
const Wrapper = styled.div`
    z-index: 5;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    background: transparent;
`;
const FaqWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0 30px 10%;
    border: 1px solid black;
    border-bottom: 0.5px solid black;
    border-top: 0.5px solid black;
    background: white;
    .content{
        h4{
            width: 75%;
            font-family: "Integral CF Bold";
            font-size: min(35px, 5vw);
            font-weight: bold;
            font-style: italic;
            color: #612C8F;
        }
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
        .content{
            h4{
                width: 70%;
                font-size: min(20px, 5vw);
            }
        }
    }
`;
const Answer = styled.div`
    max-height: ${props => props.close ? '0' : `${props.height}px`};
    width: 75%;
    height: auto;
    overflow: hidden;
    transition: max-height 0.3s ease;
    margin-top: 10px;
    @media (max-width: ${__BREAKPOINTS.sm}px){
        margin-top: 15px;
        width: auto;
    }
`;
const Text = styled(ReactMarkdown)`
    color: black;
    margin-top: 0;
    font-family: "MADE Outer Sans";
    font-size: min(18px, 3vw);
    @media (max-width: ${__BREAKPOINTS.sm}px){
        font-size: 1.5rem;
    }
`;
const ArrowWrap = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    user-select: none;
    position: relative;
    cursor: pointer;
    margin-right: 5%;
    
`;
const ArrowIcon = styled(CgClose)`
    position: relative;
    right: 0;
    font-size: max(37px, 2vw);
    color: #612C8F;
    transform: rotate(45deg);
    visibility: ${props => props.closed ? 'visible' : 'hidden'};  
`;
const CloseArrow = styled( CgBorderStyleSolid)`
    position: absolute;
    font-size: max(37px, 2vw);
    color: #612C8F;
    //visibility: ${props => props.closed ? 'hidden' : 'visible'};  
`;
export{
    TrueBackground,
    Background,
    Wrapper,
    FaqWrap,
    Answer,
    Text,
    ArrowWrap,
    ArrowIcon,
    CloseArrow,
}