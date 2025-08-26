const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
});

test('subtrair 2 - 3 igual a -1', () => {
    expect(math.subtract(2, 3)).toBe(-1);
});

test('multiplicar 2 * 3 igual a 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
});

test('dividir 4 / 2 igual a 2', () => {
    expect(math.divide(4, 2)).toBe(2);
});
