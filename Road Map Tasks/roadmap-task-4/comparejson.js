// Objects are the refernce type in javascript and are also named value pairs
// where the value may determine a property
//  lets compare the JS objects based on refernce

// now creating two ojects with same data with order  :
       var  object1 = { 
            "name": "darvin", 
            "age ": 25
        };

        var object2 = {
            "name": "dheena", 
            "age ": 30
        };

// The strict equals (===) operator compares memory locations in case of comparing objects.

                console.log(object1===object2); 
        // pointing to the same reference now 
                object1 = object2 ;
                console.log(object1===object2) ;

 //  Comparing Two JavaScript Objects based on the data:
  
                console.log(JSON.stringify(object1)===JSON.stringify(object2));



//  now creating two ojects with same data without order:
            var obj1 = {
                name: "darvin",
                age: 5
            };
            var obj2 = {
                age: 5,
                name: "dheena"
            };
  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

