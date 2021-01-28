import { getRandomInt, getAnswerByValue } from '../utils.js';
import playGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const intro = `Answer "${getAnswerByValue(true)}" if the number is even, otherwise answer "${getAnswerByValue(false)}".`;

const getQuestionAndAnswer = () => {
  const question = getRandomInt();
  const answer = getAnswerByValue(isEven(question));
  return [question, answer];
};

export default () => {
  playGame(intro, getQuestionAndAnswer);
};
