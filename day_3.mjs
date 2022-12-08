import { day3 as input } from './inputs.mjs';

// Question: https://adventofcode.com/2022/day/3

// Part 1:

const LOWERCASE_OFFSET = 96;
const UPPERCASE_OFFSET = 38;

const sumPriority = arr => {
  return arr
    .map(string => {
      let i = 0;
      while (!string.includes(string[i], string.length / 2)) i++;
      return string[i];
    })
    .reduce((sum, letter) => {
      return letter === letter.toLowerCase() ?
        sum += (letter.charCodeAt(0) - LOWERCASE_OFFSET) :
        sum += (letter.charCodeAt(0) - UPPERCASE_OFFSET);
    }, 0);
}

console.log(sumPriority(input))

// Answer: 8085

// Part 2:

const sumBadges = arr => {
  let badgeLetters = [];
  for (let i = 0; i < arr.length; i += 3) {
    for (let x = 0; x < arr[i].length; x++) {
      if (arr[i + 1].includes(arr[i][x]) && arr[i + 2].includes(arr[i][x])) {
        badgeLetters.push(arr[i][x]);
        break;
      }
    }
  }
  return badgeLetters.reduce((sum, letter) => {
    return letter === letter.toLowerCase() ?
        sum += (letter.charCodeAt(0) - LOWERCASE_OFFSET) :
        sum += (letter.charCodeAt(0) - UPPERCASE_OFFSET);
  }, 0);
}

console.log(sumBadges(input));

// Answer: 2515