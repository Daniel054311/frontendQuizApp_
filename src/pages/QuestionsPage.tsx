import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizData } from "../services/Questionsdata";
import { QuizData } from "../services/QuizTypes";
import Header from "../header/header";
import {
  LeftContainer,
  QPageWrapper,
  RightContainer,
} from "./QuetionsPage.styles";
import { CompletedPage } from "./completed/CompletedPage";
import { ItalicP } from "./home/Home.styles";

const QuestionsPage: React.FC = () => {
  const { quizId } = useParams<any>();

  const [questions, setQuestions] = useState<QuizData["questions"]>([]);
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [quizIcon, setQuizIcon] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [correctMarks, setCorrectMarks] = useState<number>(0);
  const [gameOver, setGameOver] = useState(true);
  const [optionSelected, setOptionSelected] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [trackerWidth, setTrackerWidth] = useState<number>(0);
  const [color, setColor] = useState<string>();
  const [buttonText, setButtonText] = useState<string>("Submit Answer");
  const alphabet = ["A", "B", "C", "D"];
  const [markedAnswers, setMarkedAnswers] = useState<string[]>([]);

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [optionsDisabled, setOptionsDisabled] = useState<boolean>(false);

  // null -not marked

  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (currentQuestion) {
      setSelectedOption(selectedOption);
  
      if (selectedOption === currentQuestion.answer) {
        setCorrectMarks((prevMarks) => prevMarks + 1);
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
  
      setOptionSelected(true);
      setOptionsDisabled(true);
    }

  };
  
  

  
  const next = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setTrackerWidth((prevWidth) => prevWidth + 10);
  };

  const handleNextQuestion = () => {


    if (currentQuestionIndex === questions.length - 1) {
      setGameOver(true);
    } else {
      if (optionSelected || optionsDisabled) {
        // Mark the answer before moving to the next question
        setMarkedAnswers((prevAnswers) => [
          ...prevAnswers,
          selectedOption === currentQuestion.answer ? "correct" : "wrong",
        ]);
        setOptionSelected(true);

        if (selectedOption === currentQuestion.answer) {
        
          setIsCorrect(true);
        } else if (selectedOption !== currentQuestion.answer) {
          setIsCorrect(false);
          //already true
         
        }
        setButtonText("Next Question");

      

        if (
          buttonText === "Next Question" &&
          currentQuestionIndex !== questions.length - 1
        ) {
         
          next();
          setButtonText("Submit Answer");
          setOptionsDisabled(false);
        }

        if (buttonText !== "Submit Answer" && isCorrect == true) {
          setIsCorrect(true);
        }
        if (buttonText !== "Submit Answer" && isCorrect == false) {
          setIsCorrect(false);
        }

        setOptionSelected(false);
        setButtonClicked(false);

        // setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setButtonClicked(true);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "Enter":
        if (optionSelected) {
          handleOptionClick(selectedOption!);
          handleNextQuestion();
        } else {
          setButtonClicked(true);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQuizzes: QuizData[] = await getQuizData();
        const selectedQuiz = fetchedQuizzes.find(
          (quiz) => quiz.id === parseInt(quizId!, 10)
        );

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
  }, [quizId]);

  const TOTAL_QUESTIONS = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <Header title={quizTitle} icon={quizIcon}  />



      
      {!gameOver && currentQuestion ? (
        <QPageWrapper>
          <LeftContainer
            trackerwidth={trackerWidth}
            style={{ position: "relative", height: "26rem" }}
          >
            <div>
              <ItalicP style={{ marginBottom: "28px" }}>
                Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}
              </ItalicP>

              <div style={{ marginBottom: "15%" }}>
                <p>{` ${currentQuestion.question}`}</p>
              </div>
            </div>

            <li
              className="sliderContainer"
              style={{
                padding: "3px",
                width: "100%",
                outline: "none",
                cursor: "default",
              }}
            >
              <div className="sliderTracker"></div>
            </li>
          </LeftContainer>

          <RightContainer>
            <div>
              <ul>
                {currentQuestion.options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      buttonText === "Next Question" ? null : handleOptionClick(option)
                    }
                    style={{
                      outline:
                        optionSelected && selectedOption === option
                          ? "2px solid #a729f5"
                          : "",
                         
                    }}
                    className={`alphabet ${
                     
                      buttonText === "Submit Answer"
                        ? ""
                        : selectedOption === option
                        ? isCorrect !== null
                          ? isCorrect
                            ? "correct"
                            : "wrong"
                          : ""
                        : ""
                    }`}
                    //         className={`
                    // ${
                    //   selectedOption !== null &&  // change back to the defULT WHICH IS "&&"
                    //   (selectedOption === option
                    //     ? option === currentQuestion.answer
                    //       ? "correct"
                    //       : "wrong"
                    //     : "")
                    // }

                    // `}
                  >
                    <span
                      className={`alphabet ${
                        selectedOption === option
                          ? isCorrect !== null
                            ? isCorrect
                              ? ""
                              : ""
                            : ""
                          : ""
                      }`}
                      style={{
                        backgroundColor:
                          optionSelected && selectedOption === option
                          ? buttonText !== "Next Question"
                              ? " #a729f5"
                              : ""
                            : "",

                        color:
                          optionSelected &&
                          selectedOption === option &&
                          buttonText !== "Next Question" 
                         
                            ? "#fff"
                            : "",
                      }}
                    >
                      {alphabet[index]}
                    </span>
                    <div className="option">{option}</div>
                    <picture style={{ width: "20px", height: "20px" }}>
                      <img src="" alt="" />
                    </picture>
                  </li>
                ))}
                <button
                  onClick={handleNextQuestion}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {buttonText}
                </button>
              </ul>
            </div>

            <div>
              <ul>
                {buttonClicked &&
                  !optionSelected &&
                  buttonText !== "Next Question" &&
                  !optionsDisabled && (
                    <div className="bottomWrong">
                      <picture style={{ width: "20px", height: "20px" }}>
                        <img src="" alt="" />
                      </picture>
                      <div>
                        <p>Please select an answer</p>
                      </div>
                    </div>
                  )}
              </ul>
            </div>
          </RightContainer>
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
