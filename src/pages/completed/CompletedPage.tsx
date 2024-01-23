import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Accesibilty } from "../../header/header.styles";
import { HomeWrapper } from "../home/Home.styles";
import { ScoredContainer, TotalScore } from "./Completed.styles";
import Header from "../../header/header";



export const CompletedPage: React.FC = () => {
  const location = useLocation();
  const { title, score, icon, length } = location.state as {
    title: string;
    score: number;
    icon: string;
    length: number;
  };

  const navigate = useNavigate();

  useEffect(() => {
    const playAgainButton = document.getElementById("playAgainButton");
    if (playAgainButton) {
      playAgainButton.focus();
    }
  }, []);

  const handlePlayAgainClick = () => {
    navigate("/");
  };

  const handleButtonClick = () => {
    handlePlayAgainClick();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div>
      <Header title={title} icon={icon} />
      <HomeWrapper>
        <div>
          <p style={{ fontSize: "4rem" }}>Quiz Completed</p>
          <h2 style={{ fontSize: "4rem" }}>You scored...</h2>
        </div>

        <ul>
          <li style={{ justifyContent: "center", outline: "none", cursor: "default" }}>
            <ScoredContainer>
              <Accesibilty>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </Accesibilty>
              <TotalScore>
                <h2>{score}</h2>
                <p>out of {length}</p>
              </TotalScore>
            </ScoredContainer>
          </li>

          <button
            style={{ width: "100%" }}
            id="playAgainButton"
            onClick={handleButtonClick}
            onKeyDown={handleKeyPress}
          >
            Play Again
          </button>
        </ul>
      </HomeWrapper>
    </div>
  );
};

export default CompletedPage;
