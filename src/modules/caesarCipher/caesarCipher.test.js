import caesarCipher from "./caesarCipher.js";

describe("caesar cipher", () => {
	test("shifts characters correctly", () => {
		expect(caesarCipher("abc", 1)).toEqual("bcd");
		expect(caesarCipher("xyz", 5)).toEqual("cde");
		expect(caesarCipher("ABC", 3)).toEqual("DEF");
		expect(caesarCipher("XYZ", 2)).toEqual("ZAB");
	});

	test("wraps from z to a", () => {
		expect(caesarCipher("xyz", 3)).toEqual("abc");
		expect(caesarCipher("XYZ", 3)).toEqual("ABC");
	});

	test("keeps the same case", () => {
		expect(caesarCipher("AbC", 1)).toEqual("BcD");
		expect(caesarCipher("xYz", 2)).toEqual("zAb");
	});

	test("handles punctuation", () => {
		expect(caesarCipher("Hello, World!", 5)).toEqual("Mjqqt, Btwqi!");
		expect(caesarCipher("Hello, World!", 26)).toEqual("Hello, World!");
	});
});
