import React, { useEffect, useState } from "react";

import { themes } from "../themes/Themes";
import { Accesibilty, GlobalStyle, StyledApp } from "./header.styles";







const Header: React.FC<{ title: string ,icon:string}> = (props) => {


  // const {theme,handleThemeChange} = useContext(ThemeContext)
  // const [checked,setChecked] = useState(false)

  // const handleChangeBackgroundColor = (event:ChangeEvent<HTMLInputElement>) => {
  //  setChecked(event.target.checked)
  //   handleThemeChange()
  // }

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
  <GlobalStyle theme={isDarkMode ? themes.dark : themes.light} />
   
     


          <div className="darkModeContainer">
            <Accesibilty>
            <img src={props.icon} alt={props.title} />
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