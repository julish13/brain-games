import { getRandomInt, getRandomElement } from '../utils.js';
import game from '../index.js';

const mathItUp = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const intro = 'What is the result of the expression?';

const getQuestionAndResult = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const sign = getRandomElement(Object.keys(mathItUp));

  const question = `${number1} ${sign} ${number2}`;
  const result = String(mathItUp[sign](number1, number2));
  return [question, result];
};

export default () => {
  game(intro, getQuestionAndResult);
};
