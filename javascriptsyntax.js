"use strict" //is a string to use only modern javascript

//This is a single line comment

/* this
is-
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
//That was a function declaration. There are also function expressions:

let variableName = function(){

    action;
}


//All of the above is susinctly covered on this page: https://javascript.info/javascript-specials. 

//Must learn devtools

//Style guide: https://javascript.info/coding-style

//TDD vs BDD (?)

//Polyfills and transpilers

//Objects

//plain objects are the most known

//object literals: creating anew object with properties,which are key:value pairs

let exampleObject = {
    property1 = "this is the first property",
    property2 = "another one",
    "multi-word-property": true,
    propertyObject: {
        subpropertyone = "nested!"
    },

    explainMethod: function ExplainFunction() {
        action;
        action;
    },
    explainSecondMethod: function ExplainSecondFunction() {
        action;
        action;
    }



}

exampleObject.property1 //value of property1 inside object
exampleObject['multi-word-property']; //value of  multi-word-property
exampleObject.explainMethod() //returns value of the function inside object
exampleObject.propertyObject; //returns ????
exampleObject.propertyObject.subpropertyone; //returns nested property from property obejct


//object constructors can be used to instansiate new objects of functions or create empty objects

let exampleObjectTwo = new Object(); //empty obj

function User(name){
    let name = name;
    return name;

}

let playerOne = new User("Bob"); //object from function
let playerTwo = new User("Bill"); //another object from same function




//delete properties

delete exampleObject.property1; 

//"in" tests if property in object

"key" in onject_name //value will be true or false

//"for..in" loop
/*(?) for (let key in object_name){
    action;
}*/


for (key in object_name){

    action;
}

//int keys  are ordered from least to most, all other values are ordered according to creation order

//copying objects just creates references to the same object (unlike primitives);
//to duplicate the literal object, either iterate over properties and put them in a new object via construuctor
//or use Object.assign - Object.assign(destination, ...sources);


//creates original object
let originalObject = {

    attribute: 1
    
}



let copiedreference = originalObject; //merely references object (by memory)

let secondObject = new Object(); //constructs empty object


//assigns properties from one object to the other, therby cloning the original object. They will be the same object but occupy two different memory addresses
for (key in originalObject){
    Object.assign(secondObject, originalObject)
}

//look into structuredClone method to clone properties that are also objects

//"this"

let test = {

    someProperty = 1,
    someProperty2 = 2,
    someProperty3 = 3,

    dialogue() {
        let inner = (this.someProperty3); //"this" references  property of outer nest of nested functions

    }
}


//symbols..look into symbols. Unique identifiers for objects. Unique properties
//also look into Object to Primative conversion


//Data Types and methods/properties
//Data types can have either methods (with ()) or properties (without ()) to change the data.

//Arrays - a type of object  ordered collections of data,indexed starting at 0

let nameOfArray = new Array(); // Array constructor

let nameOfAnotherArray = [] //Array literal

//for..of loops work for iterating over arrays


// Maps are also objects(?), but allow for {key:value} pairs with keys of any type (as opposed to objects which just allow only strings and symbols as keys)

let nameName = new Map(); //map constructor

//Sets are like Maps but only allow for values to appear only once
//WeakMaps are like Maps but only objects can be keys
//WeakSets are like Sets but only objects can be keys
//Array and Object destructuring = only interate over certain parts of the data 
//JSONS are a thing...

//Recursion is when a function calls itself -must re study this section

//Rest Parameters: get a function to accept a non-discrete amount of arguments as an array


function nameOfFunction(param1, param2, ...nameOfArray) {
    action;
    arguments.length; //a loosely associated object that indexes arguments (?). Generally depreciated now though.

}

nameOfFunction(arg1, arg2, arg3, arg4); //arg1 and arg2 are discrete and isolated while arg3 and arg4 are in the array nameOfArray.


//Spread Paramters: the opposite of Rest Parameters, gets arguments from elements of an array.



let thisArray = [arg1, arg2, arg3]

function nameOfFunction(...nameOfArraySource) {
    action;
}

//Arbitray scope can be limited by code blocks

{

    some code ;

}

//global Objects

globalThis

//global variables

var nameOfGlobalVariable = "any value";

//Functions, like Arrays are objects. Functions have properties.

function nameOfFunc() {
    action;
}

nameOfFunc.name; // returns the name of the function
//there are many other properties of functions because they are objects.
//we can add custom properties to functions like so:

function nameOfFuncBruh() {

    nameOfFuncBruh.new_property //need to explore this deeper
}

//look into Named Function Expressions


//rare alternative usecase for making a function:

let func = new Function([arg1, arg2, ...], functionBody);


//Scheduling a call

let nameOfthis = setTimeout(func|code, [delay],[arg1], [arg2], ...); //setTimeout allows us to run a function once after the interval of time
let nameofThat = setInterval(func|code, [delay],[arg1], [arg2], ...); //allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
//There are other quirks about this - must look into this deeper.

//Decorators and Forwarding, call/apply -> ???
//Function Binding -> ????
