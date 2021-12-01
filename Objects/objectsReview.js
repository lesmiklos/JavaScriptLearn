console.log('TEMPLATE LITERALS');

const name = 'Johny Livingstone';

const blogArticle = 
`Once upon a time in the west   
there was a guy named ${name}`;  // surround text with the ` ` characters. Use placeholder  sequence  ${} for variable.

console.log(blogArticle);
console.log('-----------------------------------------------------------------------------------------------------');

console.log('OBJECT LITERAL');

const circle ={
    radius: 1,             //property numeric key/value pair
    location: {
        x: 1,
        y: 1,
    },                     // property  object within the circle object key/value pairs
    isVisible: true,         // property boolean key value pair
    draw: function() {
        console.log('draw - this is a trivial method');
    }                       // method key/value pair

}

circle.draw();   // call the object (c


console.log('-----------------------------------------------------------------------------------------------------');
console.log('FACTORY FUNCTIONS')

function createCircle(radius,locationX,locationY,colour ){
    return{
        radius, // no need for key / value notation
        locationX,
        locationY,
        draw(){
            console.log(' This is Factory Function');
        }
    };
    
}    
const circle1= createCircle(1,54,278)
circle1.colour='YELLOW';  // add or delete properties or functions after object has been created.
circle1.colour2='PEACOCK BLUE'
delete circle1.draw;
console.log(circle1);

const circle2= createCircle(9,666,87)
console.log(circle2);

console.log('-----------------------------------------------------------------------------------------------------');
console.log('CONSTRUCTOR FUNCTIONS');

function Circle(radius,length){
    this.radius = radius,
    this.length = length,
    this.draw = function() {
        console.log('This is a Constructor Function');
    }
}

const Sphere1= new Circle(1,54);
console.log(Sphere1);

const Sphere2= new Circle(87,223);
console.log(Sphere2);

console.log('-----------------------------------------------------------------------------------------------------');
console.log('VALUE vs REFERENCE TYPES');

let number =10;
function increase(number){
    number++;
    
}

console.log(number);  

console.log('-----------------------------------------------------------------------------------------------------');

let obj ={value:10};

function increase(obj){
    obj.value++;
}
console.log(obj);

increase(obj);

console.log(obj);

console.log('-----------------------------------------------------------------------------------------------------');
console.log('ENUMERATING OBJECT PROPERTIES');

const triangle = {
    type : 'isosceles',
    angles: {
        left: 45,
        right: 45,
        middle: 6499,
    }, 
    isThreeLegged: true,
    info :function(){
        console.log('These are the angles');
    }

};
for (let key in triangle)
    console.log(key,triangle[key]);  // 'key' alone will reference just the properties. 'trangle[key]' returns the values.

for (let key of Object.keys(triangle))  // using 'key of' method. Cannot iterate over an object, therefore must 'key of' method.
    console.log(key,triangle[key]);

for (let entry of Object.entries(triangle))  // using 'entries' method to enumerate nd display properties and values.
    console.log(entry);  

console.log('-----------------------------------------------------------------------------------------------------');
console.log('CLONING OBJECTS - 3 METHODS');

console.log('Method 1 - old');
const triangleTwo = {};

for (let key in triangle)
    triangleTwo[key] = triangle[key];

    console.log(triangleTwo);

    console.log('Method 2 - Assign method');

   const another =  Object.assign({},triangleTwo, Sphere2, circle1); // assign properties and values from other objects. 
   console.log(another);

   const another1 =  Object.assign({colour3:'PUCE', colour4:'Magenta'},triangleTwo, Sphere2, circle1); // add new property in first parameter field. 
   console.log(another1);

   console.log('Method 3 - Spread Operator');

   const another2 = {...triangleTwo, Sphere2, circle1};  //Easy. Just ... and the objects you want to add.
   
   console.log(another2, circle1.colour2,Sphere2.radius);
