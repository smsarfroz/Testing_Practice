const { expect } = require("chai");
const { capitalize } = require("./capitalize");

test('capitalize first letter', () => {
    expect(capitalize("object")).toBe("Object");
});