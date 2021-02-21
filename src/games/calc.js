import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

const MathOperations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const gameRules = 'What is the answer to this expression?';

const getQuestionAndAnswer = () => {
  const leftOperand = getRandomInt();
  const rightOperand = getRandomInt();

  const operators = Object.keys(MathOperations);
  const operator = operators[getRandomInt(operators.length)];

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const answer = String(MathOperations[operator](leftOperand, rightOperand));
  return [question, answer];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
};
