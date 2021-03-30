import {
  createAnswer,
  createAnswerDTO,
  createGameDTO,
  createQuestion,
  createQuestionDTO,
  createStoreState
} from "src/test-utils";
import { GameScreens } from "src/types";

import reducer from "./reducer";
import { finishGame, initializeGame, nextQuestion, setAnswer, startGame } from "./actions";

test("When call startGame, then switch step to IN_PROGRESS", () => {
  const state = createStoreState({ screen: GameScreens.START });

  const result = reducer(state, startGame());

  expect(result.screen).toBe(GameScreens.IN_PROGRESS);
});

test("When call finishGame, then switch step to OVER", () => {
  const state = createStoreState({ screen: GameScreens.START });

  const result = reducer(state, finishGame());
  expect(result.screen).toBe(GameScreens.OVER);
});

describe("initializeGame", () => {
  test("When call, then create question key value pair by index", () => {
    const state = createStoreState();
    const question1Index = 1;
    const question1 = createQuestionDTO({
      idx: question1Index,
      text: "How are you?",
    });
    const question2Index = 2;
    const question2 = createQuestionDTO({
      idx: question2Index,
      text: "What about you?",
    });
    const game = createGameDTO({ questions: [question1, question2] });

    const result = reducer(state, initializeGame(game));

    expect(result.questions[question1Index]).toEqual(
      expect.objectContaining({
        idx: question1.idx,
        text: question1.text,
      })
    );
    expect(result.questions[question2Index]).toEqual(
      expect.objectContaining({
        idx: question2.idx,
        text: question2.text,
      })
    );
  });

  test("When call, then add nextQuestionIndex if next question exist", () => {
    const state = createStoreState();
    const question1Index = 1;
    const question1 = createQuestionDTO({ idx: question1Index });
    const question2Index = 2;
    const question2 = createQuestionDTO({ idx: question2Index });
    const game = createGameDTO({ questions: [question2, question1] });

    const result = reducer(state, initializeGame(game));

    expect(result.questions[question1Index].nextQuestionIndex).toEqual(
      question2Index
    );
    expect(result.questions[question2Index].nextQuestionIndex).toBeFalsy();
  });

  test("When call, then add answers key value pair by questionIndex", () => {
    const state = createStoreState();
    const answer1 = createAnswerDTO({ idx: 1, text: "OK" });
    const answer2 = createAnswerDTO({ idx: 2, text: "NO" });
    const question1Index = 1;
    const question1 = createQuestionDTO({
      idx: question1Index,
      answers: [answer2, answer1],
    });
    const game = createGameDTO({ questions: [question1] });

    const result = reducer(state, initializeGame(game));

    expect(result.answers[question1Index]).toEqual([answer1, answer2]);
  });

  test("When call, then set screen to IN_PROGRESS", () => {
    const state = createStoreState();
    const game = createGameDTO();

    const result = reducer(state, initializeGame(game));

    expect(result.screen).toEqual(GameScreens.IN_PROGRESS);
  });

  test("When call, then set currentQuestion to first question index", () => {
    const state = createStoreState();
    const question1Index = 1;
    const question1 = createQuestionDTO({
      idx: question1Index,
      text: "How are you?",
    });
    const question2Index = 2;
    const question2 = createQuestionDTO({
      idx: question2Index,
      text: "What about you?",
    });
    const game = createGameDTO({ questions: [question2, question1] });

    const result = reducer(state, initializeGame(game));

    expect(result.currentQuestion).toEqual(question1.idx);
  });

  test("When call, then set gameId", () => {
    const state = createStoreState();
    const gameId = "111";
    const game = createGameDTO({ id: gameId });

    const result = reducer(state, initializeGame(game));

    expect(result.gameId).toEqual(gameId);
  });
});

describe("setAnswer", () => {
  test("When call with existing question and answer, then set answer to currentQuestion", () => {
    const answerIndex = 3;
    const answer = createAnswer({ idx: answerIndex });
    const questionIndex = 1;
    const question = createQuestion({
      idx: questionIndex,
    });
    const state = createStoreState({
      questions: { [questionIndex]: question },
      answers: { [questionIndex]: [answer] },
      currentQuestion: questionIndex,
    });

    const result = reducer(state, setAnswer(answerIndex));

    expect(result.questions[questionIndex].answer).toBe(answerIndex);
  });

  test("When answer with inx not found, then return same state", () => {
    const questionIndex = 1;
    const question = createQuestion({
      idx: questionIndex,
    });
    const state = createStoreState({
      questions: { [questionIndex]: question },
      currentQuestion: questionIndex,
    });

    const result = reducer(state, setAnswer(5));

    expect(result).toEqual(state);
  });

  test("When question with inx not found, then return same state", () => {
    const answerIndex = 3;
    const answer = createAnswer({ idx: answerIndex });
    const questionIndex = 1;
    const question = createQuestion({
      idx: questionIndex,
    });
    const state = createStoreState({
      questions: { [questionIndex]: question },
      currentQuestion: 5,
      answers: { [questionIndex]: [answer] },
    });

    const result = reducer(state, setAnswer(answerIndex));

    expect(result).toEqual(state);
  });

  test("When answer to current question already done, then return same state", () => {
    const answerIndex = 3;
    const answer = createAnswer({ idx: answerIndex });
    const questionIndex = 1;
    const alreadyAnsweredQuestion = createQuestion({
      idx: questionIndex,
      answer: 0,
    });
    const state = createStoreState({
      questions: { [questionIndex]: alreadyAnsweredQuestion },
      answers: { [questionIndex]: [answer] },
      currentQuestion: questionIndex,
    });

    const result = reducer(state, setAnswer(answerIndex));

    expect(result).toEqual(state);
  });
});

describe("nextQuestion", () => {
  test("When call with not answered question, then return same state", () => {
    const questionIndex = 1;
    const question = createQuestion({
      idx: questionIndex,
      answer: undefined,
    });
    const state = createStoreState({
      questions: { [questionIndex]: question },
      currentQuestion: questionIndex,
    });

    const result = reducer(state, nextQuestion());

    expect(result).toEqual(state);
  });

  test("When answer incorrect, then set screen to over", () => {
    const questionIndex = 1;
    const question = createQuestion({
      idx: questionIndex,
      answer: 1,
      correctAnswer: 2,
    });
    const state = createStoreState({
      questions: { [questionIndex]: question },
      currentQuestion: questionIndex,
      screen: GameScreens.START,
    });

    const result = reducer(state, nextQuestion());

    expect(result.screen).toBe(GameScreens.OVER);
  });

  test("When answer correct and has nextQuestionIndex, then update currentQuestion", () => {
    const question1Index = 1;
    const question2Index = 2;
    const question1 = createQuestion({
      idx: question1Index,
      answer: 1,
      correctAnswer: 1,
      nextQuestionIndex: question2Index,
    });
    const question2 = createQuestion({
      idx: question2Index,
    });
    const state = createStoreState({
      questions: { [question1Index]: question1, [question2Index]: question2 },
      currentQuestion: question1Index,
    });

    const result = reducer(state, nextQuestion());

    expect(result.currentQuestion).toBe(question2Index);
  });

  test("When answer last question, then update currentQuestion", () => {
    const question1Index = 1;
    const question1 = createQuestion({
      idx: question1Index,
      answer: 1,
      correctAnswer: 1,
      nextQuestionIndex: undefined,
    });
    const state = createStoreState({
      questions: { [question1Index]: question1 },
      currentQuestion: question1Index,
    });

    const result = reducer(state, nextQuestion());

    expect(result.screen).toBe(GameScreens.OVER);
  });
});