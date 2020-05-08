//To convert a string into an integer. The strings simply represent the numbers in words.
//Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not

function parseInt(string) {
	const numbers = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };
	const bigNumbers = {
		'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19,
		'ten': 10, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90
	};
	const s = string.split('-').join(' ').split(' ');
	let res = 0, i = 0, label = true;

	while (i < s.length) {
		for (let char in numbers) {
			if (char === s[i] && s.length > 3 && s[i + 1] === 'hundred' && res && res % 1000 == 0) {
				res += numbers[char] * 100;
				i++;
				label = false;
			} else if (char === s[i] && s.length > 1) {
				res += numbers[char];
			}
			if (char === s[i] && s.length == 1) {
				res += numbers[char];
			}
		}
		for (let char in bigNumbers) {
			if (char === s[i]) res += bigNumbers[char];
		}
		if (s[i] === 'hundred' && label) res *= 100;
		if (s[i] === 'thousand') res *= 1000;
		if (s[i] === 'million') res *= 1000000;
		i++;
	}
	return res;
}