// //========Higher Order Function========//
// //function is an object.
// // function hello(){
// //     console.log('Hello world');
// // }

// // hello();

// // hello.language = 'Javascript';//used as a object cause function is also an object
// // console.log(hello.language);


// //========Example 1 without higher order function=====//

// // var numbers = [1,2,3];
// // var result = [];
// // for(let i=0; i<numbers.length; i++){
// //     result.push(numbers[i]*2);

// // }
// // console.log(result);


// //===Example 1 with Higher order function===//
// // var numbers = [1,2,3];
// // var result = numbers.map((number) =>{
// //     return number*2
// // })
// // console.log(result);


// //============day -2=========//
// //1. Functions as parameters(First class function):

// //Example: 
// // function square(x){
// //     return x*x;
// // }

// // function applyFunctionToList(func, arr){
// //     return arr.map(func);
// // }

// // const numbers = [1,2,3,4];
// // const squareNumbers = applyFunctionToList(square, numbers);
// // console.log(squareNumbers);


// //example:
// // const greet = function(name){
// //     console.log('Hello', name);
// // };

// // greet('Monir');

// //2.Passing functions as argument:
// // function calculate (operation, num1, num2){
// //     return operation(num1, num2);
// // }

// //  function add(a,b){
// //     return a+b;
// //  }

// //  function substract(a, b){
// //     return a-b;
// //  }

// //  console.log(calculate(add, 5, 3));
// //  console.log(calculate(substract, 10, 4));


// //Returning function from function:
// // function multiplier (factor){
// //     return function(x){
// //         return x*factor;
// //     };
// // }

// // const double = multiplier(2);
// // const triple = multiplier(3);

// // console.log(double(5));
// // console.log(triple(5));



// //How to pass function as arguments:
// function mainFunction(callback){//take a function as a paramete
//     callback();//Invoke the callback function
// }

// function callbackFunction(){
//     console.log('Callback function executed');
// }

// mainFunction(callbackFunction);
//==========day- 2===========//
//function as arguments:
// function applOperation(x, y, operation){
//     return operation(x,y);
// }

// function add(x, y){
//     return x+y;
// }

// function multiply(x,y){
//     return x*y;
// }
// console.log(applOperation(2,3, add));
// console.log(applOperation(2,3, multiply));


//function as return values:
// function createMultiplier(factor){
//     return function(x){
//         return x * factor;
//     };
// }

// const double = createMultiplier(2);
// console.log(double(5));


// function firstname(name){
//     return function(famyilyname){
//         return name+famyilyname
//     }

// }

// const fullName = firstname('Muhammd')

// console.log(fullName(' Monir'));