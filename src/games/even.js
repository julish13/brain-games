import { getRandomInt, getAnswerByValue } from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInt();
  const answer = getAnswerByValue(isEven(question));
  return [question, answer];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
};
