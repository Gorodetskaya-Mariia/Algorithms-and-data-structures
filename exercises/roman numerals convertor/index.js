//Create a RomanNumerals class that can convert a roman numeral to and from an integer value. 

const _helperToRoman = new WeakMap();
const _helperFromRoman = new WeakMap();
class RomNumetals {
	constructor() {
		this.numerals = {
			1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 11: 'XI',
			10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC',
			100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM',
			1000: 'M'
		};
		this.result = "";
		this.number = 0;
		this.arrayElements = [];

		_helperToRoman.set(this, (number, n) => {
			if (Math.floor(number / n) >= 1) {
				n === 1000 ? this.result += 'M'.repeat(Math.floor(this.number / 1000))
					: this.result += this.numerals[Math.floor(number / n) * n];
				this.number = number % n;
			}
		});

		_helperFromRoman.set(this, (string) => {
			for (let char in this.numerals) {
				if (this.numerals[char] === string) this.number += +char;
			}
		});
	}

	toRoman(num) {
		this.result = ""; this.number = num;
		_helperToRoman.get(this)(this.number, 1000);
		_helperToRoman.get(this)(this.number, 100);
		_helperToRoman.get(this)(this.number, 10);
		if (this.number >= 1 && this.number < 10) {
			this.result += this.numerals[this.number];
		}
		return this.result;
	}

	fromRoman(str) {
		this.number = 0;
		_helperFromRoman.get(this)(str);
		if (!this.number) {
			let i = 0;
			this.arrayElements = str.split("").slice(0, str.length - 2);
			const lastElements = str.split("").slice(-2).join("");

			while (i < this.arrayElements.length) {
				for (let char in this.numerals) {
					if (this.numerals[char] === this.arrayElements[i]) this.number += +char;
				}
				i++;
			}
			_helperFromRoman.get(this)(lastElements);
		}
		return this.number;
	}
}

RomanNumerals = new RomNumetals();

