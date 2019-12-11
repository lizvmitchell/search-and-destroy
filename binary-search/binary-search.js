'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
// 	let binarySearch = [...array];
// 	while (binarySearch.length > 0) {
// 		let middle = Math.floor(binarySearch.length/2);
// 		if (binarySearch[middle] === target) return true;
// 		else if (binarySearch[middle] > target) {
// 			binarySearch = binarySearch.slice(0, middle);
// 		}
// 		else {
// 			binarySearch = binarySearch.slice(middle+1);
// 		}
// 	}
// 	return false;
// };

const binarySearch = (array, target) => {
	let start = 0;
	let end = array.length-1;
	while (end-start > 0) {
		console.log('start: ', start, " end: ", end);
		let middle = start + Math.floor((end-start)/2);
		if (start !== 0 && end-start < 2) middle = start + 1;
		if (array[middle] === target) return true;
		else if (array[middle] > target) {
			if (end === middle) return false;
			end = middle;
		}
		else {
			start = middle;
		}
	}
	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
