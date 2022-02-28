//the method map() access all elements of the array
// function arguments: value, index and array
const numbers1 = [1,2,3,4,5,6];
const numbers2 = numbers1.map(multiplier);

function multiplier(value) {
    return 'Result is = ' + value * 2;
}



//the method filter() creates a new array with array elements that attended the criterion
// function arguments: value, index and array

const numbers3 = [3,10,50,20,8];
const numbers4 = numbers3.filter(numberFilter);

function numberFilter(value) {
    return value >= 10;
}

//the method reduce() sums all array elements from left to right

// the method reduceRight()sums all the array elements from right to left.
//Moreover, reduce can recieve a initial number, like the example: reduce(function, 100)
//function arguments: total (initial value) value, index and array

const numbers5 = [2,5];
const sum = numbers5.reduce(sums, 100)

function sums(total, value) {
    return total + value;
}

//every() method checks if the array values pass the test
// function arguments: value, index and array

const numbers6 = [45, 4, 9, 16, 25];
const validate1 = numbers6.every(firstCheck)

function firstCheck (value) {
    return value > 18;
}



//some() method check if some array values pass the test
// function arguments: value, index and array

const numbers7 = [45, 4, 9, 16, 25];
const validate2 = numbers7.some(secondCheck)

function secondCheck (value) {
    return value > 18;
}

//indexOf() returns the element array position
//indexOf () recieves two parameters: indexOf(Item, start)
//lastIndexOf() returns the last element. 
// item: Required. The item which must be searched for
// start: Optional. Where to start the search

const fruits = ["Apple", "Orange", "Apple", "Mango"];
const locate = fruits.indexOf('Orange');



/*
findIndex() returns the FIRST element that passes the test.
*/

const numbers8 = [4, 9, 16, 25, 29];
let validate3 = numbers8.findIndex(thirdCheck)

function thirdCheck (value){
    return value < 18;
}
