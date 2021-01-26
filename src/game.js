import cli, { getNameAndGreet } from './cli.js';

const ITERATIONS = 3;

export default (intro, getQuestionAndResult) => {
  const name = getNameAndGreet();

  let iterator = 0;

  do {
    console.log(intro);
    const [question, result] = getQuestionAndResult();
    console.log(`Question: ${question}`);
    const answer = cli('Your answer: ');

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    iterator += 1;

    if (iterator === ITERATIONS) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (iterator < ITERATIONS);
};
