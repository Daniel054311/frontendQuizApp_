

export interface Question {
    id: number;
    text: string;
    options: string[];
    answer: string;
  }
  
  export interface Quiz {
      id: number;
      title: string;
      icon: string;
      questions: Question[];
  }
  


export interface QuizData {
    id: number | string;
    title: string;
    icon: string;
    questions: {
      id: number;
      question: string;
      options: string[];
      answer: string;
    }[];
   
}
  
