const StringChallenge = (str1, str2) => {
	let charCount = {};

	// Count the total of character in the variable
	for (let char of str1) {
		if (charCount[char]) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}

	// check if str2 can be make from str1 character
	for (let char of str2) {
		if (!charCount[char] || charCount[char] === 0) {
			return "false";
		} else {
			charCount[char]--;
		}
	}

	return "true";
};

// PRINT EXAMPLE WITH TRUE RESULT
console.log(StringChallenge("cdore", "coder"));

// PRINT EXAMPLE WITH FALSE RESULT
console.log(StringChallenge("h3llko", "hello"));
