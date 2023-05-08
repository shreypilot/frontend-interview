//function statement
//->way of creating function are called function statement
function a(){
    console.log("Hello");
}
a()//hello

//Function expression
//->the way of assigning a function to a variable .function acts like a value
var b = function(){
    console.log("hello");
}
/
//Difference between statement and expression
//->major difference between two lines in hoisting
a();//hello a
b();//TypeEa();
function a(){
    console.log("Hello A");
}

var b = function(){
    console.log("Hello B");
}
//why? during main creation phase a is created in memory and function assigned to a.but b is created like a variable() (b:undefined) and until code reaches the function() part,it is still undefined.so it cannot be called

//Function Declaration->another name of function statement

//function anonymous function
//->function w/o name
// function(){

// }//this is going throw syntax error-function statement requires function name.they dont have their identity. so an anonymous fn w/o code inside it results in an error

// //

// Named function expression
 //-> same as function expression but function has a name instead of being anonymous
 var b = function xyz(){
    console.log("b called");
 };
 b();// b called
 xyz ();//throws referenceError:xyz is not defined
 //xyz function is not created in global scope.so it can't be called

//parameters vs arguments
var b = function(param1,params2){
    //labels/identifiers are parameters
    console.log("b called");
};
b(arg1,args2);//arguments-value passed inside function call

//First class function  aka  first class citizena
//->we can function as arguments and/or return a function (HOF) .These ability are altogether known as first class function.it is programming concept available in some other language too.- ability to used like value

var b = function(params1){
    console.log(param1); //prints "f(){}"
};
b(function (){});

//other way of doing same things
var b = function(params1){
    console.log(param1); //prints "f(){}"
};

function xyz(){ }
    b(xyz);//same thing as prev code


//we can return a function from function:
var b = function(param1){
    return function() {};
}
console.log(b());//we log the entire fun within b
