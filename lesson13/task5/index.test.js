import { getSum, increaser, compareSums, findDivCount, squareArray, reverseArray, increaseEvenEl, cloneArr, pickProps, getAdults, getKeys, buildObject } from './index.js';

//тесты задачь 5го урока

it('should get sum of numbers in interim (test1)', () => {
    const result = getSum(1, 4);
    expect(result).toEqual(6);
});

it('the amount should not equal 7 (test2)', () => {
    const result = getSum(1, 7);
    expect(result).not.toEqual(7);
});

it('the amount in between should be 0 (test3)', () => {
    const result = getSum(0);
    expect(result).toEqual(0);
});

//-----------------------------------------------------------------------------------------------------------------------------------

it('should get increase first and second elements (test4)', () => {
    const result = increaser(20, 5);
    expect(result).toEqual(25);
});
it('should not get 10 (test5)', () => {
    const result = increaser(1, 15);
    expect(result).not.toEqual(10);
});
it('should get 10 (test6)', () => {
    const result = increaser(10, 15);
    expect(result).toEqual(10);
});

//-----------------------------------------------------------------------------------------------------------------------------------

it('should get false (test7)', () => {
    const result = compareSums(1, 4, 8, 9);
    expect(result).toEqual(false);
});
it('should get true (test8)', () => {
    const result = compareSums(14, 44, 8, 9);
    expect(result).toEqual(true);
});
it('should get false (test9)', () => {
    const result = compareSums(14, 44, 8, 9);
    expect(result).not.toEqual(false);
});

//-----------------------------------------------------------------------------------------------------------------------------------


it('should get number of multiples of 5 (test10)', () => {
    const result = findDivCount(1, 10, 5);
    expect(result).toEqual(2);
});
it('should not get 4 times (test11)', () => {
    const result = findDivCount(1, 40, 4);
    expect(result).not.toEqual(4);
});

it('should get number of multiples of 3 (test12)', () => {
    const result = findDivCount(1, 15, 3);
    expect(result).toEqual(5);
});
//-----------------------------------------------------------------------------------------------------------------------------------
//тесты задачь 7го урока


it('should get square array from 1, 2, 3 (test13)', () => {
    const result = squareArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});
it('should not get null becouse array (test14)', () => {
    const result = squareArray([4, 3, 2]);
    expect(result).not.toEqual(null);
});

it('should get null if not array (test15)', () => {
    const result = squareArray('bubu');
    expect(result).toEqual(null);
});

//-----------------------------------------------------------------------------------------------------------------------------------

it('should get reverse array (test16)', () => {
    const result = reverseArray([5, 4, 3]);
    expect(result).toEqual([3, 4, 5]);
});
it('should get null, becouse  argument is not array (test17)', () => {
    const result = reverseArray(4512);
    expect(result).toEqual(null);
});
it('should get not null (test18)', () => {
    const result = reverseArray([1, 2, 3]);
    expect(result).not.toEqual(null);
});

//-----------------------------------------------------------------------------------------------------------------------------------
it('should get  an increased even number (test19)', () => {
    const result = increaseEvenEl([5, 4, 3], 20);
    expect(result).toEqual([5, 24, 3]);
});
it('should get null, becouse  argument is not array  (test20)', () => {
    const result = increaseEvenEl(4512);
    expect(result).toEqual(null);
});
it('should get not null (test21)', () => {
    const result = increaseEvenEl([1, 2, 3]);
    expect(result).not.toEqual(null);
});

//-----------------------------------------------------------------------------------------------------------------------------------
it('should get clone array (test22)', () => {
    const result = cloneArr([5, 4, 3]);
    expect(result).toEqual([5, 4, 3]);
});
it('should get null, becouse  argument is not array  (test23)', () => {
    const result = cloneArr(4512);
    expect(result).toEqual(null);
});
it('should get not null (test24)', () => {
    const result = cloneArr([1, 2, 3]);
    expect(result).not.toEqual(null);
});

//тесты задачь 8го урока
//-----------------------------------------------------------------------------------------------------------------------------------

it('should get properties (test25)', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
});
it('should not get properties (test26)', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'z']);
    expect(result).not.toEqual({ a: 1, z: 4 });
});
it(' if not found anything (test27)', () => {
    const result = pickProps({ Aa: 1, zs: 2, qr: 3, dd: 4 }, ['e', 'f']);
    expect(result).toEqual({});
});
//-----------------------------------------------------------------------------------------------------------------------------------
it('must get adults (test28)', () => {
    const result = getAdults({ dima: 11, petro: 60, wika: 40 });
    expect(result).toEqual({ petro: 60, wika: 40, });
});
it('should not get youngsters (test29)', () => {
    const result = getAdults({ dima: 11, petro: 60, wika: 40 });
    expect(result).not.toEqual({ dima: 11 });
});
it('must get adults (test30)', () => {
    const result = getAdults({ putin: 70, terminator: 50, mackduck: 20 });
    expect(result).toEqual({ putin: 70, terminator: 50, mackduck: 20 });
});
//-----------------------------------------------------------------------------------------------------------------------------------
it('should get keys (test31)', () => {
    const result = getKeys({ dima: 11, petro: 60, wika: 40 });
    expect(result).toEqual(["dima", "petro", "wika"]);
});
it('the result should not be like that(test32)', () => {
    const result = getKeys({ dima: 11, petro: 60, wika: 40 });
    expect(result).not.toEqual("masha");
});
it('must get keys of obj (test33)', () => {
    const result = getKeys({ putin: 70, terminator: 50, mackduck: 20 });
    expect(result).toEqual(["putin", "terminator", "mackduck"]);
});

//-----------------------------------------------------------------------------------------------------------------------------------

it('should get new objecе whis keys and values from array (test34)', () => {
    const result = buildObject(["a", " b", "c"], [1, 2, 3]);
    expect(result).toEqual({ a: 1, " b": 2, c: 3 });
});
it('should not get new objecr whis keys and values from array (test35)', () => {
    const result = buildObject(["a", 58, "c"], [1, 2, 3]);
    expect(result).not.toEqual({ a: 1, " b": 2, c: 3 });;
});
it('should get empty object (test36)', () => {
    const result = buildObject("string", false);
    expect(result).toEqual({});
});

//-----------------------------------------------------------------------------------------------------------------------------------

