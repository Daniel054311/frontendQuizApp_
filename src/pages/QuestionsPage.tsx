import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizData } from "../services/Questionsdata";
import { QuizData } from "../services/QuizTypes";
import Header from "../header/header";
import {
  LeftContainer,
  QPageWrapper,
  RightContainer,
} from "./QuetionsPage.styles";
import { ItalicP } from "./home/Home.styles";

const QuestionsPage: React.FC = () => {
  const navigate = useNavigate();
  const { quizId } = useParams<any>();

  // Constants
  const SUBMIT_ANSWER = "Submit Answer";
  const NEXT_QUESTION = "Next Question";

  // State variables
  const [questions, setQuestions] = useState<QuizData["questions"]>([]);
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [quizIcon, setQuizIcon] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [correctMarks, setCorrectMarks] = useState<number>(0);
  const [optionSelected, setOptionSelected] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [trackerWidth, setTrackerWidth] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>(SUBMIT_ANSWER);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [optionsDisabled, setOptionsDisabled] = useState<boolean>(false);

  // Utility function to generate alphabet
  const generateAlphabet = (length: number) => (
    Array.from({ length }, (_, index) =>
      String.fromCharCode("A".charCodeAt(0) + index)
    )
  );

  const alphabet = generateAlphabet(questions.length);

  // Event handlers
  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion) {
      setSelectedOption(selectedOption);

      if (selectedOption === currentQuestion.answer) {
        setCorrectMarks((prevMarks) => prevMarks + 1);
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
      navigate("/completion", {
        state: {
          title: quizTitle,
          score: correctMarks,
          icon: quizIcon,
          length: questions.length,
        },
      });
    } else {
      if (optionSelected || optionsDisabled) {
        setOptionSelected(true);

        if (selectedOption === questions[currentQuestionIndex].answer) {
          setIsCorrect(true);
        } else {
          setIsCorrect(false);
        }

        setButtonText(NEXT_QUESTION);

        if (buttonText === NEXT_QUESTION) {
          next();
          setButtonText(SUBMIT_ANSWER);
          setOptionsDisabled(false);
        }

        setOptionSelected(false);
        setButtonClicked(false);
      } else {
        setButtonClicked(true);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "Enter":
        if (buttonText === SUBMIT_ANSWER) {
          if (optionSelected) {
            handleNextQuestion();
          } else {
            setButtonClicked(true);
          }
        } else if (buttonText === NEXT_QUESTION) {
          next();
          setButtonText(SUBMIT_ANSWER);
        }
        break;
      default:
        break;
    }
  };

  // Fetch quiz data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQuizzes: QuizData[] = await getQuizData();
        const selectedQuiz = fetchedQuizzes.find(
          (quiz) => quiz.id === parseInt(quizId!, 10)
        );

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
  }, [quizId]);

  // Current question details
  const currentQuestion = questions[currentQuestionIndex];
  const TOTAL_QUESTIONS = questions.length;

  return (
    <div>
      <Header title={quizTitle} icon={quizIcon} />

      {currentQuestion && (
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
                      buttonText === NEXT_QUESTION
                        ? null
                        : handleOptionClick(option)
                    }
                    style={{
                      outline:
                        optionSelected && selectedOption === option
                          ? "2px solid #a729f5"
                          : "",
                    }}
                    className={` ${
                      buttonText === SUBMIT_ANSWER
                        ? ""
                        : selectedOption === option
                        ? isCorrect
                          ? "correct"
                          : "wrong"
                        : ""
                    }`}
                  >
                    <span
                      className={` ${
                        buttonText !== NEXT_QUESTION ? "alphabet" : ""
                      }`}
                      style={{
                        backgroundColor:
                          optionSelected && selectedOption === option
                            ? buttonText !== NEXT_QUESTION
                              ? " #a729f5"
                              : ""
                            : "",
                        color:
                          optionSelected &&
                          selectedOption === option &&
                          buttonText !== NEXT_QUESTION
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
                  type="button"
                  onClick={handleNextQuestion}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleNextQuestion();
                    }
                  }}
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
                {buttonClicked && !optionSelected && buttonText !== NEXT_QUESTION && !optionsDisabled && (
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
      )}
    </div>
  );
};

export default QuestionsPage;
