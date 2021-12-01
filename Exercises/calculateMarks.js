console.log('Calculate Marks');
// calculate average and assign  a grade value based on different intervals in an array

const marks= [62,90,97, 85,95]


calculateAverage(marks);

console.log('Your average is ',calculateGrade(marks));


function calculateGrade(marks){  
    const average=calculateAverage(marks)

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A - Congratulaions you are a scholar!';
    
 }

function calculateAverage(array){
  
   let sum = 0; 
   for (let value of array)
     sum += value
    
   return sum/array.length;
   

   }  

 