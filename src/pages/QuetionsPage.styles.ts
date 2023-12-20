import styled, { DefaultTheme } from "styled-components";

interface LeftContainerProps {
   progress: number;// Add the 'value' prop to the interface
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

input[type="range"] {
   width:100%;
   -webkit-appearance: none;
  accent-color: white;
  cursor: pointer;
  height: 8px;
  background-repeat: no-repeat;
}
.sliderTracker{
   z-index: 5;
   position:absoluet;
   height: 8px;
   background-size: ${({ progress }) => `${progress}% 100%`};
   background-color: green;
}
input[type="range"]::-webkit-slider-thumb {
   -webkit-appearance: none;
   height: 20px;
   width: 20px;
   background-color: white;
   border-radius: 50%;
}

`;

