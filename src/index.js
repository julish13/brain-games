import cli, { getNameAndGreet } from './cli.js';

const ITERATIONS = 3;

const playGame = (intro, getQuestionAndAnswer) => {
  const name = getNameAndGreet();

  let iterator = 0;

  do {
    console.log(intro);
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = cli('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    iterator += 1;

    if (iterator === ITERATIONS) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (iterator < ITERATIONS);
};

export default playGame;
