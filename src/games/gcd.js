import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

const intro = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b > a) [a, b] = [b, a];
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
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
