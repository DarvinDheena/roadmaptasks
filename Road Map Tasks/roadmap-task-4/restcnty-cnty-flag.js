//  create a request
var request = new XMLHttpRequest();
//  open a request
request.open("GET","https://restcountries.com/v3.1/all");
//  sending the request 
request.send();
//  to perform specific task 
request.onload = function(){
    var result=JSON.parse(request.response);
    console.log(result);
    // console.log(result.length);

    for ( var i=0 ; i <result.length ; i++){
        console.log(result[i].flags ,  result[i].region  ,result[i].subregion , result[i].population );
        // console.log(result[i].name);
        // console.log(result[i].name);

    }
}

