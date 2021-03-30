export interface AnswerDTO {
  idx: number;
  text: string;
}

export interface QuestionDTO {
  idx: number;
  text: string;
  price: number;
  correctAnswer: number;
  answers: Array<AnswerDTO>;
}

export interface GameDTO {
  id: string;
  questions: Array<QuestionDTO>;
}

export interface Question {
  idx: number;
  text: string;
  price: number;
  correctAnswer: number;
  answer?: number;
  nextQuestionIndex?: number;
}

export type Answer = AnswerDTO;

export enum GameScreens {
  START,
  IN_PROGRESS,
  OVER,
}
