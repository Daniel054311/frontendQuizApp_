
import React from "react";

// interface ScoreListPageProps {
//   title: string;
//   length: number;
//   score: number | 0;
// }

// export const ScoreListPage: React.FC<ScoreListPageProps> = ({ title, length, score }) => {
//   return (
//     <div>
//       <h1>ScoreListPage</h1>
//       <h2>Title: {title}</h2>
//       <h1>Score: {score} out of {length}</h1>
//     </div>
//   );
// };




export const ScoreListPage: React.FC<{ title: string ,length:number, score:number | 0 }> = (props) => {

  return (
    <div>
        
        <h1>ScoreListPage</h1>
        
       <h2>Title : {props.title}</h2> 
        
       <h1>Score :  {props.score} out of {props.length}</h1> 
        </div>
  )
}
