import React, { useState } from "react";
import { themes } from "../themes/Themes";
import { Accesibilty, GlobalStyle, StyledApp } from "./header.styles";




const Header: React.FC<{ title: string ,icon:string}> = (props) => {


  const [isDarkMode,setIsDarkMode] = useState(false);
 
  const handleChangeBackgroundColor = () =>{
    setIsDarkMode(!isDarkMode);
    
  }
  
 
    return (
    <>
    <GlobalStyle theme={isDarkMode ? themes.dark : themes.light} />
   
          
          <div className="darkModeContainer">
            <Accesibilty>
            <img src={props.icon} alt={props.title} />
              <p>{props.title}</p>
            </Accesibilty>

            <div className='toglleContainer'>
            {/* <img src={SunImage} alt="sun toggle" style={{ fill: fillImage }}/> */}
           
            <div className="sunImage" ><img src="" alt="" /></div>
            <label className="switch">
              <input type="checkbox" checked={isDarkMode}  onChange={handleChangeBackgroundColor}/>
              <span className="slider round"></span>
            </label>
            <div className="moonImage"><img src="" alt="" /></div>
            {/* <img src={MoonImage} alt="moon toggle" style={{color:'black'}} /> */}
            </div>
          </div>

          <StyledApp/>
         
    </>
      
     
    );
  }
  export default Header;