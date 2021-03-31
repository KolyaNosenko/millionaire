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

export async function sleep(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function normalizePrice(score: number | string): string {
  return `$${score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const deriveAlphabetCharByIndex = (index: number): string => {
  return alphabet[index];
};

export const TIMEOUT_AFTER_ANSWER = 800;
