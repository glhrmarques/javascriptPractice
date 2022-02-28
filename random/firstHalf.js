let halfer = myFunction('abelha')

function myFunction(text){
    if (text.length % 2 == 0) {
        return text.slice(0, text.length / 2 );
    }

    return text;
}

console.log(halfer)

//It can't find the first half of odd words. 
