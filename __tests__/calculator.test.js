const { add, subtract, multiply, divide } = require("../src/calculator");

describe("calculator", () => {
  test("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplies numbers", () => {
    expect(multiply(3, 7)).toBe(21);
  });

  test("divides numbers", () => {
    expect(divide(12, 3)).toBe(4);
  });

  test("divide by zero throws", () => {
    expect(() => divide(4, 0)).toThrow("Cannot divide by zero");
  });
});
