console.log('Push, Unshift, Splice, IndexOf, Includes ');

 const numbers=[3,4,5];

 console.log(numbers);
 console.log(numbers.push(6,7,'a')); // adds to end
 console.log(numbers);
 console.log(numbers.unshift(1,2)); // adds to beginning
 console.log(numbers);
 //console.log(numbers.splice(2,0,'a','b')); 
 console.log(numbers);

 // 1st parameter~start point (0 based index), 2nd parameter-how many, 3rd is items to add
 
 console.log('Removing Elements');
 /*console.log(numbers);
 console.log(numbers.pop())*/
 console.log(numbers); 
 console.log(numbers.splice(4,3))
 console.log(numbers);

 console.log('Finding Elements');
 console.log(numbers);
 
 console.log( numbers.indexOf('c')); // returns -1 for false
 console.log( numbers.indexOf(2)); // finds index position of #2 from 'numbers' array defined above
 console.log( numbers.lastIndexOf('a')); // finds last index position of 'a' from 'numbers' array defined above
 console.log(numbers.includes('a'));  // returns true or false
 console.log(numbers.indexOf('a',4)); // finds next index position of 'a' starting at index 4


 console.log('-------------------------------------------------------------------------------------------------------');
 console.log('Finding elements in Objects - using Predicate Functions');

 const courses =[  
     {id:1, name:'Political Science'},
     {id:2, name:'Biology'},
     {id:3, name:'History'},
 ];

 console.log(courses.includes({id:1,name:'Political Science'}));  // this returns false because refernce points are different
 //instead
 const course =courses.find(function(course){
     return course.name ==='Biology';
 });
 console.log(course); //returns true or false

 // more efficient version of the code

 const course2 = courses.find(course2=> course2.name==='Political Science');
 console.log(course2);

 const course3 = courses.find(course3=> course3.name==='History');
 console.log(course3);

 console.log('Emptying an array');
 let numArray=[1,2,3.4];
 let secondArray = numArray
 
 //numArray=[];  // will empty the original array but not 'secondArray' 
 numArray.length=0;  // this format will empty the original and any referred arrays

 console.log(numArray);
 console.log(secondArray);

 console.log('-------------------------------------------------------------------------------------------------------');

 console.log('Concatenate & Slice Arrays');

 const first = [1,2,3];
 const second = [4,5,6];
 
 const combined = first.concat(second);
 console.log(combined);

 const combined2 = second.concat(first); //order matters
 console.log(combined2);

 const sliceCombined = combined.slice(2,6); 
 console.log(sliceCombined);

 console.log('-------------------------------------------------------------------------------------------------------');

 console.log('Arrow Functions notation for predicate or callback functions')

 const items =[
     {id: 1, name:'carrot'},
     {id: 2, name: 'grapefruit'},
 ]
 //   return item.name==='grapefruit';
 //    const item = items.find(function(item){        ------- these 2 lines can be simplified with an Arrow function

  const item = items.find(item=> item.name=== 'carrot');

 console.log(item);

 console.log('-------------------------------------------------------------------------------------------------------');
 console.log('Spread Operator - alternative to concatenate operator');

 const firstGroup = [1,2,3];
 const secondGroup = [4,5,6];

 const combined3 = [ ...secondGroup,'Hola Mama',...firstGroup]; // Spread operator
 console.log(combined3);

 console.log('-------------------------------------------------------------------------------------------------------');
  console.log('Iterating an array - 3 methods');

 // #1
  const digits =[1,2,3];

    for (let digit of digits )
        console.log(digit);   // cannot figure out how to print out index as well

  // #2

  digits.forEach(function(digit,index){      // index added as option
      console.log(index, digit)
  })

  // #3 

  digits.forEach(digit=> console.log(digit));  // adding index is optional

  console.log('-------------------------------------------------------------------------------------------------------');
  console.log('Join and Split')

  let numerals =[1,2,3,4,5,'zzzzzz'];
  const joined=numerals.join('+'); // Returns a string with the specified characters as separators 


  console.log(joined);

  const message = 'This is not my website.';

  const parts = message.split(' ');              // step 1. Use string method to split the string
  console.log(parts);

  const modified=parts.join('~~');              // step 2. Use array method (join) to return string with separators.
  console.log(modified);

 console.log('-------------------------------------------------------------------------------------------------------');
  console.log('Sorting Primitives & Objects');

  numerals = [1,3,2,9,6,5];

   numerals.sort();
   console.log(numerals);

   numerals.reverse();  
  console.log(numerals);

  console.log('Sorting Objects');

  const subjects = [
      {id: 1, name:'political Science'},
      {id: 2, name: 'Chemistry'},
      {id: 3, name: 'Biology'},
      {id: 4, name: 'anatomy'},
      {id: 5, name: 'allegory'},
  ];

   subjects.sort(function(a, b) {

   const nameA = a.name.toUpperCase();      
   const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;    //  simple sort algorithm (ascending)
    if (nameA > nameB) return  1;
    return 0;
   });

   console.log(subjects)
console.log(' ------------------------------------------------------------------------------------------------------------');
console.log('Testing with Some & Every functions ');

const grouping = [1,2,3,16,-7];

const atLeastOnePositive = grouping.some(function(value){
    
return value >=0
}

);

const allPositive = grouping.every(function(value){
    
    return value >=0;
    }
);
    console.log(atLeastOnePositive);

    console.log(allPositive);
   
  
  console.log('-------------------------------------------------------------------------------------------------------');

  console.log('Filter function'); //  using const 'grouping' previously defined

  
  const filtered = grouping.filter(value => value >= 3);  // as Arrow function - note that 'value' can be anything as long as 2nd item is named the same
                                                          // 'value where value' ....
  const filtered2 =grouping.filter(function (value){      // as conventional callback function (longer code to do the same thing)

   return  value >= 3;
    
  } );

  console.log(filtered);
  
  console.log(filtered2);
  
  