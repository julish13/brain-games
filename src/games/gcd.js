import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  const residual = number1 % number2;
  return (residual === 0) ? number2 : getGCD(number2, residual);
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));

  return [question, answer];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
};
