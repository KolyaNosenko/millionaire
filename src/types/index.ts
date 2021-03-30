interface AnswerDTO {
  index: number;
  text: string;
}

interface QuestionDTO {
  index: number;
  text: string;
  price: number;
  correctAnswer: number;
  answers: Array<AnswerDTO>;
}

interface GameDTO {
  id: string;
  questions: Array<QuestionDTO>;
}

export interface Question {
  index: number;
  text: string;
  price: number;
  correctAnswer: number;
  answer?: number;
  nextQuestionIndex?: number;
}

export type Answer = AnswerDTO;

export enum GameSteps {
  START,
  IN_PROGRESS,
  OVER,
}
