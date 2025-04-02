const calculator = require("./calculator");

test('calc addition', () => { 
    expect(calculator.add(3, 4)).toBe(3 + 4);
});
test('calc subtract', () => { 
    expect(calculator.subtract(3, 4)).toBe(3 - 4);
});
test('calc divide', () => { 
    expect(calculator.divide(3, 4)).toBe(3 / 4);
});
test('calc multiply', () => { 
    expect(calculator.multiply(3, 4)).toBe(3 * 4);
});