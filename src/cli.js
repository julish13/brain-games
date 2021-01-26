import readlineSync from 'readline-sync';

const cli = (question) => {
  const name = readlineSync.question(question);
  console.log(`Hello ${name}!`);
};
export default cli;
