/* global m */


import React, {  useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { QetQuizData } from "../services/Questionsdata";
import { QuizData  } from "../services/QuizTypes";
import Header from "../header/header";
import {
  LeftContainer,
  QPageWrapper,
 
} from "./QuetionsPage.styles";
import { CompletedPage } from "./completed/CompletedPage";
import { ItalicP } from "./home/Home.styles";



const QuestionsPage: React.FC = () => {
  const { quizId } = useParams<any>();
  const [questions, setQuestions] = useState<
    QuizData[][0]["questions"]
  >([]);
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [quizIcon, setQuizIcon] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const alphabet = ["A", "B", "C", "D"];
  const [correctMarks, setCorrectMarks] = useState<number>(0);
  const [gameOver, setGameOver] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQuizzes: QuizData[] = await QetQuizData();
        let selectedQuiz;

        for (const quiz of fetchedQuizzes) {
          if (quiz.id === parseInt(quizId!, 10)) {
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

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [trackerWidth, setTrackerWidth] = useState<number>(0);

  // const handleOptionClick = (selectedOption: string) => {
  //   const currentQuestion = questions[currentQuestionIndex];

  //   if (currentQuestion && selectedOption === currentQuestion.answer) {
  //     alert("Correct!");
  //     setCorrectMarks((prevMarks) => prevMarks + 1);
  //     setButtonClicked(true);
  //   } else {
  //     alert("Wrong!");
  //   }

  //   setSelectedOption(selectedOption);
  //   setOptionSelected(true);
  // };

  const handleOptionClick = (selectedOption: string) => {
    if (optionSelected) {
      // User has already made a choice, ignore the click
      return;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
  
    if (currentQuestion) {
      setSelectedOption(selectedOption);
  
      if (selectedOption === currentQuestion.answer) {
        setCorrectMarks((prevMarks) => prevMarks + 1);
      }
    }
    setOptionSelected(true);
  
    // Disable other options
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].options.forEach((option, index) => {
      if (option !== selectedOption) {
        updatedQuestions[currentQuestionIndex].options[index] ;
      }
    });
    setQuestions(updatedQuestions);
  };
  


  const handleNextQuestion = () => {
    if (currentQuestionIndex === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      if (optionSelected) {
        setOptionSelected(false);
        setButtonClicked(false); 
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
       // Set buttonClicked to false when an option is selected
        
        setTrackerWidth((prevWidth) => prevWidth + 10);
      } else {
        setButtonClicked(true); // Set buttonClicked to true when no option is selected
      }
    }
  };

// onkeypress
const handleKeyDown = (event: React.KeyboardEvent) => {
  switch (event.key) {
    case "Enter":
      if (optionSelected){
      // Handle the logic for selecting an option and moving to the next question
      handleOptionClick(selectedOption!);
      handleNextQuestion();
      }else{
        setButtonClicked(true);
      }
      break;



    default:
      
      break;
  }
};


  const TOTAL_QUESTIONS = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <Header title={quizTitle} icon={quizIcon} />
      {!gameOver && currentQuestion ? (
        <QPageWrapper>
          <LeftContainer  trackerwidth={trackerWidth}>
            <ItalicP style={{marginBottom:"28px"}}>
              Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}
            </ItalicP>
            
            <div style={{marginBottom:"15%"}}>
            <p>{` ${currentQuestion.question}`}</p>
            </div>

            <li className="sliderContainer" style={{padding:"3px"}}>
              <div className="sliderTracker"></div>
              </li>
              
          </LeftContainer>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`
            ${
              selectedOption !== null &&
              (selectedOption === option
                ? option === currentQuestion.answer
                  ? "correct"
                  : "wrong"
                : "")
            }`}
              >
                <span className="alphabet">{alphabet[index]}</span>
                <div className="option">{option} </div>
                <picture style={{ width: "20px", height: "20px" }}>
                  <img src="" alt="" />
                </picture>
              </li>
            ))}
            <button onClick={handleNextQuestion}>Submit Answer</button>

            {buttonClicked && !optionSelected && (
              <div className="bottomWrong">
                <picture style={{ width: "20px", height: "20px" }}>
                  <img src="" alt="" />
                </picture>
                <div>
                <p >Please select an answer</p>
                </div>
              </div>
 
            )}
          </ul>
        </QPageWrapper>
      ) : (
        <CompletedPage
          title={quizTitle}
          length={questions.length}
          score={correctMarks}
          icon={quizIcon}
        />
      )}
    </div>
  );
};

export default QuestionsPage;
