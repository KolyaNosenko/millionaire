import {
  createAnswerDTO,
  createGameDTO,
  createQuestionDTO,
  createStoreState,
} from "src/test-utils";
import { GameScreens } from "src/types";

import reducer from "./reducer";
import { startGame, finishGame, initializeGame } from "./actions";

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
