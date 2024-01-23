import React, { useEffect, useState } from "react";

import { themes } from "../themes/Themes";
import { Accesibilty, GlobalStyle, StyledApp } from "./header.styles";







const Header: React.FC<{ title: string ,icon:string}> = (props) => {




  const [isDarkMode,setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  useEffect(()=>{
    // save the current state to local storage whenever it change
    localStorage.setItem("isDarkMode",String(isDarkMode))
  },[isDarkMode])
 
  const handleChangeBackgroundColor = () =>{
    setIsDarkMode(!isDarkMode);
    
  }
  
  
 
    return (
    <>
  <GlobalStyle theme={isDarkMode ? themes.dark : themes.light} isCorrect={null} />
   
     


          <div className="darkModeContainer">
            <Accesibilty>
            <img src={props.icon} alt={props.title}
             style={{
              backgroundColor:
              props.title === "HTML"
                  ? "#FFF1E9"
                  : props.title === "CSS"
                  ? "#E0FDEF"
                  : props.title === "Accessibility"
                  ? "#F6E7FF"
                  : props.title === "JavaScript"
                  ? "#EBF0FF"
                  : "transparent",
            }}
             />

              <p style={{fontSize:"28px"}}>{props.title}</p>
            </Accesibilty>

            <div className='toglleContainer'>
            {/* <img src={SunImage} alt="sun toggle" style={{ fill: fillImage }}/> */}
           
            <div className="sunImage" ><img src="" alt="" /></div>
            <label className="switch">
              <input type="checkbox"  checked={isDarkMode}  onChange={handleChangeBackgroundColor}/>
              <div className="slider round"></div>
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