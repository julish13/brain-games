const MAX_INT = 100;

const answers = {
  yes: true,
  no: false,
};

export const getRandomInt = () => Math.floor(Math.random() * Math.floor(MAX_INT));

export const getAnswerByValue = (value) => Object.keys(answers).find(
  (key) => answers[key] === value,
);
