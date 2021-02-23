const MAX_INT = 100;

const answers = new Map([[true, 'yes'], [false, 'no']]);

const getRandomInt = (max = MAX_INT, min = 0) => Math.floor(Math.random() * (max - min))
+ min;

const getAnswerByValue = (value) => answers.get(value);

export { getRandomInt, getAnswerByValue };
