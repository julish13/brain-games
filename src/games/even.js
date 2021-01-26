import { getRandomInt, getAnswerByValue } from '../utils.js';
import game from '../index.js';

const isEven = (number) => number % 2 === 0;

const intro = `Answer "${getAnswerByValue(true)}" if the number is even, otherwise answer "${getAnswerByValue(false)}".`;

const getQuestionAndResult = () => {
  const question = getRandomInt();
  const result = getAnswerByValue(isEven(question));
  return [question, result];
};

export default () => {
  game(intro, getQuestionAndResult);
};
