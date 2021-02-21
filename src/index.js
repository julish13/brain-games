import { getAnswer, getNameAndGreet } from './cli.js';

const ITERATIONS_COUNT = 3;

const playGame = (gameRules, getQuestionAndAnswer) => {
  const name = getNameAndGreet();

  let iterator = 0;

  do {
    console.log(gameRules);
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer is '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    iterator += 1;
  } while (iterator < ITERATIONS_COUNT);

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
