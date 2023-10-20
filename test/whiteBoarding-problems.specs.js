const {
    logBetween,
    logBetweenStepper,
    printReverse,
    fizzBuzz,
    isPrime,
    maxValue,
    myIndexOf,
    factorArray,
    oddRange,
    reverseHyphenString,
    intersect,
    mirrorArray,
    abbreviate,
    adults,
    countScores,
    firstNPrimes,
    peakFinder,
    divisibleByThreePairSum,
    zipArray,
    twoDimensionalTotal,
    countInnerElement,
    twoDiff,
    arrayDiff,
    valueCounter,
    elementCount,
    nextTwoPrimes,
    pairProduct,
    twoDimensionalSize,
    longWordCount,
    factorial,
    lcm,
    hipsterfyWord,
    hipsterfy,
    objectToString,
    shortestWord,
    greatestCommonFactor,
    isPassing,
    valueConcat,
    threeInArrow,
    variableNameify,
    threeIncreasing,
    reverse2D,
    reverb,
    countRepeats,
    pairsToString,
    countAdjacentSums,
    signFlipCount,
    powerSequence,
    collapseString,
    oddWordsOut,
    mindPsAndQs,
    commonFactors,
    commonPrimeFactors,
    splitHalfWay,
    threeUniqueVowels,
    vowelShift,
    hasSymmetry,
    numsToWords,
    moreDotLessDash
} = require('../whiteBoarding-problems.js');

const { expect } = require('chai');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

describe('logBetween', function () {
    it('should return an array from `lowNum` to `highNum` inclusive', function () {
        expect(logBetween(-1, 2)).to.deep.eq([-1, 0, 1, 2]);
        expect(logBetween(4, 6)).to.deep.equal([4, 5, 6]);
    });
    it('should return an empty array if `lowNum` is greater than `highNum`', function () {
        expect(logBetween(14, 6)).to.deep.equal([]);
        expect(logBetween(1, 0)).to.deep.equal([]);
    });
});

describe('logBetweenStepper', function () {
    it('should return a array of numbers between `min` and `max` at `step` intervals', function () {
        expect(logBetweenStepper(5, 9, 1)).to.deep.equal([5, 6, 7, 8, 9]);
        expect(logBetweenStepper(-10, 15, 5)).to.deep.equal([-10, -5, 0, 5, 10, 15]);
    });
    it('should return an empty array if `lowNum` is greater than `highNum`', function () {
        expect(logBetween(14, 6, 2)).to.deep.equal([]);
        expect(logBetween(1, 0, 1)).to.deep.equal([]);
    });
});

describe('printReverse', function () {
    it('should return an array of numbers from `min` to `max` in reverse order', function () {
        expect(printReverse(13, 18)).to.deep.equal([17, 16, 15, 14]);
        expect(printReverse(90, 94)).to.deep.equal([93, 92, 91]);
    });
    it('should return an empty array if `min` is greater than `max`', function () {
        expect(printReverse(18, 13)).to.deep.equal([]);
        expect(printReverse(90, 86)).to.deep.equal([]);
    });
});
