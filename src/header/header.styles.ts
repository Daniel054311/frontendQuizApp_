import styled, { createGlobalStyle, DefaultTheme } from 'styled-components'
import { Theme } from '../themes/Themes';



export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme & Theme }>`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    font-family: 'Rubik', sans-serif;
    background-repeat:no-repeat;
    background-size:cover;
    background-image: url(${({theme}) => theme.backgroundimg.main});
    background-color: ${({ theme }) => theme.background.main};
    color: ${({ theme }) => theme.color.main};
  }

  h2{ 
    font-size:5rem;
 }
  p{
    font-size:2rem;
    font-style:normal;
  }

a{
  text-decoration:none;
}
ul{
  display:flex;
   justify-content:center;
   flex-direction:column;
   gap:12px;
}

img{
  background-color:#F4F6FA;
  border-radius:7px; 
}

li {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8%;
  transition: all ease-in-out 0.3s;
  padding: 15px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.background.optionsdiv};
  color: ${({ theme }) => theme.color.main};
  border: none;
}


li:active{
    color:${({theme}) => theme.color.spanActive};
    border:2px solid  #A729F5;
}
li: hover{
  border:2px solid  #A729F5;
}

li.correct {
  position: relative;
  border: 2px solid  ${({ theme }) => theme.border.correctEffect};
  
}
.correct span{
  background-color: ${({ theme }) => theme.border.correctEffect};
}

li.correct picture{
  z-index: 5;
  position: absolute;
  left:90%;
  background-repeat:no-repeat;
  background-size:cover;
  background-image: url(${({theme}) => theme.backgroundimg.correctEffect});
}
li.wrong picture{
  left:90%;
  z-index: 5;
  position: absolute;
  background-repeat:no-repeat;
  background-size:cover;
  background-image: url(${({theme}) => theme.backgroundimg.wrongEffect});
}

li.wrong {
  position: relative;
  border: 2px solid ${({ theme }) => theme.border.wrongEffect};
}

.wrong span {
  background-color: ${({ theme }) => theme.border.wrongEffect};
}


span{
  display:flex;
justify-content:center;
align-items:center;
border-radius:7px;
color:#313E51;
background-color:#F4F6FA;
height:40px;
width:40px;
}
span:hover{
  color: ${({ theme }) => theme.color.spanHover};
  background-color: ${({ theme }) => theme.background.spanHover};
}
span:active{
color:${({theme}) => theme.color.spanActive};
background-color:${({theme}) => theme.background.spanActive};
}

Button{
font-family: 'Rubik', sans-serif;
cursor:pointer;
border:none;
font-size:28px;
padding:20px;
transition: all ease-in-out 0.3s;
border-radius:24px;
background-color: ${({ theme }) => theme.background.Buttons};
color: ${({ theme }) => theme.color.Buttons};
}
Button:hover{
  opacity: 0.6;
}

ul .bottomWrong{
  display: flex;
  justify-content:center;
  flex-direction:row;
}

ul .bottomWrong p{
  font-size:20px;
  color: ${({ theme }) => theme.color.wongColor};
}


ul .bottomWrong picture{
  z-index: 5;
  left:63%;
  position: absolute;
  background-repeat:no-repeat;
  background-size:cover;
  background-image: url(${({ theme }) => theme.backgroundimg.wrongEffect});

  @media  screen and (max-width: 900px){
    left:20%;
    
  }
}


  .darkModeContainer {
    display: flex;
    padding:50px 7%;
    align-items: center;
    justify-content: space-between;
  }
  
  
  .darkModeContainer .toglleContainer{
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  

  .toglleContainer .sunImage{
    
    width:50px;
    background-repeat:no-repeat;
    background-image: url(${({theme}) => theme.backgroundimg.sunimgcolor});
  }
  .toglleContainer .moonImage{
    margin-left:25px;
    padding-bottom:6px;
    width:60px;
    background-repeat:no-repeat;
    background-image: url(${({theme}) => theme.backgroundimg.moonimgcolor});
  }
  


  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #a729f5;
    transition: background-color 0.4s, box-shadow 0.4s;
  }
  
  .slider:before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: transform 0.4s;
  }
  
  input:checked + .slider {
    background-color: #a729f5;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
 
`;



export const StyledApp = styled.div``;


export const Accesibilty = styled.div`
gap:24px;
display:flex;
align-items: center;
justify-content: center;
`;


 /* h1 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 32px;
    color: ${({ theme }:ThemeProps) => theme.color.htmlheaders};
  }
  h2 {
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 28px;
    color: ${({ theme }:ThemeProps) => theme.color.htmlheaders};
  }
  h3 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }:ThemeProps) => theme.color.htmlheaders};
  }
  h4 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }:ThemeProps) => theme.color.htmlheaders};
  }
  h5 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }:ThemeProps) => theme.color.htmlheaders};
  }
  h6 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }:ThemeProps) => theme.color.h6};
  }
  p {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }:ThemeProps) => theme.color.previewbody};
  }
  ol li {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    padding-left: 9px;
  }
  ul li {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 14px;
    padding-left: 9px;
    &::marker {
      color: #E46643;
      font-size: 6px;
    }
  }
  blockquote {
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 24px 24px 24px 20px;
    width: 90%;
    border-radius: 4px;
    border-left: 4px solid #E46643;
    background-color: ${({ theme }:ThemeProps) => theme.background.blockquote};;
  }
  blockquote p {
   
    color: ${({ theme }:ThemeProps) => theme.color.blockquote};;
  }
  blockquote p a {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }:ThemeProps) => theme.color.blockquote};;
  }
  p code {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }:ThemeProps) => theme.color.code};;
  }
  pre {
    margin: 0px;
    padding: 24px 24px 24px 20px;
    width: 90%;
    border-radius: 4px;
    background-color: ${({ theme }:ThemeProps) => theme.background.blockquote};;
  }
  pre code {
    white-space: pre-wrap;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }:ThemeProps) => theme.color.code};;
  }*/



