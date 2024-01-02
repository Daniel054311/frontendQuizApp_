

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
  
