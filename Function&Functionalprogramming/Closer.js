//============Closer============//
//Ex-1:
// function outerFunction (x){
//     function innerFuntion(y){
//         return x+y;
//     }
//     return innerFuntion;
// }

// const Closer = outerFunction(10);
// const result = Closer(5);
// console.log(result);


//Ex-2:
// function createCounter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     };
// }

// const counter = createCounter();
// counter();
// counter();
