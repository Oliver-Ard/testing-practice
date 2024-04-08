import capitalize from "./capitalize.js";

describe("capitalize", () => {
	test("Capitalize first character of a word", () => {
		expect(capitalize("hello")).toEqual("Hello");
	});

	test("Capitalize the first character of each word in a sentence", () => {
		expect(capitalize("my first test!")).toEqual("My First Test!");
	});

	test("Warning if argument is missing", () => {
		expect(capitalize()).toEqual("I need a string here!");
	});

	test("Warning if string is empty", () => {
		expect(capitalize("")).toEqual("I need a string here!");
	});
});
