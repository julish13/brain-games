import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

const mathItUp = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const intro = 'What is the answer of the expression?';

const getQuestionAndAnswer = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();

  const signs = Object.keys(mathItUp);
  const sign = signs[getRandomInt(signs.length)];

  const question = `${number1} ${sign} ${number2}`;
  const answer = String(mathItUp[sign](number1, number2));
  return [question, answer];
};

export default () => {
  playGame(intro, getQuestionAndAnswer);
};
