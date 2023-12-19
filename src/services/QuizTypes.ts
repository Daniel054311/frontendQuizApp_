

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
  
//  export interface QuizData {
     
//    quizzes: [id: number, title: string, icon: string]
//    questions: [id: number, question: string]
//    options: [];
//    answer: string
      
//   }

export interface QuizData {
  quizzes: {
    id: number | string;
    title: string;
    icon: string;
    questions: {
      id: number;
      question: string;
      options: string[];
      answer: string;
    }[];
  }[];
}
  

export interface RouteParams {
  quizId: number | any;
};