import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";
const FormWrapper = styled.div`
    width: 100%;
    height: 1522px;
    background: var(--darkpurple);
    display: flex;
    align-items: center;
    flex-direction: column;
    h2{
        margin-top: 100px;
        color: white;
        font-family: "Integral CF Bold";
        font-size: 60px;
        font-style: italic;
    }
    p{
        max-width: 967px;
        max-height: 79px;
        text-align: center;
        margin-top: 50px;
        font-family: "MADE Outer Sans Light";
        font-weight: bold;
        font-size: 18px;
        color: white;
    }
    @media (max-width: ${__BREAKPOINTS.xxs}px){
        height: 1311px;
        h2{
            font-size: 40px;
            margin-top: 30px;
        }
        p{
            max-width: 355px;
            font-size: 14px;
            margin-top: 30px;
        }
    }
`;
const Contact = styled.div`
    width: 713px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    form{
        width: 100%;
        height: 100%;
        text-align: center;
        .group{
        p{
            margin: 0;
            font-family: "Integral CF";
            font-size: 18px;
            margin-top: 0;
            text-align: left;
        }
        input, textarea{
            outline: none;
            padding: 1em;
            width: 100%;
            display: block;
            margin-bottom: 35px;
            font-family: "Integral CF";
            font-size: 28px;
            height: 93px;
        }
        textarea{
            height: 342px;
        }
    }
    .form-end{
        display: flex;
        align-items: flex-start;

        button{
            width: calc(100% - 100px);
            margin: 0 50px;
            height: 60px;
            color: black;
            font-family: "Integral CF Bold";
            font-size: 18px;
        }
        input{
            width: 238px;
            height: 60px;
            background: red;
            font-size: 16px;
            display: flex;
        }
    }
    p{
        margin-top: 20px;
        font-size: 20px;
    }
}
@media (max-width: ${__BREAKPOINTS.xxs}px){
        width: calc(100% - 20px);
        margin: 0 10px;
        margin-top: 56px;
        form{
            width: 100%;
            .group{
                input, textarea{
                    margin-bottom: 43px;
                    height: 
                }
                textarea{
                 height: 320px;
                }
            }
        }
        .form-end{
            button{
                width: 355px;
            }
            input{
                display: none;
            }
        }
    }
`;
export{
    FormWrapper,
    Contact,
}