import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QetQuizData } from "../services/Questionsdata";
import { QuizData, RouteParams } from "../services/QuizTypes";
import Header from "../header/header";
import {  LeftContainer, QPageWrapper, SpanContainer } from "./QuetionsPage.styles";
import { CompletedPage } from "./completed/CompletedPage";



const QuestionsPage: React.FC = () => {
  const { quizId } = useParams<RouteParams>();
  const [questions, setQuestions] = useState<QuizData["quizzes"][0]["questions"]>([]);
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [quizIcon, setQuizIcon] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const alphabet = ["A", "B", "C", "D"];
  const [correctMarks, setCorrectMarks] = useState<number>(0);
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

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion && selectedOption === currentQuestion.answer) {
      alert("Correct!");
      setCorrectMarks((prevMarks) => prevMarks + 1);

    } else {
      alert("Wrong!");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      <Header title={quizTitle} icon={quizIcon} />
     
      {/* <h1>{quizTitle}</h1> */}
      {currentQuestion ? (
        <QPageWrapper>
            <LeftContainer>

            <p>{` ${currentQuestion.question}`}</p>
            </LeftContainer>
            
          <ul>
            {currentQuestion.options.map((option, index) => (
             <li key={index} onClick={() => handleOptionClick(option)} >
                <SpanContainer className="alphabet">{alphabet[index]}</SpanContainer>{" "}
                <span className="option">{option}</span>
              </li>
            ))}
          
          
          <button onClick={handleNextQuestion}>Next Question</button>
         
            
          </ul>
         
        </QPageWrapper>
      ) : (

        <CompletedPage  title={quizTitle} length={questions.length} score={correctMarks} icon={quizIcon} />
     

      )}
     
    </div>
  );
};

export default QuestionsPage;
