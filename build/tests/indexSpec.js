"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var strings_1 = __importDefault(require("../utilities/strings"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// these are specs
it('should capitalize a string', function () {
    expect(strings_1.default.capitalize('a sentence')).toEqual('A Sentence');
});
it('should add numbers in array and be truthy', function () {
    expect(arrays_1.default.addArr(numArr)).toBeTruthy();
});
it('should concatenate 2 arrays to not equal just 1', function () {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
});
it('should not contain the third index', function () {
    expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
});
it('should not have a large number and be falsy', function () {
    expect(arrays_1.default.lgNum(wordArr)).not.toContain('rabbit');
});
it('should not have a large number and be falsy', function () {
    expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
});
