import { day1 as input } from "./inputs.mjs";

// Question: https://adventofcode.com/2022/day/1

// Part 1:

const largestCalories = arr => {
  return Math.max(...arr.map(list => list.reduce((sum, calories) => sum += calories, 0)));
}

console.log(largestCalories(input))

// Answer: 67622

// Part 2:

const topThreeCalories = arr => {
  return arr
    .map(list => list.reduce((sum, calories) => sum += calories, 0))
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((sum, calories) => sum += calories);
}

console.log(topThreeCalories(input));

// Answer: 201491