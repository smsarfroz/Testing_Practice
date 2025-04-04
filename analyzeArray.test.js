const analyzeArray = require("./analyzeArray");

test("analyze array", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  console.log(object);
  expect(object).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
