const { logBetween,
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
        expect(printReverse(13, 18)).to.deep.equal([17, 16.15, 14]);
        expect(printReverse(90, 94)).to.deep.equal([93, 92, 91]);
    });
    it('should return an empty array if `min` is greater than `max`', function () {
        expect(printReverse(8, 13)).to.deep.equal([]);
        expect(printReverse(90, 86)).to.deep.equal([]);
    });
});

describe('fizzBuzz', function () {
    it('should return an array of every number from `0` to `max` that is divisible by `3` or `5`, but not both', function () {
        expect(fizzBuzz(20)).to.deep.equal([3, 5, 6, 9, 10, 12, 18]);
    });
});

describe('isPrime', function () {
    it('should return `true` if a number is `PRIME`', function () {
        expect(isPrime(2)).to.be.true;
        expect(isPrime(11)).to.be.true;
        expect(isPrime(2017)).to.be.true;
        expect(isPrime(19)).to.be.true;
        expect(isPrime(23)).to.be.true;
    });
    it('should return `false` if a number is NOT `prime`', function () {
        expect(isPrime(10)).to.be.false;
        expect(isPrime(9)).to.be.false;
        expect(isPrime(8)).to.be.false;
        expect(isPrime(27)).to.be.false;
        expect(isPrime(4)).to.be.false;
    });
});

describe('maxValue', function () {
    it('should return the largest value in `array`', function () {
        expect(maxValue([12, 6, 43, 2])).to.equal(43);
        expect(maxValue([])).to.equal(null);
        expect(maxValue([-4, -10, 0.43])).to.equal(0.43);
    });
});

describe('myIndexOf', function () {
    it('should not call `Array.indexOf` or `Array.includes`', function () {
        // expect(fizzBuzz(20)).to.deep.equal([3, 5, 6, 9, 10, 12, 18]);
        let indexOfSpy = chai.spy.on(Array, 'indexOf');
        let includesSpy = chai.spy.on(Array, 'includes');
        myIndexOf([1, 2, 3, 4], 4);
        expect(indexOfSpy).to.not.have.been.called();
        expect(includesSpy).to.not.have.been.called();
    });

    it('should return the index of `target` in array if present', function () {
        expect(myIndexOf([1, 2, 3, 4], 4)).to.equal(3);
        expect(myIndexOf([1, 2, 3, 4, 99, 45], 99)).to.equal(4);
        expect(myIndexOf([1, 4, 0, 34], 0)).to.equal(2);
    });

    it('should return the index of -1', function () {
        expect(myIndexOf([5, 6, 7, 8], 2)).to.equal(-1);
        expect(myIndexOf([1, 2, 3, 4, 99, 45], 100)).to.equal(-1);
        expect(myIndexOf([1, 4, 0, 34], 2)).to.equal(-1);
    });
});

describe('factorArray', function () {
    it('should return all the factors of given `number` in `array`', function () {
        expect(factorArray([2, 3, 4, 5, 6], 20)).to.deep.equal([2, 4, 5]);
        expect(factorArray([2, 3, 4, 5, 6]), 35).to.deep.equal([5]);
        expect(factorArray([10, 15, 20, 25], 5)).to.deep.equal([2, 4, 5]);
    });
});

describe('oddRange', function () {
    it('should return an array containing all positive numbers up to `end`', function () {
        expect(oddRange(13)).to.deep.equal([1, 3, 5, 7, 9, 11, 13]);
        expect(oddRange(6)).to.deep.equal([1, 3, 5]);
    });
});

describe('reverseHyphenString', function () {
    it('should the hyphenated string reversed', function () {
        expect(reverseHyphenString("Go-to-the-store")).to.equal("store-the-to-Go");
        expect(reverseHyphenString("Jump,-jump-for-joy")).to.equal("joy-for-jump-Jump,");
    });
});

describe('intersect', function () {
    it('should take in 2 arrays and returns a new array containing the elements common to arr1 and arr2', function () {
        let arr1 = ['a', 'b', 'c', 'd'], arr2 = ['b', 'd', 'e'];
        expect(intersect(arr1, arr2)).to.not.equal(arr1);
        expect(intersect(arr1, arr2)).to.not.equal(arr2);

        expect(intersect(arr1, arr2)).to.deep.equal(['b', 'd']);
        expect(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])).to.deep.equal([]);
    });
});

