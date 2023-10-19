const logBetween = (lowNum, highNum) => {
    let result = [];
    if (lowNum <= highNum) {
        for (let i = lowNum; i <= highNum; i++) {
            result.push(i);
        }
    }
    return result;
}

const logBetweenStepper = (min, max, step) => {
    let result = [];
    if (min <= max) {
        for (let i = min; i <= max; i += step) {
            result.push(i);
        }
    }
    return result;
}

module.exports = {
    logBetween,
    logBetweenStepper,
    // printReverse,
    // fizzBuzz,
    // isPrime,
    // maxValue,
    // myIndexOf,
    // factorArray,
    // oddRange,
    // reverseHyphenString,
    // intersect,
    // mirrorArray,
    // abbreviate,
    // adults,
    // countScores,
    // firstNPrimes,
    // peakFinder,
    // divisibleByThreePairSum,
    // zipArray,
    // twoDimensionalTotal,
    // countInnerElement,
    // twoDiff,
    // arrayDiff,
    // valueCounter,
    // elementCount,
    // nextTwoPrimes,
    // pairProduct,
    // twoDimensionalSize,
    // longWordCount,
    // factorial,
    // lcm,
    // hipsterfyWord,
    // hipsterfy,
    // objectToString,
    // shortestWord,
    // greatestCommonFactor,
    // isPassing,
    // valueConcat,
    // threeInArrow,
    // variableNameify,
    // threeIncreasing,
    // reverse2D,
    // reverb,
    // countRepeats,
    // pairsToString,
    // countAdjacentSums,
    // signFlipCount,
    // powerSequence,
    // collapseString,
    // oddWordsOut,
    // mindPsAndQs,
    // commonFactors,
    // commonPrimeFactors,
    // splitHalfWay,
    // threeUniqueVowels,
    // vowelShift,
    // hasSymmetry,
    // numsToWords,
    // moreDotLessDash
}
