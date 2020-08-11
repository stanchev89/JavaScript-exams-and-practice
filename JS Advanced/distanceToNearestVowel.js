const vowels = [ "a", "i", "u", "e", "o", "A", "I", "U", "E", "O" ];

function distanceToNearestVowel(str) {
	const input = str.split("");
	const result = findNearestVowel(input);

	console.log(result);
	return result;
}
function findNearestVowel(arr) {
	const result = arr.reduce((acc, curr, index) => {
		if (vowels.includes(curr)) {
			acc.push(0);
			return acc;
		}
		let stringRightCheck, stringLeftCheck;
		if (arr[index + 1] !== undefined && index !== 0) {
			stringRightCheck = arr.slice(index + 1);
			stringLeftCheck = arr.slice(0, index).reverse();
		} else if (arr[index + 1] !== undefined) {
			stringRightCheck = arr.slice(index + 1);
		} else {
			stringLeftCheck = arr.slice(0, index).reverse();
		}
		const result = compareArrs(stringRightCheck, stringLeftCheck);
		if (result === "No vowels in the string") {
			index = arr.length + 1;
			return (acc = "No vowels in the string");
		}
		acc.push(result);
		return acc;
	}, []);
	return result;
}

function compareArrs(arr1, arr2) {
	const leftSide = findFirstVowel(arr1);
	const rightSide = findFirstVowel(arr2);
	if (leftSide === Number.MAX_SAFE_INTEGER && rightSide === Number.MAX_SAFE_INTEGER) {
		return "No vowels in the string";
	}
	return Math.min(leftSide, rightSide);
}

function findFirstVowel(arr) {
	if (arr === undefined) {
		return Number.MAX_SAFE_INTEGER;
	}
	const check = arr.map((char) => vowels.includes(char));
	if (!check.includes(true)) {
		return Number.MAX_SAFE_INTEGER;
	}
	for (let i = 0; i < arr.length; i++) {
		if (vowels.includes(arr[i])) {
			return i + 1;
		}
	}
}
distanceToNearestVowel("bbbbbbbbbbbbbbbbba");