describe('mirrorArray', function () {
    it('should return a new mirrored array', function () {
        expect(mirrorArray([1, 2, 3])).to.deep.equal([1, 2, 3, 3, 2, 1]);
        expect(mirrorArray(['a', 'b', 'c', 'd'])).to.deep.equal([['a', 'b', 'c', 'd', 'd', 'c', 'b', 'a']]);
    });
});

describe('abbreviate', function () {
    it('should take in a sentwnce string and return a new sentence where words longer than 4 charsacters have their vowels removed', function () {
        expect(abbreviate('the bootcamp is fun')).to.equal('the btcmp is fun');
        expect(abbreviate('programming is fantastic')).to.equal('prgrmmng is fntstc');
        expect(abbreviate('hello world')).to.equal('hll wrld');
        expect(abbreviate('how are you')).to.equal('how are you');
    });
});

describe('adults', function () {
    it('should take in an array of person objects and return an array of names of those 18 and older', function () {
        const ppl = [
            { name: 'John', age: 20 },
            { name: 'Jim', age: 13 },
            { name: 'Jane', age: 18 },
            { name: 'Bob', age: 7 },
        ];

        expect(adults(ppl)).to.deep.equal(['John', 'Jane']);
    });
});

describe('countScores', function () {
    it('should take in an array os score objects, and return an object where each name is `key` and  `value` is their total `score`', function () {
        const ppl = [
            { name: "Anthony", score: 10 },
            { name: "Fred", score: 10 },
            { name: "Anthony", score: -8 },
            { name: "Winnie", score: 12 }
        ];
        expect(countScores(ppl)).to.deep.equal({ 'Anthony': 2, 'Fred': 10, 'Winnie': 12 });

        const peeps = [
            { name: "Anthony", score: 2 },
            { name: "Winnie", score: 2 },
            { name: "Fred", score: 2 },
            { name: "Winnie", score: 2 },
            { name: "Fred", score: 2 },
            { name: "Anthony", score: 2 },
            { name: "Winnie", score: 2 }
        ];
        expect(countScores(peeps)).to.deep.equal({ 'Anthony': 4, 'Fred': 4, 'Winnie': 6 });
    });
});

describe('firstNPrimes', function () {
    it('should take in a number `n` and return an array of the first `n` prime numbers', function () {
        expect(firstNPrimes(0)).to.deep.equal([]);
        expect(firstNPrimes(1)).to.deep.equal([2]);
        expect(firstNPrimes(4)).to.deep.equal([2, 3, 5, 7]);
    });
});

describe('peakFinder', function () {
    it('should take in an array of numbers and return an array containing the indices at all peaks', function () {
        expect(peakFinder([1, 2, 3, 2, 1])).to.deep.equal([2]);
        expect(peakFinder([2, 1, 2, 3, 4, 5])).to.deep.equal([0, 5]);
        expect(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])).to.deep.equal([2, 6, 8]);
    });
});

