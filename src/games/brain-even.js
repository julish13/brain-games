import getRandomInt from '../utils.js';
import cli, { getNameAndGreet } from '../cli.js';

const ITERATIONS = 3;
const answers = {
  yes: true,
  no: false,
};

function getAnswerByValue(value) {
  return Object.keys(answers).find(key => answers[key] === value);
}

export default () => {
  const name = getNameAndGreet();

  let iterator = 0;

  do {
    const number = getRandomInt();
    const isEven = number % 2 === 0;

    console.log(`Answer "${getAnswerByValue(true)}" if the number is even, otherwise answer "${getAnswerByValue(false)}".`);
    console.log(`Question: ${number}`);
    const answer = cli('Your answer: ');

    if (isEven === answers[answer]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswerByValue(isEven)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    iterator += 1;

    if (iterator === ITERATIONS) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (iterator < ITERATIONS);
};
