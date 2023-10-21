// Return an array of numbers from lowNum to highNum (inclusive)
const logBetween = (lowNum, highNum) => {
    let result = [];
    if (lowNum <= highNum) {
        for (let i = lowNum; i <= highNum; i++) {
            result.push(i);
        }
    }
    return result;
}

// Return an array of numbers from min to max (inclusive)
const logBetweenStepper = (min, max, step) => {
    let result = [];
    if (min <= max) {
        for (let i = min; i <= max; i += step) {
            result.push(i);
        }
    }
    return result;
}

// Return an array of numbers in reverse order from max -1 to min (exclusive)
const printReverse = (min, max) => {
    let result = [];
    if (max >= min) {
        for (let i = max - 1; i > min; i--) {
            result.push(i);
        }
    }
    return result;
}

// Implement FizzBuzz and return an array of FizzBuzz values up to max (exclusive).
const fizzBuzz = (max) => {
    let result = [];
    for (let i = 1; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            result.push(i);
        }
    }
    return result;
}

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

const maxValue = arr => {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const myIndexOf = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return -1;
}

const factorArray = (arr, num) => {
    return arr.filter((x) => num % x === 0);
}

const oddRange = num => {
    if (num <= 0) return null;
    let result = [];
    for (let i = 1; i <= num; i += 2) {
        result.push(i);
    }
    return result;
}

const reverseHyphenString = str => {
    str = str.split('-');
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    return result.join('-');
}

const intersect = (arr1, arr2) => {
    return arr1.filter(element => arr2.includes(element));
}

const mirrorArray = arr => {
    let result = [...arr];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

const abbreviate = str => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    str = str.split(' ');
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 4) {
            let temp = [];
            for (let j = 0; j < str[i].length; j++) {
                if (!VOWELS.includes(str[i][j])) temp.push(str[i][j]);
            }
            result.push(temp.join(''));
        } else {
            result.push(str[i]);
        }
    }
    return result.join(' ');
}

const adults = arr => {
    // return arr.filter((person) => {
    //     if (person.age >= 18) {
    //         return person.name;
    //     }
    // });
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 18) result.push(arr[i].name)
    }
    return result;
}

const countScores = arr => {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name in result) {
            result[arr[i].name] += arr[i].score;
        } else {
            result[arr[i].name] = arr[i].score;
        }
    }
    return result;
}

const firstNPrimes = num => {
    let result = [];
    let i = 1;
    while (i) {
        if (result.length === num) break;
        if (isPrime(i)) result.push(i);
        i++;
    }
    return result;
}

const peakFinder = arr => {
    let result = [];
    if (arr[0] > arr[1]) result.push(0);
    for (let i = 1; i < arr.length - 2; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) result.push(i);
    }
    if (arr[arr.length - 1] > arr[arr.length - 2]) result.push(arr.length - 1);
    return result;
}

const divisibleByThreePairSum = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % 3 === 0) result.push([i, j]);
        }
    }
    return result;
}

const zipArray = (arr1, arr2) => {
    for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        arr1[i] = [arr1[i], arr2[i]]
    }
    return arr1;
}

const twoDimensionalTotal = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            total += arr[i][j];
        }
    }
    return total;
}

const countInnerElement = arr => {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] in result) {
                result[arr[i][j]]++;
            } else {
                result[arr[i][j]] = 1;
            }
        }
    }
    return result;
}

const twoDiff = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = (i + 1); j < arr.length; j++) {
            if (arr[i] - arr[j] === 2 || arr[i] - arr[j] === -2) {
                result.push([i, j])
            }
        }
    }
    return result;
}

const arrayDiff = (arr1, arr2) => arr1.filter(element => (!arr2.includes(element)));

const valueCounter = (obj, val) => {
    let count = 0;
    for (let key in obj) {
        if (obj[key] === val) count++;
    }
    return count;
}

const elementCount = arr => {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in result) {
            result[arr[i]]++;
        } else {
            result[arr[i]] = 1;
        }
    }
    return result;
}

