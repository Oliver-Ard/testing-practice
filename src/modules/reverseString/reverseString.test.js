import reverseString from "./reverseString.js";

describe("reverse string", () => {
	test("Reverse a single word", () => {
		expect(reverseString("butterfly")).toEqual("ylfrettub");
	});

	test("Reverse a multiple words", () => {
		expect(reverseString("dog bite the cat")).toEqual("tac eht etib god");
	});

	test("Works with numbers and punctuation", () => {
		expect(reverseString("321! Go!")).toEqual("!oG !123");
	});
});
