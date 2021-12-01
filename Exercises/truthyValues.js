console.log('Truthy Values Array');

const array = [1,2,3,'forty-seven',4,-89,"", 0, null];
console.log(countTruthy(array));

function countTruthy(array) {
    let count=0;
    for(let value of array)
        if (value)
            count ++;
    return count;
    
}

