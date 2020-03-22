import { calc } from './calculator.js';

it('should get sum of numbers', () => {
    const result = calc('4 + 2');
    expect(result).toEqual('4 + 2 = 6');
});

it('should get difference of numbers', () => {
    const result = calc('4 - 2');
    expect(result).toEqual('4 - 2 = 2');
});

it('should get multiplication numbers', () => {
    const result = calc('4 * 2');
    expect(result).toEqual('4 * 2 = 8');
});

it('should get a dilation numbers', () => {
    const result = calc('4 / 2');
    expect(result).toEqual('4 / 2 = 2');
});

it('does not work if no string is passed', () => {
    const result = calc(4 / 2);
    expect(result).not.toEqual('4 / 2 = 2');
});

it('does not work if no string is passed', () => {
    const result = calc(4 / 2);
    expect(result).toEqual(null);
});

