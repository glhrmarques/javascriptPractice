// pop() removes the last element in the array
const fruits1 = ['Avocado', 'Pineaple', 'Watermelon'];
let a = fruits1.pop()

//push() adds a new element at the end 
const fruits2 = ['Avocado', 'Pineaple', 'Watermelon'];
let b = fruits2.push('something')


// shift() removes the first element in the array
const fruits3 = ['Avocado', 'Pineaple', 'Watermelon'];
let c = fruits3.shift()

//unshift() adds the an element in the beginning of an array
const fruits4 = ['Avocado', 'Pineaple', 'Watermelon'];
let d = fruits4.unshift('Something')


//concat() merge the arrays
const market = fruits4.concat(fruits3);

//First parameter determines where the new elements will be included
// Second parameter determines, if something in the current array need to be deleted.
//Third parameter determinnes the new elements to be added ('Yellow, 'Oragen')
//splice() adds news items to an array in a specific location e delete the element without leaving "holes"

const colours1 = ['white', 'black', 'blue'];
colours1.splice(1,0,'Yellow','Orange')


//slice() slices out a part of the array into a new array
//First parameter determines where it should start
//Second parameter determines where it should end 

const colours2 = ['white', 'black', 'blue', 'Yellow','Orange','Purple'];
const cut = colours2.slice(1,3)
