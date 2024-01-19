import styled from "styled-components";

interface LeftContainerProps {

   trackerwidth: number; 

}
 
export const QPageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr  1fr ; 
margin: 2vh 7%;
grid-gap: 20%;
font-family: 'Rubik', sans-serif;
position:relative;

    @media  screen and (max-width: 900px){
      grid-template-columns:  1fr; 
      gap:5%;
      
   }

   
`;
export const LeftContainer = styled.div<LeftContainerProps>`
position:relative;
display:flex;
flex-direction:column;
justify-content: space-between;
transition: all ease-in-out 0.3s;


.sliderContainer{
  width:auto;
   display:flex;
   align-items:center;
   position:absolute;
   bottom:5%;
}

.sliderContainer .sliderTracker {
   mariging:0px;
   border-radius: 24px;
   z-index: 5;
   height: 5px;
   width: ${({ trackerwidth }) => `${trackerwidth}%`};
   background-color: #A729F5;
}

@media  screen and (max-width: 900px){
   .sliderContainer{
      bottom:2%;
    }
   
}

`;

export const RightContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap: 3vh;
.bottomWrong{
   display: flex;
   justify-content:center;
   align-items:center;
   gap:5px;
   bottom:-50px;
 }

`;