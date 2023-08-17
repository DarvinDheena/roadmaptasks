// JSON is a format for storing and transporting a data, when a data sent from a server to a web page
// JSON is very easy to understood  

var darvin = [{
    "name" : "dheena",
    "age" : " 25",
    "education" : "B.E.",
    "location" : " madurai",
},
{
    "name" : "sree",
    "age" : " 30",
    "education" : "B.tech.",
    "location" : " trichy",

}];
//  now successfully create the Json Object. ( JavaScript Object Notation )
// now iterate with json objects over all for loops. 

// For loops :
    //  loops through a block of code a number of times
    //   looping in js is a feature that executes some conditions repeatedly untill the given condition is became falls.
    // syntax : 
        // for (statement 1 ; statement 2 ; statement 3){
        //              code here...
        //           }
            //  statement-1 : initialization 
            //  statement-2 : condition 
            //  statement-3 : increment/ decrement operator


for (let i=0; i<darvin.length; i++ ){
        var obj=darvin[i];
        console.log( obj);
        console.log( obj.name);
        console.log( obj.age);
        console.log( obj.location);
}

//  for in loop :  loops through the properties of an object
//  syntax : for (key in object) {
    // code block to be executed
    //  }

    for (var key in darvin) {
        if (darvin.hasOwnProperty(key)) {
          console.log(darvin[key].name);
          console.log(darvin[key].age);
        }
        } 

//  for of loop :  loops through the values of an iterable object.
//  syntax : for (variable of iterable) {
     // code block to be executed
    // }

    let text = "";
for (let x of darvin[key].name) {
 text = text + x; 
}
 console.log(text);

//   foreach loop : The forEach() method calls a function (a callback function) once for each array element.
darvin.forEach(function(obj) { console.log(obj.name);
console.log(obj.age); });
