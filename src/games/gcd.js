import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

const intro = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
// had to create new variables to avoid linter errors (no-param-reassign rule)
  let c = a;
  let d = b;

  if (d > c) [c, d] = [d, c];
  while (true) {
    if (d === 0) return c;
    c %= d;
    if (c === 0) return d;
    d %= c;
  }
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));

  return [question, answer];
};

export default () => {
  playGame(intro, getQuestionAndAnswer);
};