describe('divisibleByThreePairSum', function () {
    it('should take an array of numbers  and return an array of all the pairs of indices whose elements sum to a multiple of three', function () {
        expect(divisibleByThreePairSum([1, 6, 3, 4, 2, 0])).to.deepe.equal([[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]);
        expect(divisibleByThreePairSum([8, 3, 5, 9, 2])).to.deepe.equal([[1, 3]])
    });
});

describe('zipArray', function () {
    it('should take in an array and returns a single-2D-array', function () {
        const a1 = ['a', 'b', 'c', 'd'];
        const a2 = [10, 20, 30, 40];
        const result = zipArray(a1, a2);
        expect(result).to.deep.equal([['a', 10], ['b', 20], ['c', 30], ['d', 40]]);
    });
});

describe('twoDimensionalTotal', function () {
    it('should take in a 2D array of numbers and return the total sum of all elements', function () {
        const arr1 = [
            [5, 2, 5, 3],
            [12, 13],
        ];
        expect(twoDimensionalTotal(arr1)).to.equal(40);
        const arr2 = [
            [2],
            [1, 9],
            [1, 1, 1]
        ]
        expect(twoDimensionalTotal(arr2)).to.equal(15);
    });
});

describe('countInnerElement', function () {
    it('should take in a 2D array of elements where each element of `arr` is a sub array containng multiple elements, and return how many times each element in each sub array repeats', function () {
        const arr1 = [
            [1, 2, 4, 5],
            [2, 7, 4],
            [1, 4, 5, 2, 7]
        ]
        expect(countInnerElement(arr1)).to.deep.equal({ 1: 2, 2: 3, 4: 3, 5: 2, 7: 2 });

        const arr2 = [
            ['a', 'b', 'c', 'd'],
            ['a', 'b'],
            ['a', 'c', 'd', 'a']
        ]
        expect(countInnerElement(arr2)).to.deep.equal({ a: 4, b: 2, c: 2, d: 2 });
    });
});

describe('twoDiff', function () {
    it('should take an array of numbers, return an array of arrays, where each sub array are indices of the two numbers such that their difference is 2, else return []', function () {
        expect(twoDiff([2, 3, 4, 6, 1, 7])).to.deep.equal([[0, 2], [1, 4], [2, 3]]);
        expect(twoDiff([0, 2, 4, 3, 5])).to.deep.equal([[0, 1], [1, 2], [3, 4]]);
        expect(twoDiff([])).to.deep.equal([]);
    });
});

describe('arrayDiff', function () {
    it('should take in two arrays `arr` and `arr2` and return a new array containing elements of `arr1` that are not in `arr2`', function () {
        const array1 = [1, 23, 2, 43, 3, 4];
        const array2 = [3, 23];
        expect(arrayDiff(array1, array2)).to.deep.equal([1, 2, 43, 4]);

        const array3 = ['a', 'ab', 'c', 'd', 'c'];
        const array4 = ['d'];
        expect(arrayDiff(array3, array4)).to.deep.equal(['a', 'ab', 'c', 'c']);
    });
});

describe('valueCounter', function () {
    it('should take in an `obj` and `val`, and return the number of times `val` repeats as a value in obj', function () {
        const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
        expect(valueCounter(obj1, 'Anne')).to.equal(3);
        const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
        expect(valueCounter(obj2, 88)).to.equal(0);
        const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
        expect(valueCounter(pairs, 'Roman')).to.equal(2);
    });
});

describe('elementCount', function () {
    it('should take in an array and return an object where each key corresponds to an element in the array and the valu corresponds to how many times that element appears in the array', function () {
        expect(elementCount(["a", "a", "b", "b"])).to.deep.equal({ "a": 2, "b": 2 });
        expect(elementCount(['c', 'a', 'c', 'a', 'b'])).to.deep.equal({ "c": 2, "a": 2, "b": 1 });
    });
});

describe('nextTwoPrimes', function () {
    it('should take in a number `num` and return the next two primes numbers greater than `num`', function () {
        expect(nextTwoPrimes(2)).to.deep.equal([3, 5]);
        expect(nextTwoPrimes(3)).to.deep.equal([5, 7]);
        expect(nextTwoPrimes(7)).to.deep.equal([11, 13]);
        expect(nextTwoPrimes(8)).to.deep.equal([11, 13]);
        expect(nextTwoPrimes(20)).to.deep.equal([23, 29]);
        expect(nextTwoPrimes(97)).to.deep.equal([101, 103]);
    });
});

describe('pairProduct', function () {
    it('should accept an array of numbers `arr` and a target num `num`, and return pairs of indices whose elements multiply to `num`', function () {
        // NB: DON"T USE FOR LOOPS< ONLY WHILE LOOPS;
        expect(pairProduct([1, 2, 3, 4, 5], 4)).to.deep.equal([[0, 3]]);
        expect(pairProduct([1, 2, 3, 4, 5], 8)).to.deep.equal([[1, 3]]);
        expect(pairProduct([1, 2, 3, 12, 8], 24)).to.deep.equal([[1, 3], [2, 4]]);
    });
});

describe('twoDimensionalSize', function () {
    it('should take in a 2-D array and return the total number of element in the 2D array', function () {
        const arr1 = [
            [1, 2, 3],
            [4, 5],
            [6, 7, 8, 9]
        ];
        expect(twoDimensionalSize(arr1)).to.equal(9);
        const arr2 = [
            ['a'],
            ['b', 'c', 'd', 'e']
        ];
        expect(twoDimensionalSize(arr2)).to.equal(5);
    });
});

describe('longWordCount', function () {
    it('should take in a string and return the words longer than 7 chars', function () {
        expect(longWordCount("")).to.equal(0);
        expect(longWordCount("short words only")).to.equal(0);
        expect(longWordCount("one reallylong word")).to.equal(1);
        expect(longWordCount("two reallylong words inthisstring")).to.equal(2);
        expect(longWordCount("allwordword longwordword wordswordword")).to.equal(3);
        expect(longWordCount("seventy schfifty five")).to.equal(1);
    });
});

describe('factorial', function () {
    it('should return factorial of a number', function () {
        expect(factorial(1)).to.equal(1);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
        expect(factorial(10)).to.equal(3628800);
    });
});

describe('lcm', function () {
    it('should accept `num1` and `num2` as params and return the lowest  number which is a multiple of `num1` and `num2`', function () {
        expect(lcm(2, 3)).to.equal(6);
        expect(lcm(6, 10)).to.equal(30);
        expect(lcm(24, 26)).to.equal(312);
    });
});

describe('hipsterfyWord', function () {
    it('should take in a string and return the string with the last vowel removed', function () {
        expect(hipsterfyWord('proper')).to.equal('propr');
        expect(hipsterfyWord('tonic')).to.equal('tonc');
        expect(hipsterfyWord('PANTHER')).to.equal('PANTHR');
        expect(hipsterfyWord('BACKWARDS')).to.equal('BACKWRDS');
    });
});

describe('hipsterfy', function () {
    it('should take a sentence and remove the last vowel from each word', function () {
        expect(hipsterfy("proper")).to.equal("propr");
        expect(hipsterfy("proper tonic panther")).to.equal("propr tonc panthr");
        expect(hipsterfy("towel flicker banana")).to.equal("towl flickr banan");
        expect(hipsterfy("runner anaconda")).to.equal("runnr anacond");
        expect(hipsterfy("turtle cheeseburger fries")).to.equal("turtl cheeseburgr fris");
    });
});

describe('objectToString', function () {
    it('should take a char `count` object and return a string representing the counts of each character', function () {
        expect(objectToString({ a: 2, b: 4, c: 1 })).to.equal('aabbbbc');
        expect(objectToString({ b: 1, o: 2, t: 1 })).to.equal('boot');
    });
});

describe('shortestWord', function () {
    it('should return the shortest word of a sentence', function () {
        expect(shortestWord('app academy is cool')).to.be('is');
        expect(shortestWord('programming bootcamp')).to.be('bootcamp');
    });
});

describe('greatestCommonFactor', function () {
    it('should take `num1` and `num2` and return the largest number that divides both `num1` and `num2`', function () {
        expect(greatestCommonFactor(15, 25)).to.equal(5);
        expect(greatestCommonFactor(16, 24)).to.equal(8);
        expect(greatestCommonFactor(7, 11)).to.equal(1);
    });
});

describe('isPassing', function () {
    it('should take an array of assessment objects and return `true`, if average assessment is atleast 70, else return `false`', function () {
        const assessments1 = [
            { number: 1, score: 60 },
            { number: 2, score: 90 },
            { number: 3, score: 80 },
            { number: 4, score: 100 },
            { number: 5, score: 85 }
        ];
        expect(isPassing(assessments1)).to.be.true;
        const assessments2 = [
            { number: 1, score: 60 },
            { number: 2, score: 20 },
            { number: 3, score: 45 }
        ];
        expect(isPassing(assessments2)).to.be.false;
    });
});

describe('valueConcat', function () {
    it('should take in an `array` and `object`, and return a new `array` where each element is concatenated with it\'s corresponding value from the object', function () {
        const arr = ['alex', 'maurice', 'meagan', 'ali'];
        const obj = { alex: 'bronca', ali: 'harris' }
        expect(valueConcat(arr, obj)).to.deep.equal(['alexbronca', 'maurice', 'meagan', 'aliha']);
        expect(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })).to.equal(['a', 'b2', 'c3']);
    });
});

