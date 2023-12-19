// import mdark from '../../public/icon-moon-dark.svg'
// import sdark from '../../public/icon-sun-dark.svg'
// import mlight from '../../public/icon-moon-light.svg'
// import slight from '../../public/icon-sun-dark.svg'
import { DefaultTheme } from "styled-components";

export interface Theme extends DefaultTheme {
  name: string;
  background: {
    main: string;
    optionsdiv: string;
    optionselect: string;
    homeComponent: string;
    Buttons: string;
  };
  color: {
    main: string;
    optiontext: string;
    questionstext: string;
    Buttons:string,
  };
  backgroundimg:{
    sunimgcolor: string;
    moonimgcolor: string;
    main: string;
};
  
}
export interface Themes {
  light: Theme;
  dark: Theme;
}
export const themes: Themes = {
  light: {
    name: "light",
    background: {
      main: "#F4F6FA",
      optionsdiv: "#FFFFFF",
      optionselect: "#F4F6FA",
      homeComponent: "#F4F6FA",
      Buttons:"#A729F5",
    },
    color: {
      main:"#313E51",
      optiontext: "#3B4D66",
      questionstext: "#3B4D66",
      Buttons:"#FFFFFF",
    },
    backgroundimg: {
      sunimgcolor: '/icon-sun-dark.svg',
      moonimgcolor: '/icon-moon-dark.svg',
      main:'/pattern-background-desktop-light.svg',
  },
   
  },
  dark: {
    name: "dark",
    background: {
      main: "#313E51",
      optionselect: "#3B4D66",
      optionsdiv: "#3B4D66",
      homeComponent: "#313E51",
      Buttons:"#A729F5",
  
    },
    color: {
      main:"#FFFFFF",
      optiontext: "#FFFFFF",
      questionstext: "#FFFFFF",
      Buttons:"#FFFFFF",
    },
    backgroundimg:{
      sunimgcolor: '/icon-sun-light.svg',
      moonimgcolor: '/icon-moon-light.svg',
      main:'/pattern-background-desktop-dark.svg',
  },
   
  },
};