import styled from "styled-components";

interface LeftContainerProps {

   trackerwidth: number; 

}
 
export const QPageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr  1fr; 
padding: 50px 7%;
grid-gap: 20%;
font-family: 'Rubik', sans-serif;

    @media  screen and (max-width: 900px){
      grid-template-columns:  1fr; 
      gap:64px;
      
   }
`;
export const LeftContainer = styled.div<LeftContainerProps>`
position:relative;
transition: all ease-in-out 0.3s;
.sliderContainer{
   position:absolute;
  bottom:12%;
   display:flex;
   position:absolute;
   align-items:center;

   @media  screen and (max-width: 900px){
      bottom:-70px;
      
   }

}

.sliderContainer .sliderTracker {
   mariging:0px;
   border-radius: 24px;
   z-index: 5;
   height: 5px;
   width: ${({ trackerwidth }) => `${trackerwidth}%`};
   background-color: #A729F5;
}


`;

