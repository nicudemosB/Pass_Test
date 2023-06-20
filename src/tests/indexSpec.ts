import arrays from '../utilities/arrays';
// import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

// these are specs
it('should capitalize a string', () => {
  expect(strings.capitalize('a sentence')).toEqual('A Sentence');
});

it('should add numbers in array and be truthy', () => {
  expect(arrays.addArr(numArr)).toBeTruthy();
});

it('should concatenate 2 arrays to not equal just 1', () => {
  expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
});
it('should not contain the third index', () => {
  expect(arrays.cut3(wordArr)).not.toContain('rabbit');
});

it('should not have a large number and be falsy', () => {
  expect(arrays.lgNum(wordArr)).not.toContain('rabbit');
});

it('should not have a large number and be falsy', () => {
  expect(arrays.lgNum(wordArr)).toBeFalsy();
});
