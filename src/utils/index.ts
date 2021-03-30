export function sortQuestions<T extends { idx: number }>(
  questions: Array<T>
): Array<T> {
  return [...questions].sort(
    (question1, question2) => question1.idx - question2.idx
  );
}

export function sortAnswers<T extends { idx: number }>(
  answers: Array<T>
): Array<T> {
  return [...answers].sort(
    (question1, question2) => question1.idx - question2.idx
  );
}
