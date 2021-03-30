import {
  createAnswerDTO,
  createGameDTO,
  createQuestionDTO,
  createStoreState,
} from "src/test-utils";
import { GameSteps } from "src/types";

import reducer from "./reducer";
import { startGame, finishGame, initializeGame } from "./actions";

describe("Reducer", () => {
  test("When call startGame, then switch step to IN_PROGRESS", () => {
    const state = createStoreState({ screen: GameSteps.START });

    const result = reducer(state, startGame());

    expect(result.screen).toBe(GameSteps.IN_PROGRESS);
  });

  test("When call finishGame, then switch step to OVER", () => {
    const state = createStoreState({ screen: GameSteps.START });

    const result = reducer(state, finishGame());
    expect(result.screen).toBe(GameSteps.OVER);
  });

  describe("initializeGame", () => {
    test("When call, then create question key value pair by index", () => {
      const state = createStoreState();
      const question1Index = 1;
      const question1 = createQuestionDTO({
        index: question1Index,
        text: "How are you?",
      });
      const question2Index = 2;
      const question2 = createQuestionDTO({
        index: question2Index,
        text: "What about you?",
      });
      const game = createGameDTO({ questions: [question1, question2] });

      const result = reducer(state, initializeGame(game));

      expect(result.questions[question1Index]).toEqual(
        expect.objectContaining({
          index: question1.index,
          text: question1.text,
        })
      );
      expect(result.questions[question2Index]).toEqual(
        expect.objectContaining({
          index: question2.index,
          text: question2.text,
        })
      );
    });

    test("When call, then add nextQuestionIndex if next question exist", () => {
      const state = createStoreState();
      const question1Index = 1;
      const question1 = createQuestionDTO({ index: question1Index });
      const question2Index = 2;
      const question2 = createQuestionDTO({ index: question2Index });
      const game = createGameDTO({ questions: [question2, question1] });

      const result = reducer(state, initializeGame(game));

      expect(result.questions[question1Index].nextQuestionIndex).toEqual(
        question2Index
      );
      expect(result.questions[question2Index].nextQuestionIndex).toBeFalsy();
    });

    test("When call, then add answers key value pair by questionIndex", () => {
      const state = createStoreState();
      const answer1 = createAnswerDTO({ index: 1, text: "OK" });
      const answer2 = createAnswerDTO({ index: 2, text: "NO" });
      const question1Index = 1;
      const question1 = createQuestionDTO({
        index: question1Index,
        answers: [answer2, answer1],
      });
      const game = createGameDTO({ questions: [question1] });

      const result = reducer(state, initializeGame(game));

      expect(result.answers[question1Index]).toEqual([answer1, answer2]);
    });
  });
});