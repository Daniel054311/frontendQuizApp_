import { Link } from "react-router-dom";
import { Accesibilty } from "../../header/header.styles";
import { HomeWrapper } from "../home/Home.styles";
import {  ScoredContainer, TotalScore } from "./Completed.styles";

export const CompletedPage: React.FC<{
  title: string,
  length: number,
  score: number | 0,
  icon:string
}> = (props) => {

  

  return (

    <HomeWrapper>
      <div>
        <p>Quiz Completed</p>
        <h2>You scored...</h2>
      </div>

      <ul>
        <li style={{justifyContent:"center"}}>
          <ScoredContainer>
            <Accesibilty>
            <img src={props.icon} alt={props.title} />
              <p> {props.title}</p>
            </Accesibilty>
            <TotalScore>
            <h2>
            {props.score} 
            </h2>
            <p>out of {props.length}</p>
            </TotalScore>
          </ScoredContainer>
        </li>
        <Link to={"/"} >
        <button style={{width:"100%"}}>Play Again </button>
        </Link>
          
        
      </ul>
    </HomeWrapper>
  );
};
