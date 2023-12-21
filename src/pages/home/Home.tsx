import React, { useEffect, useState } from 'react'
import {  GetStarted, HomeWrapper, ItalicP, Optionsdiv, TitlesDiv, } from './Home.styles';
import { QetQuizData } from '../../services/Questionsdata';
import {QuizData} from '../../services/QuizTypes';
import { Link } from 'react-router-dom';
import Header from '../../header/header';
// import {GlobalStyle} from '../../header/header.styles';

const Home: React.FC = () =>{

  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  const [quizzes, setQuizes] = useState<QuizData['quizzes']>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedQuizzes:QuizData = await QetQuizData();
        //console.log(fetchedQuizzes);

        if(fetchedQuizzes){
        setQuizes(fetchedQuizzes);
        // setIsLoading(false);
        }
        
       
      } catch (error) {
        console.error((error as Error).message);
        // setIsLoading(false);
        // setError('An error occurred while fetching data.');
        // Handle the error, e.g., show an error message to the user
      }
    };

    fetchData();
    
  }, []);

  return (

<>
<Header/>
<HomeWrapper>

<GetStarted>
<div className="leftContainer left-align">

<div className='welcomeTitle'>
<p >Welcome to the</p>
<h2>Frontend Quiz!</h2>
</div>

<ItalicP className='getStarted'>Pick a subject to get started.</ItalicP>
</div>

</GetStarted>

  <Optionsdiv>
  
  <ul>
  {quizzes && quizzes.map((quiz) => (

    <Link key={quiz.id} to={`/questions/${quiz.id}`}>
      {/* Assuming questionId should start from 1 */}
      <li key={quiz.id} style={{border:"none"}}>
       
          <img src={quiz.icon} alt={quiz.title} style={{padding:'2px'}}/>
        
        <TitlesDiv>
        {quiz.title}
        </TitlesDiv>
    
      </li>
    </Link>
  ))}
</ul>
  </Optionsdiv>


</HomeWrapper>

</>
  
  );
}
export default Home;