const nextTwoPrimes = num => {
    let result = [];
    num++;
    while (num) {
        if (result.length === 2) break;
        if (isPrime(num)) result.push(num);
        num++;
    }
    return result;
}

const pairProduct = (arr, target) => {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        let j = i + 1;
        while (j < arr.length) {
            if (arr[i] * arr[j] === target) result.push([i, j]);
            j++;
        }
        i++;
    }
    return result;
}

const twoDimensionalSize = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].length;
    }
    return total;
}

const longWordCount = str => {
    str = str.split(' ');
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 7) count++;
    }
    return count;
}

const factorial = num => {
    if (num === 1) return 1;
    return factorial(num - 1) * num;
}

const lcm = (num1, num2) => {
    function gcd(a, b) {
        // Base case
        if (b === 0) return a;

        // Recursive case
        return gcd(b, a % b);
    }
    return (num1 * num2) / gcd(num1, num2);
}

const hipsterfyWord = str => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    str = str.split('');
    for (let i = str.length - 1; i >= 0; i--) {
        if (VOWELS.includes(str[i].toLowerCase())) {
            str[i] = '';
            break;
        }
    }
    return str.join('');
}

const hipsterfy = sentence => sentence.split(' ').map(word => hipsterfyWord(word)).join(' ');

const objectToString = obj => {
    // PRIMITIVE METHOD
    // let result = '';
    // for (let key in obj) {
    //     for (let i = 0; i < obj[key]; i++) {
    //         result += key;
    //     }
    // }
    // return result;

    // FASTER AND MORE EFFICIENT METHOD
    let result = '';
    for (let key in obj) {
        result += new Array(obj[key]).fill(key).join('');
    }
    return result;
}

const shortestWord = str => {
    return str.split(' ').reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    });
}

const greatestCommonFactor = (num1, num2) => {
    if (num2 === 0) return num1;
    return greatestCommonFactor(num2, num1 % num2);
}

const isPassing = arr => {
    let totalScores = arr.reduce((sum, obj) => sum + obj.score, 0);
    return (totalScores / arr.length) >= 70;
}

const valueConcat = (arr, obj) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            arr[i] += obj[arr[i]];
        }
    }
    return arr;
}

const threeInARow = arr => {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] === arr[i - 1] && arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}

const variableNameify = arr => {
    arr[0] = arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        arr[i] = (arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return arr.join('');
}

const threeIncreasing = arr => {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i] + 2) {
            return true;
        }
    }
    return false;
}

const reverse2D = arr => {
    // NOT SO EFFICIENT
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i].reverse().join('');
    // }
    // return arr.reverse().join('');

    // VERY EFFICIENT
    // 800x faster than the first solution
    return arr.map(subArr => Array.isArray(subArr) ? subArr.reverse().join('') : subArr).reverse().join('');
}

const reverb = str => {
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
    let lastIndex = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (VOWELS.has(str[i])) {
            lastIndex = i;
            break;
        }
    }

    return lastIndex ? str + str.slice(lastIndex) : str;
}

const countRepeats = str => {
    let repeats = {};
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] in repeats) {
            if (repeats[str[i]] === 1) {
                count++;
            }
            repeats[str[i]]++;
        } else {
            repeats[str[i]] = 1;
        }
    }

    return count;
}

const pairsToString = arr => {
    // Primitive way
    // let object = {};
    // for (let i = 0; i < arr.length; i++) {
    //     object[arr[i][0]] = arr[i][1];
    // }

    // return objectToString(object);

    // A more optimized solution
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += new Array(arr[i][1]).fill(arr[i][0]).join('');
    }
    return result;
}

const countAdjacentSums = (arr, num) => {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === num) count++;
    }
    return count;
}

const signFlipCount = arr => {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== 0) {
            if ((arr[i] < 0 && arr[i + 1] > 0) || (arr[i] > 0 && arr[i + 1] < 0)) count++;
        }
    }
    return count;
}

