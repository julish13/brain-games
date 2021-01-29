import { getRandomInt, getAnswerByValue } from '../utils.js';
import playGame from '../index.js';

const intro = `Answer "${getAnswerByValue(true)}" if given number is prime. Otherwise answer "${getAnswerByValue(false)}".`;

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInt();
  const answer = getAnswerByValue(isPrime(question));
  return [question, answer];
};

export default () => {
  playGame(intro, getQuestionAndAnswer);
};
