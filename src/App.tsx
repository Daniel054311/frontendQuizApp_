import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import QuestionsPage from './pages/QuestionsPage';
import CompletedPage from './pages/completed/CompletedPage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="questions/:quizId" element={<QuestionsPage />} />
        <Route path="completion" element={<CompletedPage />} />
      </Routes>
    </>
  );
};

export default App;
