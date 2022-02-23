//sort() sorts the array alphabetically

const fruits = ['Orange', 'Apple', 'Watermelon', 'Grapes'];
fruits.sort()

//reverse() reverses the order

//sort() sorts values as strings, therefore for numbers it must be fixed creating a compare function

const numbers = [1,5,4,100,2]
numbers.sort(function (a,b){
    return a - b 
})

// Sorting it in a random order
const points = [1,2,3,4,5,6]
points.sort(function (a,b) {
    return 0.5 - Math.random()
});


//Finding the highest or lowest Array Value

//First approach
//to find the Lowest, you must sort the array and use index[0] to get the lowest
// to finde the Highest, just need to invert the to: return b - a 

const gamePoints = [10,6,4,8,7,1];
gamePoints.sort( function (a,b) {
    return a - b
})

let lowestValue = gamePoints[0]



//Sorting objects with the criterion for youngest to oldest 

const peopleGenerator = [
    {name:'Guilherme', yo:25},
    {name:'Larissa', yo:1},
    {name:'Manoela', yo:50},
    {name:'Pedro', yo:3},
    {name:'Sasuke', yo:10},
];

let sorting = peopleGenerator.sort(function(a,b){
    return a.yo - b.yo
});
