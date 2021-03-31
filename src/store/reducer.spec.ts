import { createAnswer, createQuestion, createStoreState } from "src/test-utils";
import { GameScreens } from "src/types";

import reducer from "./reducer";
import { nextQuestion, setAnswer } from "./actions";

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
