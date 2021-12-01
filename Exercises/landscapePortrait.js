console.log("Landscape or Portrait");

console.log(isLandscape(1800,1500));

function isLandscape(width,height){

    return (width>height);
}
    /*Better Solution

let number = max(17002,898);
console.log(number +' is the Landscape or Poirtrait');
function max(a,b){ 
    return (a>b)?a:b;
} */