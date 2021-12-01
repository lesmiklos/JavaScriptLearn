console.log('Show Numbers as Odd or Even');
/*
showNumbers(12);

function showNumbers(limit){
 

    for (let i=1;i<=limit;i++){
        if (i%2===0)
        console.log(i, "EVEN")
        else function showNumbers(limit){
        console.log(i, "ODD")
    }
} */
 // Alternately 
 showNumbers(12);
 
 function showNumbers(limit){

    for (let i=1;i<=limit;i++){
        const message = (i % 2 ===0)? 'EVEN': 'ODD'
        console.log(i, message)
    }
    
 }
    
