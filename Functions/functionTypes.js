// Function Declaration

walk();  // using function Declaration technique, function can be called BEFORE it is declared. 

function walk() {
    console.log('walk or run. Your choice');
}                                              // by convention no semi-colon after the curly brace for a function declaration
 walk();   

 console.log('--------------------------HOISTING----------------------------------');
 console.log('Function Declarations are moved to the top of the file in a process called "Hoisting." '); 
 console.log('--------------------------------------------------------------------');
 
 console.log('--------------------------NAMED FUNCTION----------------------------------');

 let horseBack = function rider() {
     console.log('This is a named function ')
 };

 horseBack();
 let donkey = horseBack;
 donkey();
 
 

 console.log('--------------------------ANONYMOUS FUNCTION EXPRESSION----------------------------------');

 // using Anonymous function technique, function can only be called AFTER it is initialized. Otherwise error will be thrown. 
 //run()

 let run  = function(){
     console.log('This is an anonymous function')
 };

 let away = run;  // the 'let' is optional. Will work without it. 
 let fast = run;
 let get= away;

 run();
 away();
 fast();
 get();
 run();