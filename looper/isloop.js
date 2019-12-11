'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let currentNode = linkedlist.head;
  let dictionary = {};
  while (currentNode.next) {
    const value = currentNode.value;
    if (dictionary[value]) {
      if (dictionary[value].includes(currentNode)) return true;
      dictionary[value] = [...dictionary[value], currentNode];
    }
    dictionary[value] = [currentNode];

    currentNode = currentNode.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