describe('threeInArrow', function () {
    it('should take in an array of numbers and return `true` if `array` contains 3 of the same number consecutively, else return `false`', function () {
        expect(threeInARow([4, 3, 7, 7, 7, 13, 8])).to.be.true;
        expect(threeInARow([10, 9, 20, 33, 3, 3])).to.be.false;
    });
});

describe('variableNameify', function () {
    it('should take an array of `words`, and return a string representing the variable name obtained by combining the words and capitalizing them in mixCased style', function () {
        expect(variableNameify(['is', 'prime'])).to.equal('isPrime');
        expect(variableNameify(['remove', 'last', 'vowel'])).to.equal('removeLastVowel');
        expect(variableNameify(['MaX', 'VALUE'])).to.equal('maxValue');
    });
});

describe('threeIncreasing', function () {
    it('should take in an array of numbers and returns `true` if the array contains 3 consecutive numbers in increasing order, else `false`', function () {
        expect(threeIncreasing([3, 2, 11, 12, 13, 2, 4])).to.be.true;
        expect(threeIncreasing([7, 2, 4, 5, 2, 1, 6])).to.be.false;
    });
});

describe('reverse2D', function () {
    it('should takse 2D aray of strings and return a string representing the elements of the array in reverse order', function () {
        const arr1 = [
            ['a', 'b', 'c', 'd'],
            ['e', 'f'],
            ['g', 'h', 'i']
        ];
        expect(reverse2D(arr1)).to.equal('ihgfedcba');
        const arr2 = [
            ['Julian', 'Matt', 'Mike'],
            ['Oscar', 'Patrick']
        ];
        expect(reverse2D(arr2)).to.equal('PatrickOscarMikeMattJulian');
    });
});

