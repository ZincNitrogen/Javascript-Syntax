"use strict" //is a string to use only modern javascript

//This is a single line comment

/* this
is
a
multiline
comment
*/

//JS is dynamically typed and uses semi-colons.

let x = 1; //let declares variables. Var is oldschool. These two are variables that may change
const permVar = 123; //Const declares variables that don't change.

/* use cammelcase to namae variables, but use all caps to name known consts before runtime */

//Data Types

/*
Primatives
    Int : a number
    BigInt: a big number -> place 'n' at the end of a number to make it a big int 
    string: note that backticks `` are used only for functional strings -> 'hello ${variableName}'
    boolean
    null
    undefined

Complex(?)
    object
        symbol(?)

*/

//typeof(x) or typeof x is an operator to tell you what data type a value is. Has some quirts around null types and functions/objects


//Interaction

alert("hello"); //basic modal window popup

let popUp = prompt("this is a warning", [input]); //prompt is a modal window that allows user input

let confirmPLease = confirm("why have drama?"); //confirm is a modal window with two buttons "ok" (true) and "cancel"(false)

//type conversions exist, but seem rather unimportant for the most part

//Operators

 //basic operators are exist as well as string concat
 
 let apples = "2"
 numApple = +apples //can turn non numbers into numbers by putting a + in from of values/variables 

 /*modify as assign operators
 
 +=
 *=
 /=
 -=
 
 */

 //Increment and Decremement: ++: inc by 1, --: dec by 1, prefix: operates and returns new value, postfix:operates and returns old value

 /*Bitwise Operators

 
    AND ( & )
    OR ( | )
    XOR ( ^ )
    NOT ( ~ )
    LEFT SHIFT ( << )
    RIGHT SHIFT ( >> )
    ZERO-FILL RIGHT SHIFT ( >>> )

 */

//comma operator throws returns only last expression

/*
Comparison operators
returns booleans

<, >, <=, >=, ==,===,!==, !=


Strings get compared alphabetically with 0 being A and 24 being Z (therefore Z>A returns True)
watch out for quirks with null/undefined comparisons */

// Conditionals


if (condition){
    action;
    action;
    
} else if (condition){
    action;

} else {
    action;
    action;
}

//note that the question mark operator exists for elegance with respect to conditinals


/*Logical Operators 

|| OR
&& AND
! NOT
?? Nullish Coalescing





*/


//Loops


//While Loop
while (condition){
    action;
    condition breaker;
}


//Do while loop
do {
    action;
    condition breaker;
} while(condition);

//for loop, any parameter can be omitted

for (initialization variable (either inline or outside); condition; step) {
    action;
}

//'break' can be used to forcefully exit any loop
//'continue' can be used to begin a new iteration of loop from that point where 'continue' exists.

//labels

labelName: conditional; 
                conditional

                break labelName; // allows  break snd continue to target specific loops from any nested depth.




//Switch statements, can be used in place of multiple if checks. Cases can be grouped without break statements between them

switch (conditional){
    case value1:
        action;
        break
    case value2:
        action;
        break

}

//Functions, global variables are outside of functions, local vars are inside them.
//defaults can be defiend as parameters with 'parameter = Value'
//'return value' gives value to the function call, 'return' by itself can exit the function and return 'undefined'
//naming conventions usially begin with verb describing action, followed by the goal of the funciton. Camel case is used.
//Functions should only do single tasks

//functionName() refers to the result/return value of functionName. functionName refers to the function itself
//function expressions exist as do arrow functions (what is usually used is a function declaration)

function functionName(parameter, parameter...){

    action;
}

functionName(arguements)


//All of the above is susinctly covered on this page: https://javascript.info/javascript-specials. 

//Must learn devtools

//Style guide: https://javascript.info/coding-style

//TDD vs BDD (?)

//Polyfills and transpilers