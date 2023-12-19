import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import {themes} from './themes/Themes';
import { GlobalStyle } from './header/header.styles';
import Header from './header/header';
import QuestionsPage from './pages/QuestionsPage';
import { CompletedPage } from './pages/completed/CompletedPage';





const App: React.FC = () => {
  return (
    <>
   
    <GlobalStyle theme={themes.light}/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="questions/:quizId" element={<QuestionsPage/>} />
      
   </Routes>
  </>
  )
}
export default App






