console.log('Iterate over object and display items with property string');

const movie= {
    name: "Hello Dolly",
    year: 2014,
    director: "De Lucca",
    rating: 3.7,
    actor: "Josh Brolin"
}
const movie2= {
    name: "Gorgo",
    year: 1964,
    director: "Fellini",
    rating: 3.2,
    actor: "Tad Later"
}


showProperties(movie2);

function showProperties(obj){
    for (let key in obj)
        if (typeof obj[key]==='string')

       console.log(key, obj[key])
}
