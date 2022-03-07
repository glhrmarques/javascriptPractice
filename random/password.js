// Random exercise, which forced myself to create a password with solely my knowledge of js. I now, there loads of vulnerabilities, but for now I did great. 

const a = [0,1,2,3,4,5,6,7,8,9];

const numberPassword = Math.floor(Math.random() * 10000);
const letterPassword = 'abcde';
const GenerateLetter = letterPassword.slice(Math.floor(Math.random() * 5))

const sendPasswordUser = password()

function password (a,b) {
    return numberPassword + GenerateLetter;
};


console.log(sendPasswordUser)
