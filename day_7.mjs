import { day7 as input } from './inputs.mjs';

// Question: https://adventofcode.com/2022/day/7

const parseInput = input => {
  return input
  .map(line => {
    return line.startsWith('$') ? 
    line.split(' ')[2] : 
    parseInt(line);
  })
  .filter(element => element);
}

const parsedInput = parseInput(input);

// Part 1:

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

const findSmallDirectories = directories => {
  return directories.filter(({ size }) => size <= 100000);
}

const sumDirectories = directories => {
  return directories.reduce((sum, { size }) => sum + size, 0);
}

const dirSizes = findDirectorySizes(parsedInput);

const smallDirs = findSmallDirectories(dirSizes);

console.log(sumDirectories(smallDirs));

// Answer: 1477771

// Part 2:

const TOTAL_SYSTEM_SIZE = 70000000;
const UPDATE_SIZE = 30000000;

const findAvailableSpace = (directories, systemSize) => {
  const root = directories.find(({ name }) => name === '/');
  return systemSize - root.size;
}

const findSmallestNeededDirectory = (directories, neededSize) => {
  return Math.min(...directories
    .filter(({ size }) => size >= neededSize)
    .map(({ size }) => size)
  );
}

const neededSpace = UPDATE_SIZE - findAvailableSpace(dirSizes, TOTAL_SYSTEM_SIZE); 

console.log(findSmallestNeededDirectory(dirSizes, neededSpace));

// Answer: 3579501