import { day4 as input } from './inputs.mjs';

// Question: https://adventofcode.com/2022/day/4"

const parseInput = arr => {
  return arr.map(ranges => {
    return ranges
      .split(/,|-/)
      .map(string => Number(string));
  });
}

const parsedInput = parseInput(input);

// Part 1:

const overlapCheck = arr => {
  return arr.reduce((count, ranges) => {
      if (ranges[0] >= ranges[2] && ranges[1] <= ranges[3]) count++;
      else if (ranges[0] <= ranges[2] && ranges[1] >= ranges[3]) count++;
      return count;
    }, 0);
}

console.log(overlapCheck(parsedInput));

// Answer: 644

// Part 2:

const overlapCheckPlus = arr => {
  return arr.reduce((count, ranges) => {
    if (ranges[0] <= ranges[2] && ranges[1] >= ranges[2]) count++;
    else if (ranges[2] <= ranges[0] && ranges[3] >= ranges[0]) count++;
    return count;
  }, 0);
}

console.log(overlapCheckPlus(parsedInput));

// Answer: 926