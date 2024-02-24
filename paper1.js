// Functions

// 1. According to Script....
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// 2. Note: the function is called three time and the countries are gotten in my choice........
let description1 = describeCountry('Afghanistan', 38, 'Kabul');
let description2 = describeCountry('Iran', 82, 'Tehran');
let description3 = describeCountry('India', 1393, 'New Delhi');

console.log(description1);
console.log(description2);
console.log(description3);

// Function Declarations vs. Expressions

// 1. .....confusing point......
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// 3. Call 'percentageOfWorld1' for 3 populations of countries like Afghanistan, Iran, and India, store the results into variables, and log them to the console
let percentage1 = percentageOfWorld1(38);
let percentage2 = percentageOfWorld1(82);
let percentage3 = percentageOfWorld1(1393);

console.log(percentage1);
console.log(percentage2);
console.log(percentage3);

// 4. Note: with a bit confusing point. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
let percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
};

let percentage4 = percentageOfWorld2(38);
let percentage5 = percentageOfWorld2(82);
let percentage6 = percentageOfWorld2(1393);

console.log(percentage4);
console.log(percentage5);
console.log(percentage6);