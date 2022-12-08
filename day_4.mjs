import { day4 as input } from './inputs.mjs';

// Question: https://adventofcode.com/2022/day/4"

// Part 1:

const overlapCheck = arr => {
  return arr
    .map(ranges => {
      return ranges
        .split(/,|-/)
        .map(string => Number(string));
    })
    .reduce((count, ranges) => {
      if (ranges[0] >= ranges[2] && ranges[1] <= ranges[3]) count++;
      else if (ranges[0] <= ranges[2] && ranges[1] >= ranges[3]) count++;
      return count;
    }, 0);
}

console.log(overlapCheck(input));

// Answer: 644

// Part 2:

const overlapCheckPlus = arr => {
  return arr
  .map(ranges => {
    return ranges
      .split(/,|-/)
      .map(string => Number(string));
  })
  .reduce((count, ranges) => {
    if (ranges[0] <= ranges[2] && ranges[1] >= ranges[2]) count++;
    else if (ranges[2] <= ranges[0] && ranges[3] >= ranges[0]) count++;
    return count;
  }, 0);
}

console.log(overlapCheckPlus(input));

// Answer: 926