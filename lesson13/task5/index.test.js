import { getSum, increaser, compareSums } from './index.js';

//тесты задачь 5го урока

it('should get sum of numbers in interim', () => {
    const result = getSum(1, 4);
    expect(result).toEqual(6);
});

it('the amount should not equal 7', () => {
    const result = getSum(1, 7);
    expect(result).not.toEqual(7);
});

it('the amount in between should be 0', () => {
    const result = getSum(0);
    expect(result).toEqual(0);
});

it('should get increase first and second elements', () => {
    const result = increaser(20, 5);
    expect(result).toEqual(25);
});
it('should not get 10', () => {
    const result = increaser(1, 15);
    expect(result).not.toEqual(10);
});
it('should get 10', () => {
    const result = increaser(10, 15);
    expect(result).toEqual(10);
});

it('should get false', () => {
    const result = compareSums(1, 4, 8, 9);
    expect(result).toEqual(false);
});
it('should get true', () => {
    const result = compareSums(14, 44, 8, 9);
    expect(result).toEqual(true);
});
it('should get false', () => {
    const result = compareSums(14, 44, 8, 9);
    expect(result).not.toEqual(false);
});

//тесты задачь 7го урока
//тесты задачь 8го урока