import styled from 'styled-components';

export const ModalSettingSrandartStyles = styled.div` 
    display: flex;
    
    display: none;

    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    border: 1px solid #000000;
    
    .legendary-modal_image{
        width: 30%;
    }
    .legendary-modal_context{
        margin-left: 70px;
        font-size: 16px;
        width: 70%;
        max-width: 600px;
        box-sizing: border-box;
        .main_button{
            margin: 0;
        }
    }
    .legendary-modal_text{
        margin-bottom: 50px;
    }
`;