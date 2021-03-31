import {
  createAnswer,
  createQuestion,
  createQuestionDTO,
  createStoreState,
} from "src/test-utils";
import {
  getFinalPrize,
  getQuestion,
  getQuestions,
  getQuestionsPrizes,
  getCurrentQuestion,
  getCurrentQuestionAnswers,
} from "./selectors";

describe("getQuestion", () => {
  test("When call with exist question, then return question", () => {
    const questionIdx = 1;
    const question = createQuestionDTO({ idx: questionIdx });
    const state = createStoreState({
      questions: {
        [question.idx]: question,
      },
    });

    const result = getQuestion(state)(questionIdx);

    expect(result).toEqual(question);
  });
});

describe("getCurrentQuestion", () => {
  test("When current question exist, then return question object for current question", () => {
    const questionIdx = 1;
    const question = createQuestionDTO({ idx: questionIdx });
    const state = createStoreState({
      questions: {
        [question.idx]: question,
      },
      currentQuestion: questionIdx,
    });

    const result = getCurrentQuestion(state);

    expect(result).toEqual(question);
  });

  test("When current question not found, then return nothing", () => {
    const questionIdx = 1;
    const state = createStoreState({
      currentQuestion: questionIdx,
    });

    const result = getCurrentQuestion(state);

    expect(result).toBeFalsy();
  });
});

describe("getCurrentQuestionAnswers", () => {
  test("When current question exist, then return answers", () => {
    const questionIdx = 1;
    const answer = createAnswer();
    const question = createQuestionDTO({ idx: questionIdx });
    const state = createStoreState({
      questions: {
        [question.idx]: question,
      },
      answers: {
        [question.idx]: [answer],
      },
      currentQuestion: questionIdx,
    });

    const result = getCurrentQuestionAnswers(state);

    expect(result).toEqual([answer]);
  });

  test("When answers for current question not found, then return empty array", () => {
    const questionIdx = 1;
    const state = createStoreState({
      currentQuestion: questionIdx,
    });

    const result = getCurrentQuestionAnswers(state);

    expect(result).toHaveLength(0);
  });
});

describe("getQuestions", () => {
  test("When call with questions, then return sorted arr of questions", () => {
    const question1Idx = 1;
    const question1 = createQuestionDTO({ idx: question1Idx });
    const question2Idx = 2;
    const question2 = createQuestionDTO({ idx: question2Idx });
    const state = createStoreState({
      questions: {
        [question1.idx]: question1,
        [question2.idx]: question2,
      },
    });

    const result = getQuestions(state);

    expect(result).toEqual([question1, question2]);
  });

  test("When call without questions, then return empty arr", () => {
    const state = createStoreState({
      questions: {},
    });

    const result = getQuestions(state);

    expect(result).toHaveLength(0);
  });
});

describe("getQuestionsPrizes", () => {
  test("When call for question, then calculate expected prize", () => {
    const question1Idx = 1;
    const question1Price = 100;
    const question1 = createQuestionDTO({
      idx: question1Idx,
      price: question1Price,
    });
    const question2Idx = 2;
    const question2Price = 200;
    const question2 = createQuestionDTO({
      idx: question2Idx,
      price: question2Price,
    });
    const state = createStoreState({
      questions: {
        [question1.idx]: question1,
        [question2.idx]: question2,
      },
    });

    const result = getQuestionsPrizes(state);

    expect(result[0]).toEqual(
      expect.objectContaining({
        idx: question2.idx,
        prize: question1Price + question2Price,
      })
    );

    expect(result[1]).toEqual(
      expect.objectContaining({
        idx: question1.idx,
        prize: question1Price,
      })
    );
  });

  test("When call without questions, then calculate expected prize", () => {
    const state = createStoreState({
      questions: {},
    });

    const result = getQuestionsPrizes(state);

    expect(result).toHaveLength(0);
  });
});

describe("getFinalPrize", () => {
  test("When correct answer to few questions, then calculate final prize", () => {
    const correctAnswer1Price = 100;
    const correctAnswer1 = createQuestion({
      idx: 1,
      answer: 1,
      correctAnswers: [1],
      price: correctAnswer1Price,
    });
    const correctAnswer2Price = 300;
    const correctAnswer2 = createQuestion({
      idx: 2,
      answer: 2,
      correctAnswers: [2],
      price: correctAnswer2Price,
    });
    const question3Idx = 3;
    const incorrectAnswer = createQuestion({
      idx: question3Idx,
      answer: 1,
      correctAnswers: [2],
    });
    const state = createStoreState({
      questions: {
        [incorrectAnswer.idx]: incorrectAnswer,
        [correctAnswer1.idx]: correctAnswer1,
        [correctAnswer2.idx]: correctAnswer2,
      },
    });

    const result = getFinalPrize(state);

    expect(result).toBe(correctAnswer1Price + correctAnswer2Price);
  });
});
