'use strict';

// Complete this algo
const minJumps = (arr) => {
  let jumps = 0;

  let oneJumpTo = [arr.length - 1];

  let found = false;
  while (!found) {
    jumps++;
    let newGoals = [];

    oneJumpTo.forEach((goal) => {
      for (let i = 0; i < goal; i++) {
        if (i + arr[i] >= goal) {
          if (i === 0) {
            found = true;
          }
          newGoals.push(i);
        }
      }
    });

    oneJumpTo = newGoals;
    console.log(oneJumpTo);
  }

  return jumps;
};

module.exports = minJumps;
