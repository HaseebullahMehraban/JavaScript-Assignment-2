// Introduction to Arrays

// 1. Note: the countries are gotten in my own choice. Create an array containing 4 population values of 4 countries like Afghanistan, USA, UK, and Russia. Store this array into a variable called 'populations'
let populations = [38, 331, 66, 144];

// 2. Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4);

// 3. ...confusing point...
let percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];


// Basic Array Operations (Methods)

// 1. 3 neighbouring countries of Afghanistan is gotten ....
let neighbours = ['Pakistan', 'Iran', 'Tajikistan'];

// 2. 
neighbours.push('Utopia');

// 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
neighbours.pop();

// 4. If the 'neighbours' array does not include the country 'Germany', log to the console: 'Probably not a central European country :D'
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

// 5. Note: ????? not sure??????? !!!!     
let index = neighbours.indexOf('Iran');
if (index !== -1) {
    neighbours[index] = 'Republic of Iran';
}

console.log(neighbours);