import { StoreState } from "src/store";
import { AnswerDTO, GameDTO, GameSteps, QuestionDTO } from "src/types";

export function createStoreState(state: Partial<StoreState> = {}): StoreState {
  return {
    gameId: state.gameId || "123",
    screen: state.screen || GameSteps.START,
    currentQuestion: state.currentQuestion || 0,
    answers: {},
    questions: {},
  };
}

export function createGameDTO(gameDTO: Partial<GameDTO> = {}): GameDTO {
  return {
    id: "123",
    questions: [],
    ...gameDTO,
  };
}

export function createQuestionDTO(
  questionDTO: Partial<QuestionDTO> = {}
): QuestionDTO {
  return {
    index: 1,
    text: "How are you?",
    price: 100,
    correctAnswer: 1,
    answers: [],
    ...questionDTO,
  };
}

export function createAnswerDTO(answerDTO: Partial<AnswerDTO> = {}): AnswerDTO {
  return {
    index: 1,
    text: "Good",
    ...answerDTO,
  };
}
