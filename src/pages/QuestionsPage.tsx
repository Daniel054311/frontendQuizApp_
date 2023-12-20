import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QetQuizData } from "../services/Questionsdata";
import { QuizData, RouteParams } from "../services/QuizTypes";
import Header from "../header/header";
import {
  LeftContainer,
  QPageWrapper,
  SpanContainer,
} from "./QuetionsPage.styles";
import { CompletedPage } from "./completed/CompletedPage";
import { ItalicP } from "./home/Home.styles";

const QuestionsPage: React.FC = () => {
  const { quizId } = useParams<RouteParams>();
  const [questions, setQuestions] = useState<
    QuizData["quizzes"][0]["questions"]
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

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion) {
      setSelectedOption(selectedOption);

      if (selectedOption === currentQuestion.answer) {
        setCorrectMarks((prevMarks) => prevMarks + 1);
      }
    }
    setSelectedOption(selectedOption);
    setOptionSelected(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      if (optionSelected) {
        setOptionSelected(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setButtonClicked(false); // Set buttonClicked to false when an option is selected
        setRangeValue((prevValue) => prevValue + 1);
      } else {
        setButtonClicked(true); // Set buttonClicked to true when no option is selected
      }
    }
  };

  const [rangeValue, setRangeValue] = useState<number>(0);

  const TOTAL_QUESTIONS = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Header title={quizTitle} icon={quizIcon} />
      {!gameOver && currentQuestion ? (
        <QPageWrapper>
          <LeftContainer progress={rangeValue}>
            <ItalicP>
              Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}
            </ItalicP>
            <p>{` ${currentQuestion.question}`}</p>
            <div className="slidderContainer">
              <input
                className="slidder"
                type="range"
                id="vol"
                name="vol"
                min="0"
                max={TOTAL_QUESTIONS}
                value={rangeValue}
                onChange={(e) => setRangeValue(parseInt(e.target.value, 10))}
              />
              <div className="sliderTracker"></div>
            </div>
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
                <p>Please select an answer</p>
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
