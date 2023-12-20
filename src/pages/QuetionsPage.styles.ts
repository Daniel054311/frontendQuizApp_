import styled, { DefaultTheme } from "styled-components";

interface LeftContainerProps {
   value: number; // Add the 'value' prop to the interface
}
 
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
export const LeftContainer = styled.div<LeftContainerProps>`
justify-content:center;
gap:40px;
display:flex;
flex-direction:column;
font-size:36px;

div .slidder{
   -webkit-appearance: none;
   accent-color: white;
   cursor: pointer;
   height: 8px;
   background-color: #3B4D66;
   background-size: 30% 100%;
   background-repeat: no-repeat;
}

`;

