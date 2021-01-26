import getRandomInt from '../utils.js';
import cli, { getNameAndGreet } from '../cli.js';

const ITERATIONS = 3;
const answers = {
  yes: true,
  no: false,
};

export default () => {
  const name = getNameAndGreet();

  let iterator = 0;

  do {
    const number = getRandomInt();
    const isEven = number % 2 === 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${number}`);
    const answer = cli('Your answer: ');

    if (isEven === answers[answer]) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${name}!`);
      break;
    }

    iterator += 1;

    if (iterator === ITERATIONS) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (iterator < ITERATIONS);
};
