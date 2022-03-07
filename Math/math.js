//Number to Integer

/*
 * 1 Math.round() returns x rounded to its nearest integer
 * 2 Math.ceil() returns x rounded up to its nearest integer
 * 3 Math.floor() returns x rounded down to its nearest integer
 * 4 Math.trunc() returns the integer part of x 
 * 5 Math.sign() returns negative (-1), null (0) and positive(1)
 * 6 Math.pow() retruns, by two arguments, base and exponent.
 * 7 Math.sqrt() returns the square root of x
 * 8 Math.min() and Math.max() return the lowest and highest value in a list of arguments
 */

//1
const number1 = 9
const rounder = Math.round(number1)

//2
const ceiler = Math.ceil(number1)

//3
const floorer = Math.floor(number1)

//5
const singer = Math.sign(number1)

//6 
const power = Math.pow(number1,3)

//7
const sqrter = Math.sqrt(number1)

//8
const array1 = [-3,1,2,3,4,5]
const maxer = Math.max(number2)

console.log(Math.min(...number2)) 