const powerSequence = (base, length) => {
    let result = new Array(length).fill(0);
    result[0] = base;
    for (let i = 1; i < length; i++) {
        result[i] = result[i - 1] * base;
    }
    return result;
}

const collapseString = str => {
    // NAIVE APPROACH
    // str = str.split(' ');
    // let result = new Array(str.length);
    // for (let i = 0; i < str.length; i++) {
    //     let temp = '';
    //     for (let j = 0; j < str[i].length; j++) {
    //         if (str[i][j] !== str[i][j - 1]) {
    //             temp += str[i][j]
    //         }
    //     }
    //     // result.push()
    //     result[i] = temp;
    // }
    // return result.join(' ');

    // MORE EFFICIENT APPROACH
    return str.split(' ').map(element => {
        return element.split('').filter((letter, index, self) => {
            return self[index - 1] !== letter;
        }).join('');
    }).join(' ');
}

const oddWordsOut = str => {
    // Slower approach
    // return str.split(' ').filter(word => word.length % 2 === 0).join(' ');

    // had to use a for loop, because the higher order functions method proved 5 times slower
    str = str.split(' ');
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length % 2 === 0) {
            result.push(str[i]);
        }
    }
    return result.join(' ');
}

const mindPsAndQs = str => {
    let currentStreak = 0;
    let longestStreak = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'P' || str[i] === 'Q') {
            currentStreak++;
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
    }
    return longestStreak;
}

const commonFactors = (num1, num2) => {
    const result = [];
    let greatestFactor = greatestCommonFactor(num1, num2);
    for (let i = 1; i <= greatestFactor; i++) {
        if (greatestFactor % i === 0) result.push(i)
    }
    return result;
}

const commonPrimeFactors = (num1, num2) => {
    const result = [];
    let greatestFactor = greatestCommonFactor(num1, num2);
    for (let i = 2; i <= greatestFactor; i++) {
        if (greatestFactor % i === 0 && isPrime(i)) result.push(i);
    }
    return result;
}

const splitHalfArray = arr => {
    let result = [[], []];
    let half = Math.floor(arr.length / 2);
    let starthalfIndex = arr.length % 2 === 0 ? half : half + 1;
    for (let i = 0; i < half; i++) {
        result[0].push(arr[i]);
        result[1].push(arr[starthalfIndex + i]);
    }
    return result;
}

const threeUniqueVowels = str => {
    let setStr = new Set(str.split(''));
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let char of VOWELS) {
        if (setStr.has(char)) {
            count++;
            // setStr.delete(char);
            if (count >= 3) return true;
        }
    }
    return false;
};

const vowelShift = str => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const result = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
        if (VOWELS.includes(str[i])) {
            result[i] = VOWELS[(VOWELS.indexOf(str[i]) + 1) % 5];
        } else {
            result[i] = str[i];
        }
    }
    return result.join('');
}

const hasSymmetry = arr => {
    let half = Math.floor(arr.length / 2);
    for (let i = 0, lastIndex = arr.length - 1; i < half; i++, lastIndex--) {
        if (arr[i] !== arr[lastIndex]) {
            return false;
        }
    }
    return true;
}

const evenSumArray = arr => {
    let result = new Array(arr.length);

    function findEvenSum(num) {
        let sum = 0;
        for (let i = 2; i <= num; i += 2) {
            sum += i;
        }
        return sum;
    }

    for (let i = 0; i < arr.length; i++) {
        result[i] = findEvenSum(arr[i]);
    }
    return result;
}

const numsToWords = str => {
    const numObj = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine'
    };

    return str.split('').map(number => {
        return numObj[number];
    }).join('');
}

const moreDotLessDash = str => {
    let dotCount = 0;
    let slashCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') dotCount++;
        if (str[i] === '-') slashCount++;
    }

    return dotCount > slashCount;
}

module.exports = {
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
    threeInARow,
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
    splitHalfArray,
    threeUniqueVowels,
    vowelShift,
    hasSymmetry,
    evenSumArray,
    numsToWords,
    moreDotLessDash
}
