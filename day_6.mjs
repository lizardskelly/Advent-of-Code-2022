// Question: https://adventofcode.com/2022/day/6

import { day6 as input } from './inputs.mjs';

const packetMarkerSearch = buffer => {
  for (let i = 3; i < buffer.length; i++) {
    const uniqueCheck = new Set(buffer.slice(i - 3, i + 1));
    if (uniqueCheck.size === 4) {
      return i + 1;
    }
  };
}

console.log(packetMarkerSearch(input))

// Answer: 1876

// Part 2:

const messageMarkerSearch = buffer => {
  for (let i = 13; i < buffer.length; i++) {
    const uniqueCheck = new Set(buffer.slice(i - 13, i + 1));
    if (uniqueCheck.size === 14) {
      return i + 1;
    }
  };
}

console.log(messageMarkerSearch(input));

// Answer: 2202