
/*function showAddress(address){
    for(let key in address)
    console.log(key, address[key]);
} */

//OBJECT Literal 
/* console.log('EXAMPLE OF AN OBJECT LITERAL')
let address ={
    street: 'rue Verdun',
    number: 10,
    city: 'Gatineau',
    prov: 'QC',
    postalCode: 'J8X 1G2',
       
    }
    function showAddress(address){
        for(let key in address)
        console.log(key, address[key]);
    }  
    
showAddress(address) */

// USING A FACTORY FUNCTION

/*console.log('USING A FACTORY FUNCTION')

let address1 = createAddress('Verdun',10,'Gatineau','QC','J8X 1G2');
let address2 = createAddress('St. Etienne',27,'Hull','QC','J8X 2Y2');
const address3=Object.assign({avenue:'de Maisonneuve'},address1)
    
console.log(address1);
console.log(address2);
console.log(address3)

    

function createAddress(street,number,city,prov,postalCode){
    return {    // return statement required
    street,
    number,
    city,
    prov,
    postalCode,
    
    
    
    printOut(draw){
        
        
        console.log(draw);  // have not figured out how to print out different variables in draw
    }
    
    }
    
}
   
*/

//console.log('USING A CONSTRUCTOR. Difference between Equal and Same (referencing same objects, don't completely understand)')

let address1 = new Address('Verdun',10,'Gatineau','QC','J8X 1G2');
let address2 = new Address('Verdun',10,'Gatineau','QC','J8X 1G2');
let address3 = new Address('St. Etienne',27,'Hull','QC','J8X 2Y2');

   

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));

function Address(street,number,city,prov,postalCode){
    
    this.street=street;  // parameters must be repeated, unlike with Factory Function
    this.number=number;
    this.city=city;
    this.prov=prov;
    this.postalCode=postalCode;    
    
}; 

function areEqual(address1,address2){

         return address1===address2;
}
   
function areSame(address1,address2){

    return address1.street === address2.street && 
    address1.number === address2.number &&
    address1.city === address2.city &&
    address1.prov === address2.prov &&
    address1.postalCode === address2.postalCode
     
}
  

  