let txt = 'Please locate where locate occurs!'

let slice = txt.slice(3,20)
// Method, which I can determine the initial and end point of my search

let length = txt.length
// Property that returns the string length


let search = txt.search('locate')
let indexOf = txt.indexOf('locate')
let lastIndexOf = txt.lastIndexOf('locate')

// indexOf() locates the first string 
// LastIdexOf() locates the last string
// Search does the samething as search()
// if it returs -1, It means it found nothing



let name = 'Guilherme'
let phrase = `Welcome ${name}, to your new...`
// Variable substution with interpolation

let price = 10
let fee = 2
let soma = `Total: ${(price *(1 + fee)).toFixed(2)}`
// Experession substution with interpolation 


console.log()

