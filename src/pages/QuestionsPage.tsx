import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QetQuizData } from "../services/Questionsdata";
import { QuizData, RouteParams } from "../services/QuizTypes";
import Header from "../header/header";
import {  LeftContainer, QPageWrapper, SpanContainer } from "./QuetionsPage.styles";
import { CompletedPage } from "./completed/CompletedPage";
import { ItalicP } from "./home/Home.styles";



const QuestionsPage: React.FC = () => {
  const { quizId } = useParams<RouteParams>();
  const [questions, setQuestions] = useState<QuizData["quizzes"][0]["questions"]>([]);
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [quizIcon, setQuizIcon] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const alphabet = ["A", "B", "C", "D"];
  const [correctMarks, setCorrectMarks] = useState<number>(0);
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQuizzes: QuizData = await QetQuizData();
        let selectedQuiz;

        for (const quiz of fetchedQuizzes) {
          if (quiz.id === parseInt(quizId, 10)) {
            selectedQuiz = quiz;
            break;
          }
        }  
        if (selectedQuiz) {
          setGameOver(false);
          setQuizTitle(selectedQuiz.title);
          setQuizIcon(selectedQuiz.icon);
          setQuestions(selectedQuiz.questions);
        } else {
          console.log(`Quiz with ID ${quizId} not found.`);
        }
      } catch (error) {
        console.error((error as Error).message);
        // Handle the error, e.g., show an error message to the user
      }
    };

    fetchData();
  }, [quizId, history]);

  

  const [optionSelected, setOptionSelected] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  
  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion && selectedOption === currentQuestion.answer) {
      alert("Correct!");
      setCorrectMarks((prevMarks) => prevMarks + 1);

    } else {
      alert("Wrong!");
      setOptionSelected(true);
    }
  };


  const handleNextQuestion = () => {
    if( currentQuestionIndex === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      if(optionSelected){
        setOptionSelected(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }else {
        setButtonClicked(true);
      }
      
    }
  };
  const TOTAL_QUESTIONS = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      <Header title={quizTitle} icon={quizIcon} />
     
      {/* <h1>{quizTitle}</h1> */}
      {!gameOver && currentQuestion ?  (
        <QPageWrapper>
            <LeftContainer>
              
              <ItalicP>Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}</ItalicP>

            <p>{` ${currentQuestion.question}`}</p>
            </LeftContainer>
            
          <ul>
            {currentQuestion.options.map((option, index) => (
              
             <li key={index} onClick={() => handleOptionClick(option)} 
             correct={currentQuestion.answer }
             userCliked={currentQuestion.options}
             >
                <span className="alphabet">{alphabet[index]}</span>
                <div className="option">{option}</div>
              </li>
            ))}
          
          
          <button onClick={handleNextQuestion}>Next Question</button>
        
        {/* {  !optionSelected && buttonClicked ?( 
            <span style={{visibility:"visible"}}>Please select an option before moving to the next question.</span>
            ): 
            <span style={{visibility:"hidden"}}>Please select an option before moving to the next question.</span>
            }
             */}
          </ul>
         
        </QPageWrapper>
      ) : (

        <CompletedPage  title={quizTitle} length={questions.length} score={correctMarks} icon={quizIcon} />
     

      )}
     
    </div>
  );
};

export default QuestionsPage;
