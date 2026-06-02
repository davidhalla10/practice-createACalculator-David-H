function absoluteValue (num) {
    return Math.abs(num);
};

const powerCalculation = (base, power) => {
    return Math.pow(base, power);
}

const squareRootFinder = (num) => Math.sqrt(num);

function maxAndMinFinder (arr) {
    let maxNumFinder = Math.max(...arr);
    let minNumFinder = Math.min(...arr);
    return [maxNumFinder, minNumFinder];
}

function randomNumGenerator (num) {
    return Math.round(Math.random() * num);
}

const numRounder = (num) => {
    return Math.round(num * 100) / 100;
}


console.log(absoluteValue(-45.67));
console.log(powerCalculation(5, 3));
console.log(squareRootFinder(144));
console.log(maxAndMinFinder([3, 78, -12, 0.5, 27]));
console.log(randomNumGenerator(50));
console.log(numRounder(23.67891));