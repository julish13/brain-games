import readlineSync from 'readline-sync';

const cli = (question) => readlineSync.question(question);

const getNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = cli('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export { getNameAndGreet };
export default cli;
