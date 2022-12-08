// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    //intialize new string
    var newString = [];
    //loop through existing string backwards, adding each letter to new string
    for (let index = string.length; index >= 0; index--) {
        newString.push(string[index]);
    }
    //output joined array
    console.log(newString.join(''))
}

reverseThisString("hello")


// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    var newString = []
    for (let index = 0; index < string.length; index++) {
        string[index] === string[index].toUpperCase() ? newString.push(string[index].toLowerCase()) : newString.push(string[index].toUpperCase());
    }
    console.log(newString.join(''));
}

swapCase("hElLo WoRlD");

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    console.log(array.map(x => ((x-32)*(5/9))));
}

let argument = [23, 32, 41, 50, 59]
toCelcius(argument)


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    console.log(array.map(x => x >= 75))
}

argument = [20, 30, 50, 80, 90, 100]
passOrFail(argument)


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

    let newArray = []

    for (let index = 0; index < cardinalNumbers.length; index++) {
        newArray[index] = `${cardinalNumbers[index]} is ${germanNumbers[index]}`
    }

    console.log(newArray)
}

germanNumbers()


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const primeArray = numbers.filter((number) => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return number !== 1;
    })

    return primeArray
}

console.log(returnPrimeNumbers());

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
function loopTo100() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 & i % 5 === 0) {
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        } else if (i % 5 === 0) {
            console.log("I LOVE JAVASCRIPT");
        } else if (i % 3 === 0) {
            console.log("CSC225 RULES");
        } else {
            console.log(i);
        }
    }
}

loopTo100();


