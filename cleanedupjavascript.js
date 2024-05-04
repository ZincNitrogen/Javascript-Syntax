//CONVENTIONS AND INTRO INFO

//Single line commen

/* Multi-line 
Comment */

/*Enter 'use strict' at the top of a JS file to keep code relagated to modern JS
 JS is dynamically typed and uses semicolons.*/


//let for normal variables, const for unchanging variables.

let x = 123;
const y = 234;

/*camelCase for naming variables. 
 ALL CAPS for pre-runtime consts*/



//DATA TYPES AND THEIR OPERATIONS

/* a. Primatives
    1.String
    2. Int
    3. BigInt
    4. Boolean
    5.Undefined
    6. Null


                    1. Strings:
                            ^Can be single or double quoted - no difference
                            ^Can be enclosed in backticks which allow (a) multi-line strings, (b)formated string, and (c)template functions/template literals.
                                ex: (a)`multi        (b) `formatted string ${reference}`
                                        line         (c) see misc section
                                        string`

                            ^Can use special characters inside of itself to modify its own data. The common backslash is called an escape character.
                                ex:  \n : line break
                                     \\ : backslash
                                     \t : Tab

                            ^Are immuntable
                            ^Are iterable (and therefore indexable)
                            ^Is always enclosed by a String object wrapper and so contains object properties and methods.
                    
                    2.Int:
                        ^aka "Double precision floating point numbers".
                        ^Stored in 64-bit format IEEE 754
                        ^ Can use underscored as a spacer (syntactic sugar)
                            ex: 1_000_000 will print as 1 000 000 while still being an int type
                        ^Can use shorthand for zeros
                            ex: 1e9 will print as 1000000000; 1 and 9 zeros to the right.
                                5e-4 will print as 0.0005; 1 and 4 zeros to the left.
                        ^Includes hex, bianry, and octal number systems.
                        ^Is always enclosed by an Int object wrapper and so contains object properties and methods.

                    3. BigInt:
                        ^For any integer that exceeds |((2^53)-1)| digits long.
                        ^Decalred by adding 'n' to the end of a number
                            ex: let veryBigInt = 100000000000000000000000000000000000000n
                        ^Is always enclosed by a BigInt object wrapper and so contains object properties and methods.


                    4.Boolean:
                        ^Can only return/store two values, True and False
                        ^ Results from comparisons
                        ^Is always enclosed by a Boolean object wrapper and so contains object properties and methods.

                    5.Null:
                        ^references a non-existing object. Represents the concept of nothing. The box doesn't even exist
                        ^Is always enclosed by a Null object wrapper and so contains object properties and methods.(?)

                    
                    6. Undefined:
                        ^means "there is currently no value assigned here". There is nothing in ths box.
                        ^Is always enclosed by a Undefined object wrapper and so contains object properties and methods.(?)

*/
        
/* b. Non-Primatives/Complex 
    1.Object
        I. Plain Object
        II. Symbol
        III. Array
        IV. Function
        V.Map
        VI. Set
        VII. JSON
        VIII. Object Wrappers



                    1.Object

                        ^A variable that can store multiple types of data.
                        ^Contains properties and methods. 
                            ex: object.property, object.method()

                        ^Cannot be copied in the same way Primatives are and to do so only references the objects memory.
                                   
                            ex: let thisObject = {
                                property: "this property"
                            }

                            thisObject = thatObject -> thatObject just references thisObject, that is not a copy of this.

                        ^To copy an object, either iterate contents into a new object using a for...in loop and an object constructor or use
                        Object.assign() method. 

                            I. Plain Object:
                                ^An Object that is user defined.
                                ^To delete propeties: delete objectName.propertytodelete;
                                ^ Can use external variable values as property names(called computed properties)
                                    ex: let fruit = "apple";
                                        let fruitObject = {

                                            [fruit]: "Granny Smith",
                                        };

                                        fruitObject.apple; -> returns "Granny Smith"

                                        ^Computed properties can contain external variables in addition to strings (i believe other data types as well, though not sure...)

                                ^ [in] keyword can be used to test if a specific key exists within an object
                                    ex:

                                        let thisObject = {
                                            propertyOne: "this property"
                                        }

                                        propertyOne in thisObject; -> returns true
                                        propertyTwo in thisObject -> returns false

                                ^Can iterate over keys of object properties by using a for..in loop
                                        for (key in object){

                                            action;
                                        }
                                

                                ^To delete properties use:
                                        delete objName.propertyName;

                                    ^Plain Object Literals
                                        ^declared with let or const
                                        ^Keys can either be plaintext, strings or symbols while pairs can be any datatype
                                        ^Non-plaintext keys, with the exception of strings and symbols CAN be used
                                            but are automatically converted to strings.
                                        ^ Int keys (aka "integer properties") (which, again are converted to strings)  are ordered from least to greatest. All other values are ordered according to creation order
                                        ^commas seperate properties


                                        ex: let thisObject = {
                                            property1 : "any data type",
                                            "multi word property": true,
                                            exampleMethod: function(){
                                                funtionbody;
                                            },
                                            nestedObject: {
                                                subproperty: [1,2,"cool"]
                                            },

                                        }

                                        thisObject.property1 -> value of property1 inside object
                                        thisObject['multi word property'] -> value of  multi-word-property
                                        thisObject.exampleMethod() -> returns value of the function inside object
                                        thisObject.nestedObject -> returns ????
                                        thisObject.nestedObject.subpropertyone -> returns nested property from property object

                                        ^The "this" keyword can be used by an object method to reference proerties inside its parent object
                                            ex: let thisOBject = {
                                                prop1: 24;
                                                exampleMethod: function() {
                                                    let ziyadAge = this.prop1;
                                                    return ziyadAge;
                                                }
                                            }
                        

                                    ^Plain Object Constructors
                                        ^ Can be used to (a) create empty objects or (b)instantiate new objects from functions


                                            ex: 

                                            (a) let emptyObj = new Object(); 
                                            
                                            
                                            
                                            
                                            
                                            (b) function thisFunction(param) {

                                                        action;
                                                        return something;

                                            }

                                            let newObject = new thisFunction(arg)
                    II. Symbol:
                            ^




*/


/* c.Type Conversions
    1.Primative to Primative
    2. Object to primitive





*/

//CONTROL FLOW AND CONDITIONALS

/*  a. While Loop
    b. Do...While Loop
    c.For Loop
    d.Switch Statemtent
    e. Function
    f. For..in Loop
    g. For..Of Loop
    h. If Statements
    
*/

//EXPRESSIONS AND OPERATORS

/*
    a. Logical Operators
    b. Bitwise Operators
    c. Mathematical Operators
    d. Modify and Assign
    e. Comparison Operators
    d. Other Operators (include type of)
 */

//INTERACTION

/*
    a.Modal Window

*/