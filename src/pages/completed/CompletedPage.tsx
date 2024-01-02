import { useNavigate } from "react-router-dom";
import { Accesibilty } from "../../header/header.styles";
import { HomeWrapper } from "../home/Home.styles";
import {  ScoredContainer, TotalScore } from "./Completed.styles";
import { useEffect } from "react";

export const CompletedPage: React.FC<{
  title: string,
  length: number,
  score: number | 0,
  icon:string
}> = (props) => {

  const navigate = useNavigate();

  const handlePlayAgainClick = () => {
    navigate("/");
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      handlePlayAgainClick();
    }
  };
useEffect(()=>{
  const playAgainButton = document.getElementById("playAgainButton");
  if(playAgainButton){
    playAgainButton.focus();
  }
},[]);

  return (

    <HomeWrapper >
      <div>
        <p>Quiz Completed</p>
        <h2>You scored...</h2>
      </div>

      <ul >
        <li style={{justifyContent:"center",border:"none",cursor:"default"}} >
          <ScoredContainer>
            <Accesibilty>
            <img src={props.icon} alt={props.title} />
              <p > {props.title}</p>
            </Accesibilty>
            <TotalScore>
            <h2>
            {props.score} 
            </h2>
            <p >out of {props.length}</p>
            </TotalScore>
          </ScoredContainer>
        </li>
        
        <button style={{width:"100%"}}
        id="playAgainButton"
         onKeyDown={handleKeyPress}
        >Play Again </button>
       
          
        
      </ul>
    </HomeWrapper>
  );
};
