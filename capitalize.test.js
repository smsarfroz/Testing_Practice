const { capitalize } = require("./capitalize");
import { expect } from "@jest/globals"

test('capitalize first letter', () => {
    expect(capitalize("object")).toBe("Object");
});