function analyzeArray(array) {
	const average = (() => {
		const sumNumbers = array.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);

		return sumNumbers / array.length;
	})();

	const min = Math.min(...array);
	const max = Math.max(...array);
	const { length } = array;

	return { average, min, max, length };
}

export default analyzeArray;
