import playGame from '../index.js';
import { getRandomInt } from '../utils.js';

const MIN_STEP = 1;
const MAX_STEP = 10;
const MAX_SEQUENCE_LENGTH = 10;
const MIN_SEQUENCE_LENGTH = 5;

const gameRules = 'What number is missing in the progression?';

const getProgression = () => {
  const length = getRandomInt(MAX_SEQUENCE_LENGTH, MIN_SEQUENCE_LENGTH);
  const seed = getRandomInt();
  const step = getRandomInt(MAX_STEP, MIN_STEP);
  const progression = [];

  progression.push(seed);

  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const indexOfHidden = getRandomInt(progression.length);

  const answer = String(progression[indexOfHidden]);

  const progressionModified = [...progression];
  progressionModified[indexOfHidden] = '..';

  const question = progressionModified.join(' ');

  return [question, answer];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
};
