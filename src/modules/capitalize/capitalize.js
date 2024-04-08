function capitalize(string) {
	if (!string) {
		return "I need a string here!";
	}

	const stringArray = string.split(" ");
	const capitalizedArray = [];

	stringArray.map((word) => {
		const capitalizedFirstLetter = word[0].toUpperCase() + word.slice(1);

		return capitalizedArray.push(capitalizedFirstLetter);
	});

	return capitalizedArray.join(" ");
}

export default capitalize;
