



let price1 = showPriceRange('$$');
let price2 = showPriceRange('$$$');
let price3 = showPriceRange('$$$$');
    
console.log(price1);
console.log(price2);
console.log(price3)

    

function showPriceRange(dollarSign){
    return {    // return statement required
    dollarSign,
    } 
}

// a little more sophisticated

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
]

 console.log(priceRanges);