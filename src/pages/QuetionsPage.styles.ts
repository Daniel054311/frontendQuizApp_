import styled, { DefaultTheme } from "styled-components";
import { Theme } from '../themes/Themes';

export const QPageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr  1fr; 
align-items: center;
padding: 50px 7%;
grid-gap: 20%;
font-family: 'Rubik', sans-serif;

    @media  screen and (max-width: 900px){
      grid-template-columns:  1fr; 
      gap:64px;
      
   }
`;
export const LeftContainer = styled.div`
justify-content:center;
gap:40px;
display:flex;
flex-direction:column;
font-size:36px;

`;

// export const SpanContainer = styled.span`
// display:flex;
// justify-content:center;
// align-items:center;
// border-radius:7px;
// color:#313E51;
// background-color:#F4F6FA;
// height:40px;
// width:40px;

// &:active {
//    color:#FFFF;
//    background-color: #A729F5;
//  }
//  &:hover {
//    color:#A729F5;
//    background-color: #F6E7FF;
//  }

// `;

// export const Buttons = styled.button`
// padding:20px;
// border-radius:24px;

// `;