describe('reverb', function () {
    it('should take in a word and return the word with characters after the last vowel repeated', function () {
        expect(reverb('running')).to.equal('runninging');
        expect(reverb('wild')).to.equal('wildild');
        expect(reverb('debugged')).to.equal('debuggeded');
        expect(reverb('my')).to.equal('my');
    });
});

describe('countRepeats', function () {
    it('should take in a string and return the number of letters that appear more than once in the string', function () {
        expect(countRepeats('calvin')).to.equal(0);
        expect(countRepeats('caaaalvin')).to.equal(1);
        expect(countRepeats('pops')).to.equal(1);
        expect(countRepeats('mississippi')).to.equal(3);
        expect(countRepeats('hellobootcampprep')).to.equal(4);
    });
});

describe('pairsToString', function () {
    it('should take an array of pairs and return a string corresponding to the pairs', function () {
        const array1 = [
            ['a', 3],
            ['b', 1],
            ['c', 2]
        ];
        expect(pairsToString(array1)).to.equal('aaabcc');
        const array2 = [
            ['f', 1],
            ['o', 2],
            ['d', 1],
            ['!', 1]
        ];
        expect(pairsToString(array2)).to.equal('food');
    });
});

describe('countAdjacentSums', function () {
    it('should take an `array` and number `n`, it should return how many times that two adjacent numbers in an array add up to `n`', function () {
        expect(signFlipCount([5, 6, 10, 3])).to.equal(0);
        expect(signFlipCount([-12, 0, -3, -5])).to.equal(0);
        expect(signFlipCount([-12, 10, -3, -5])).to.equal(2);
        expect(signFlipCount([1, -2, -3, -4])).to.equal(1);
        expect(signFlipCount([-1, 11.3, -3, 100])).to.equal(3);
    });
});

describe('signFlipCount', function () {
    it('should take an array of numbers, return the number of times adjacent numbers in the array switch signs from positive to negative or vice-versa, 0 is neither `positive` nor `negative`', function () {
        expect(signFlipCount([5, 6, 10, 3])).to.equal(0);
        expect(signFlipCount([-12, 0, -3, -5])).to.equal(0);
        expect(signFlipCount([-12, 10, -3, -5])).to.equal(2);
        expect(signFlipCount([1, -2, -3, -4])).to.equal(1);
        expect(signFlipCount([-1, 11.3, -3, 100])).to.equal(3);
    });
});

describe('powerSequence', function () {
    it('should take two numbers `base` and `length`, and return an array containing a power sequence with the given length.', function () {
        expect(powerSequence(3, 4)).to.deep.equal([3, 9, 27, 81]);
        expect(powerSequence(2, 6)).to.deep.equal([2, 4, 8, 16, 32, 64]);
        expect(powerSequence(8, 3)).to.deep.equal([8, 64, 512]);
    });
});

describe('collapseString', function () {
    it('should take in a  string as argument, and return the string where the `streaks` of consecutive characters are collapsed to a single character', function () {
        expect(collapseString('apple')).to.equal('aple');
        expect(collapseString('AAAaalviiiiin!!!')).to.equal('Aalvin!');
        expect(collapseString('hello app academy')).to.equal('helo ap academy');
    });
});

