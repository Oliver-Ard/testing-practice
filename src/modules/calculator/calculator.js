function calculator() {
	function add(a, b) {
		return a + b;
	}

	function subtract(a, b) {
		return a - b;
	}

	function divide(a, b) {
		if (a === 0 || b === 0) {
			return "Cannot divide by zero";
		}
		return a / b;
	}

	function multiply(a, b) {
		return a * b;
	}

	return { add, subtract, divide, multiply };
}

export default calculator;
