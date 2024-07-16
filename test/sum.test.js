const sum = require('./../application/sum');

test('adds 1 + 2 to equal 3', () => {
    let a = 1;
    let b = 2;
    let result = 3;

    expect(sum(a, b)).toBe(result);
});