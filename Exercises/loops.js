// For Loop

/*for (let i=1; i<=5;i++){
    console.log('Hello Little Pony',i);
   
} */
// for (let i=1; i<=9;i++){
//     if (i % 2 !== 0) console.log(i);
   
// }

// While Loop

// let i=0;
// while (i<=5){
//     if (i % 2 !== 0) console.log(i);
//     i++;  
// }

//Do While Loop - one value will always be returned

// let i=9;
// do {
//     (i<=5)
//     if (i % 2 !== 0) console.log(i);
//     i++;  
// }
// while(i<=5);

// For In Loops (use to iterate over objects)
console.log('Loops');
const person={
name: 'Les',
age:  67,
condition: 'good',
hair:'none',
maritalStatus:'married'
}
console.log('Objects');
for (let key in person)
console.log(key, person[key]);

// For of Loops (iterate over arrays)
const colours =['red', 'green','purple','mauve'];
for ( colour of colours)
    console.log(colour);