console.log("Largest Number");

let numOne = 1853;
let numTwo = 178;


if (numOne>numTwo){
console.log(numOne +' is the largest number');
}

else if (numTwo>numOne){
    console.log(numTwo + ' is the largest number');
}

else console.log('The numbers are equal.')

//Better Solution

let number = max(17992,898);
console.log(number +' is the largest number');
function max(a,b){
    return (a>b)?a:b;
}