let number =10;

function increase(number){
    number++;
    console.log(number);
}

increase(number);
console.log(number);

//-------------------------------------------------

console.log(number);

let obj = {value: 10};

function increase(obj){
    obj.value++
}
increase(obj);
console.log(obj.value)


const letters = new Set();
letters.add('a house');
letters.add('a castle'); 
letters.add('a shack on a hill'); 
// console.log(letters.size);

 let text = "";
letters.forEach (function(value, key) {
  text += value +  "<br>";

 
  console.log(value)
  //print(letters);
})
  

