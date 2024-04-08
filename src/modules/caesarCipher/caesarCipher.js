// Info about Caesar Cipher: https://crypto.interactive-maths.com/caesar-shift-cipher.html

function caesarCipher(string, shiftFactor) {
	// Convert the string into an array
	const stringArray = string.split("");

	const finalString = stringArray.map((char) => {
		// Get the character code
		const charCode = char.charCodeAt();

		// Check if it's a letter
		if (char.match(/[a-zA-Z]/)) {
			// Determine the case
			const isUpperCase = charCode >= 65 && charCode <= 90;
			const isLowerCase = charCode >= 97 && charCode <= 122;

			// Apply the shift
			let shiftedCode = charCode + shiftFactor;

			// Handle wrapping
			if (isUpperCase) {
				if (shiftedCode > 90) {
					shiftedCode -= 26;
				}
				if (shiftedCode < 65) {
					shiftedCode += 26;
				}
			}

			if (isLowerCase) {
				if (shiftedCode > 122) {
					shiftedCode -= 26;
				}
				if (shiftedCode < 97) {
					shiftedCode += 26;
				}
			}

			// Convert the code back to a character
			return String.fromCharCode(shiftedCode);
		}

		// If the character is not a letter return the character
		return char;
	});

	// Convert the array back to a string
	return finalString.join("");
}

export default caesarCipher;
