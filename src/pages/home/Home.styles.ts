import styled, { DefaultTheme } from "styled-components";
import { Theme } from "../../themes/Themes";



export const HomeWrapper = styled.div`
font-family: 'Rubik', sans-serif;
display: grid;
grid-template-columns: 1fr  1fr; 
align-items: center;
padding: 50px 7%;

    @media  screen and (max-width: 900px){
      grid-template-columns:  1fr; 
      gap:64px;
      
   }

`;
export const GetStarted = styled.div`
.leftContainer{
   display:flex;
  gap:48px;
   flex-direction:column;
  
}
.welcomeTitle{
gap:8px;   
}


@media  screen and (max-width: 900px){
   .leftContainer{
      justify-content:center;
      display:flex;
     gap:48px;
      flex-direction:column;
   }
   
}

`;
export const ItalicP = styled.p`
font-size:20px;
   font-style: italic;
`; 

export const TitlesDiv = styled.div`
   display:flex;
   flex-direction:column;

`;

// console.log(theme);


export const Optionsdiv = styled.div<{ theme: DefaultTheme & Theme }>`
  
 
`;



