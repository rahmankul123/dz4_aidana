function calculateAveragePositiveNumbers(...numbers) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number > 0) {
            sum += number;
            count++;
        }
    }

    let average = sum / count;
    return average;
}

let numbers = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8];
let averagePositive = calculateAveragePositiveNumbers(...numbers);
console.log(averagePositive);

function calculateSumOfEvenSquares(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number % 2 === 0) {
            sum += number ** 2;
        }
    }

    return sum;
}

let numbers2 = [2, 3, 4, 5, 6, 7, 8, 9];
let sumOfEvenSquares = calculateSumOfEvenSquares(numbers2);
console.log(sumOfEvenSquares);

function filterWordsWithTA(words) {
    let filteredWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.toLowerCase().includes('t') && word.toLowerCase().includes('a')) {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}

let words = ['text', 'frontend', 'apple', 'banana', 'orange'];
let filteredWords = filterWordsWithTA(words);
console.log(filteredWords);
