const MAX_INT = 100;

const answers = {
  yes: true,
  no: false,
};

export const getRandomInt = (max = MAX_INT, min = 0) => Math.floor(Math.random() * (max - min))
+ min;

export const getRandomElement = (array) => array[getRandomInt(array.length)];

export const getAnswerByValue = (value) => Object.keys(answers).find(
  (key) => answers[key] === value,
);
