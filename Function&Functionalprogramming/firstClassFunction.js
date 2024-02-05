//===========First Class Function===========//

function add(a, b){
    return a+b;
}

//1. A function can be stored in a variable
var sum = add
console.log(sum(4,5));
console.log(typeof sum);

//2. A function can be stored in a Array:
const arr = []
arr.push(add);
console.log(arr);
console.log(arr[0](3,5));

//3.Function can be stored object:
const obj = {
    sum: add
}
console.log(obj);
console.log(obj.sum);


// 4. we can create function as need:
setTimeout(function(){
    console.log('I have created...');
}, 100)