describe('oddWordsOut', function () {
    it('should take in a sentence and return the sentece where words with an odd number of characters are removed', function () {
        expect(oddWordsOut('go to the store and buy milk')).to.equal('go to milk');
        expect(oddWordsOut('what is the answer')).to.equal('what is answer');
    });
});

describe('mindPsAndQs', function () {
    it('should take a string of uppercase letters and return the length of the consecutive streak of letters `P` and `Q`', function () {
        expect(mindPsAndQs('BOOTCAMP')).to.equal(1);
        expect(mindPsAndQs('APCDQQPPC')).to.equal(4);
        expect(mindPsAndQs('PQPQ')).to.equal(4);
        expect(mindPsAndQs('PPPXQPPPQ')).to.equal(5);
    });
});

describe('commonFactors', function () {
    it('should return an array that contains the common factors between the two inputs', function () {
        expect(commonFactors(12, 50)).to.deep.equal([1, 2]);
        expect(commonFactors(6, 24)).to.deep.equal([1, 2, 3, 6]);
        expect(commonFactors(11, 22)).to.deep.equal([1, 11]);
        expect(commonFactors(45, 60)).to.deep.equal([1, 3, 5, 15]);
    });
});

describe('commonPrimeFactors', function () {
    it('should take two numbers as argument and return and array of all prime factors that are common between the two numbers', function () {
        expect(commonPrimeFactors(12, 50)).to.deep.equal([2]);
        expect(commonPrimeFactors(6, 24)).to.deep.equal([2, 3]);
        expect(commonPrimeFactors(11, 22)).to.deep.equal([11]);
        expect(commonPrimeFactors(45, 60)).to.deep.equal([3, 5]);
    });
});

describe('splitHalfWay', function () {
    it('should take in an array and return 2 halves of the array split in the middle', function () {
        expect(splitHalfArray([1, 2, 3, 4, 5])).to.equal([[1, 2], [4, 5]]);
        expect(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f'])).to.equal([['a', 'b', 'c'], ['d', 'e', 'f']]);
    });
});

describe('threeUniqueVowels', function () {
    it('should take in a string and return true if the string contains at least three different vowels', function () {
        expect(threeUniqueVowels('delicious')).to.be.true;
        expect(threeUniqueVowels('the bootcamp')).to.be.true;
        expect(threeUniqueVowels('bootcamp')).to.be.false;
        expect(threeUniqueVowels('dog')).to.be.false;
        expect(threeUniqueVowels('go home')).to.be.false;
    });
});

describe('vowelShift', function () {
    it('should take in a sentence and return a new sentence where every vowel is replaced with the next vowel in the alphabet', function () {
        expect(vowelShift('bootcamp')).to.equal('buutcemp');
        expect(vowelShift('hello world')).to.equal('hillu wurld');
        expect(vowelShift('on the hunt')).to.equal('un thi hant');
    });
});

describe('hasSymmetry', function () {
    it('should take in an array and return `true` if the array has symmetry, false otherwise', function () {
        expect(hasSymmetry([1, 2, 3, 3, 2, 1])).to.be.true;
        expect(hasSymmetry([1, 2, 3, 3, 4, 1])).to.be.false;
        expect(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])).to.be.true;
        expect(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])).to.be.false;
    });
});

describe('evenSumArray', function () {
    it('should take  in an array of numbers, and return a new array where each num is replaced with the sum of all even numbers less than or equal to that num', function () {
        expect(evenSumArray([6, 7, 5])).to.deep.equal([12, 12, 6]);
        expect(evenSumArray([2, 8, 3, 5])).to.deep.equal([2, 20, 2, 6]);
    });
});
describe('numsToWords', function () {
    it('should take in a string representing a number and return a new string where each digit character is replaced with it\'s `word` representation', function () {
        expect(numsToWords('42')).to.equal('FourTwo');
        expect(numsToWords('123')).to.equal('OneTwoThree');
        expect(numsToWords('159598')).to.equal('OneFiveNineFiveNineEight');
    });
});

describe('moreDotLessDash', function () {
    it('should take in a string and return `true` if the string contains more dots(\'.\') than dashes, false otherwise', function () {
        expect(moreDotLessDash('2-D arrays are fun. I think.')).to.be.true;
        expect(moreDotLessDash('.-.-.')).to.be.tru;
        expect(moreDotLessDash('.-')).to.be.false;
        expect(moreDotLessDash('..--')).to.be.false;
    });
});
