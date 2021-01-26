const MAX_INT = 100;

const answers = {
  yes: true,
  no: false,
};

export const getRandomInt = (max = MAX_INT) => Math.floor(Math.random() * max);

export const getRandomElement = (array) => array[getRandomInt(array.length)];

export const getAnswerByValue = (value) => Object.keys(answers).find(
  (key) => answers[key] === value,
);
