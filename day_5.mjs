import { day5 as input } from './inputs.mjs';

// Question: https://adventofcode.com/2022/day/5

// Part 1:

const crateStacks1 = [
  ['F', 'T', 'C', 'L', 'R', 'P', 'G', 'Q'],
  ['N', 'Q', 'H', 'W', 'R', 'F', 'S', 'J'],
  ['F', 'B', 'H', 'W', 'P', 'M', 'Q'],
  ['V', 'S', 'T', 'D', 'F'],
  ['Q', 'L', 'D', 'W', 'V', 'F', 'Z'],
  ['Z', 'C', 'L', 'S'],
  ['Z', 'B', 'M', 'V', 'D', 'F'],
  ['T', 'J', 'B'],
  ['Q', 'N', 'B', 'G', 'L', 'S', 'P', 'H']
];

const commandParser = commands => {
  return commands.map(command => {
    return command
      .split(/move | from | to /)
      .slice(1)
      .map(string => Number(string));
  });
}

const crateMover = (stacks, commands) => {
  const parsedCommands = commandParser(commands);
  parsedCommands.forEach(command => {
    const receivingStackIndex = command[2] - 1;
    const movingCrates = 
      stacks[command[1] - 1]
        .splice(-command[0], command[0])
        .reverse();
    stacks[receivingStackIndex].push(...movingCrates);
  });
  return stacks.map(stack => stack.pop()).join('');
}

console.log(crateMover(crateStacks1, input));

// Answer: VGBBJCRMN

// Part 2: 

const crateStacks2 = [
  ['F', 'T', 'C', 'L', 'R', 'P', 'G', 'Q'],
  ['N', 'Q', 'H', 'W', 'R', 'F', 'S', 'J'],
  ['F', 'B', 'H', 'W', 'P', 'M', 'Q'],
  ['V', 'S', 'T', 'D', 'F'],
  ['Q', 'L', 'D', 'W', 'V', 'F', 'Z'],
  ['Z', 'C', 'L', 'S'],
  ['Z', 'B', 'M', 'V', 'D', 'F'],
  ['T', 'J', 'B'],
  ['Q', 'N', 'B', 'G', 'L', 'S', 'P', 'H']
];

const crateMover9001 = (stacks, commands) => {
  const parsedCommands = commandParser(commands);
  parsedCommands.forEach(command => {
    const receivingStackIndex = command[2] - 1;
    const movingCrates = 
      stacks[command[1] - 1].splice(-command[0], command[0])
    stacks[receivingStackIndex].push(...movingCrates);
  });
  return stacks.map(stack => stack.pop()).join('');
}

console.log(crateMover9001(crateStacks2, input));

// Answer: LBBVJBRMH