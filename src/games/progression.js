import playGame from '../index.js';
import { getRandomInt } from '../utils.js';

const MIN_DIFFERENCE = 1;
const MAX_DIFFERENCE = 10;
const MAX_SEQUENCE_LENGTH = 10;
const MIN_SEQUENCE_LENGTH = 5;

const intro = 'What number is missing in the progression?';

const getProgression = () => {
  const length = getRandomInt(MAX_SEQUENCE_LENGTH, MIN_SEQUENCE_LENGTH);
  const a1 = getRandomInt();
  const d = getRandomInt(MAX_DIFFERENCE, MIN_DIFFERENCE);
  const progression = [];

  progression.push(a1);

  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + d;
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
  playGame(intro, getQuestionAndAnswer);
};
