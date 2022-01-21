import styled from 'styled-components';

export const DoubleBunner = styled.section` 
    .double_bunner {
      display: flex;
      justify-content: space-between;
    }
    .double_item {
    border: 1px solid black;
    color: white;
    width: 49.5%;
    background: linear-gradient(50.45deg, #612C8F 1.24%, rgba(97, 44, 143, 0) 70.46%);
    h3 {
    font-size: 80px;
    font-family: 'Neumatic Compressed Bold';
    }
    p {
    font-size: 28px;
    font-family: 'Integral CF Bold';
    font-style: italic;
    max-width: 440px;
    }
    }
    .main_button {
    margin: 0;
    }
`;