import analyzeArray from "./analyzeArray.js";

describe("analyze numbers array", () => {
	test("the average of the numbers in the array", () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
		expect(analyzeArray([16, 17, 18, 40, 33, 46]).average).toEqual(
			28.333333333333332
		);
		expect(analyzeArray([18, 26, 28, 46, 37, 43]).average).toEqual(33);
	});

	test("the smallest number in the array", () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);
		expect(analyzeArray([16, 17, 18, 40, 33, 46]).min).toEqual(16);
		expect(analyzeArray([18, 26, 28, 46, 37, 43]).min).toEqual(18);
	});

	test("the highest number in the array", () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);
		expect(analyzeArray([16, 17, 18, 40, 33, 46]).max).toEqual(46);
		expect(analyzeArray([18, 26, 28, 46, 37, 43, 52]).max).toEqual(52);
	});

	test("the length of the array", () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);
		expect(analyzeArray([16, 17, 18]).length).toEqual(3);
		expect(analyzeArray([18, 26, 28, 46, 37, 43, 12, 56]).length).toEqual(8);
	});
});
