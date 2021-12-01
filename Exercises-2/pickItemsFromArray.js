console.log('Create Array From Range of Items');

const numbers = arrayFromRange(-4,17);

console.log(numbers);

function arrayFromRange(min,max){

    const output=[];
    for (let i = min; i<=max; i++)
    output.push(i);  // push function adds items to an array 
    return output;
}

console.log('---------------------------------------------------------------------------');
console.log('Search for an Element in an Array');

const numbers1 = [1,3,5,7,53,54,-77,45
];


console.log(includes(numbers1,45,77));

 function includes(array,searchElement, bingo){

    
    for (let element of array)
        if (element===searchElement && bingo)
        return true;
        return false;  // without this line a false value will return 'undefined'.
        
 } 

 console.log('---------------------------------------------------------------------------');
 console.log('Exclude Value from an Array');

 const numbers3 = [1,3,45,54,2,77,45];

 const result = except(numbers3,[45]);
 console.log(result);

 function except(array,exclude){

    const result = [];
    for (let element of array)
        if (!exclude.includes(element))
        result.push(element);
    return result;

 }
     
 console.log('---------------------------------------------------------------------------');
 console.log('Moving a Value Within an Array');

 const numbersIV = [1,3,45,54,2,77,45];

 const output = move(numbersIV,0,1) // moves #1 over by 3 positions
 console.log(output);

 function move(array,index,offset){

   const position = index + offset; 

    const output =[...array];
    const element = output.splice(index,1) [0];  // takes 1 element and puts it into the first position of the returned array
    if (position >= array.length || position <0) {
        console.log('Invalid Offset');
        return;
    }
    output.splice(position,0,element)
    return output;

 }

 console.log('---------------------------------------------------------------------------');
 console.log('Sorting Movies');

 const movies = [
     {title: 'Little Big Man', year: 2018, rating: 4.5},
     {title: 'Shoot The Piano Player', year: 2018, rating: 4.7},
     {title: 'Mad Max', year: 2018, rating: 3},
     {title: 'War & Peace', year: 2017, rating: 4.5},
 ];

// Select all 2018 movies with rating > 4
// Sort result by rating in descending order
// Display only 'title' property ie. results b and a

const titles = movies                                                           // functions are chained
.filter(m => m.year === 2018 && m.rating >= 4)
.sort((larger,smaller)=> larger.rating - smaller.rating)         // sorts by subtracting 1st instance from second.    
.reverse()                                                       // reverses order of new array to descending order
.map(m=> m.title)                                     // new array only has title

 console.log(titles);