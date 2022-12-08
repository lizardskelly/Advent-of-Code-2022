import { day2 as input } from './inputs.mjs';

// Question: https://adventofcode.com/2022/day/2

// Part 1:

const scoreTracker = arr => {
  return arr.reduce((totalScore, round) => {
    let oppChoice = round[0], myChoice = round[2];
    if (myChoice === 'X') {
      totalScore += 1;
      if (oppChoice === 'A') totalScore += 3;
      else if (oppChoice === 'C') totalScore += 6;
    }
    else if (myChoice === 'Y') {
      totalScore += 2;
      if (oppChoice === 'A') totalScore += 6;
      else if (oppChoice === 'B') totalScore += 3;
    }
    else {
      totalScore += 3;
      if (oppChoice === 'B') totalScore += 6;
      else if (oppChoice === 'C') totalScore += 3;
    }
    return totalScore;
  }, 0);
}

console.log(scoreTracker(input))

// Answer: 13675

// Part 2:

const newScoreTracker = arr => {
  return arr.reduce((totalScore, round) => {
    let oppChoice = round[0], roundResult = round[2];
    if (roundResult === 'Y') {
      totalScore += 3;
      if (oppChoice === 'A') totalScore += 1;
      else if (oppChoice === 'B') totalScore += 2;
      else totalScore += 3;
    }
    else if (roundResult === 'Z') {
      totalScore += 6;
      if (oppChoice === 'A') totalScore += 2;
      else if (oppChoice === 'B') totalScore += 3;
      else totalScore += 1;
    }
    else {
      if (oppChoice === 'A') totalScore += 3;
      else if (oppChoice === 'B') totalScore += 1;
      else totalScore += 2;
    }
    return totalScore;
  }, 0);
}

console.log(newScoreTracker(input));

// Answer: 14184