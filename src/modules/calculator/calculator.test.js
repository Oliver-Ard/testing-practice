import calculator from "./calculator.js";

describe("calculator", () => {
	const myCalc = calculator();

	test("Add two positive numbers", () => {
		expect(myCalc.add(3, 5)).toEqual(8);
		expect(myCalc.add(25, 12)).toEqual(37);
		expect(myCalc.add(150, 300)).toEqual(450);
	});

	test("Add two negative numbers", () => {
		expect(myCalc.add(-3, -10)).toEqual(-13);
		expect(myCalc.add(-27, -32)).toEqual(-59);
		expect(myCalc.add(-125, -10)).toEqual(-135);
	});

	test("Subtract two numbers", () => {
		expect(myCalc.subtract(3, 5)).toEqual(-2);
		expect(myCalc.subtract(2569, 20)).toEqual(2549);
		expect(myCalc.subtract(450, 300)).toEqual(150);
	});

	test("Multiply two numbers", () => {
		expect(myCalc.multiply(15, 3)).toEqual(45);
		expect(myCalc.multiply(4, 4)).toEqual(16);
		expect(myCalc.multiply(234, 20)).toEqual(4680);
	});

	test("Divide two numbers", () => {
		expect(myCalc.divide(20, 5)).toEqual(4);
		expect(myCalc.divide(45, 9)).toEqual(5);
		expect(myCalc.divide(520, 6)).toEqual(86.66666666666667);
	});

	test("Returns a warning if divided by 0", () => {
		expect(myCalc.divide(0, 10)).toEqual("Cannot divide by zero");
		expect(myCalc.divide(2, 0)).toEqual("Cannot divide by zero");
	});
});
