import { day7 as input } from './inputs.mjs';

// Question: https://adventofcode.com/2022/day/7

// Part 1:

const parseInput = input => {
  return input
    .map(line => {
      return line.startsWith('$') ? 
        line.split(' ')[2] : 
        parseInt(line);
    })
    .filter(element => element);
}

const findDirectorySizes = feed => {
  const currentDirPath = [], dirResults = [];
  feed.forEach(data => {
    if (data === '..') {
      dirResults.push(currentDirPath.pop());
    }
    else {
      typeof data === 'string' ?
        currentDirPath.push({name: data, size: 0}) :
        currentDirPath.forEach(dir => dir.size += data);
    }
  });
  return dirResults.concat(currentDirPath);
}

const findSmallDirectories = directories => directories.filter(({ size }) => size <= 100000);

const sumDirectories = directories => directories.reduce((sum, { size }) => sum + size, 0);

console.log(
  sumDirectories(
    findSmallDirectories(
      findDirectorySizes(
        parseInput(input)
      )
    )
  )
);

// Answer: 1477771