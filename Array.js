// //Javascript Array:

// // //1. Array literals:
// // var arr1 = [1,2,3];//this is array literals


// // //2. Array() Constructor:

// // var arr2 = new Array();
// // var arr2 = new Array(10);
// // console.log(arr2);

// // //3.Array.of():
// // Array.of(19);

// //4. Array.from():
// // let copy = Array.from(original);


// //Array length:


// // var arrlength= [1,2,4];
// // console.log(arrlength.length);


// // let a= [];
// // a[0] = 'Zero';
// // a[1] = 'one';
// // console.log(a);

// //Array.Push():
// // var a = [];
// // a.push('monir');
// // console.log(a);

// // //array iterating with for of:

// // let string = [...'hello monir'];
// // let EmptyStr = '';
// // for (let str of string){
// //     EmptyStr+=str;
// // }
// // console.log(EmptyStr);

// //multidimensional array:

// var multideimensionalAr = [
//     [
//         [
//             []//4d
//         ]//3d
//     ],//2 d
//     [],
// ]





// two dimentional array travers:
// var twoD= [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for(let i=0; i<twoD.length; i++){
//     for(let j=0; j<twoD[i].length; j++){
//        var sumTwo = twoD[i][j]%2;
//        console.log(sumTwo);
//     }
// }


//=======Array.push()=======//

// var arrP1 =[1,2,3];
// // arrP1[arrP1.length] =4;
// // arrP1.push(5);
// arrP1.push(6,7);
// console.log(arrP1);

// var arrP2 = [...arrP1,8,9];
// console.log(arrP2);


// Array.prototype.push.apply(arrP1, arrP2)
// console.log(arrP1);
// var arr1 = [1,2,3];
// var arr2 = [5,7,9];

// Array.prototype.push.apply(arr2, arr1);
// console.log(arr2);

//====Unshift====//

// const arrU1 =[5,6,7];
// arrU1.unshift(4);
// console.log(arrU1);

// const arrU = [...arrU1];
// // console.log(arrU);

// Array.prototype.unshift.apply(arrU1, arrU)
// console.log(arrU1);

//===Array.splice()===//
// const arrS1 = [1,2,3,5,9];
// arrS1.splice(3,0,4);
// console.log(arrS1);

// const arrS2 = [6,7,8];
// arrS1.splice(5,0, ...arrS2);
// console.log(arrS2);


// const numbers = [1,2,7,4,5];
// numbers[2] = 3;
// console.log(numbers);

//===Array of Objects ===//

// var students = [
//     {id : 1, name: 'Nayem'},
//     {id : 2, name: 'Monir'},
//     {id : 3, name: 'Shegufa'},
//     {id : 4, name: 'Setu'},
//     {id : 5, name: 'Mahedi'}
// ];

// const givenID = 3;
// const updatedName = 'Shayaike Salvy';

// for(let i=0; i<students.length; i++){
//     if(givenID === students[i].id){
//         students[i].name = updatedName;
//         break;
//     }
// }
// console.log(students);



//========push() implement in own way=====//
// //1.
// let myArray = [1,2,3];

// myArray[myArray.length] = 4;
// myArray[myArray.length] = 5;
// myArray[myArray.length] = 6;

// console.log(myArray);

// const newLength = myArray.length;
// console.log(newLength);

//iterating logic 

// function reuse(arr){
//     for(let i=0; i<arr.length; i++){
//        logic();
//     }
// }

// function logic(){
//     console.log('I am Logic');
//     console.log('iammonir');
// }
// reuse(['one', 'two', 'three'])

//3.Custom Stack:
// function CustomStack(){
//     var stack = [];

//     this.push = function(element){
//         stack.push(element)
//         return stack.length;
//     };

//     this.pop = function(){
//         return stack.pop();

//     };

//     this.size = function(){
//         return stack.length;
//     };
// }

// var myStack = new CustomStack();
// myStack.push(1);
// myStack.push(2);
// console.log(myStack.size());

//Creating a dynamic 2D array
//  var rows = 4;
//  var cols = 4;

//  var dynamicArray = [];
//  for(var i=0; i<rows; i++){
//     dynamicArray[i] = [];
//     for (var j=0; j<cols; j++){
//         dynamicArray[i][j] = i* cols +j+i;
//     }
//  }
//  console.log(dynamicArray);
// //sum:
// let arr = [1,2,3,4];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
// }

// console.log(sum);

// //larges number:
// let arr = [1,2,3,4,93,34,109];
// let largestNum = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largestNum){
//         largestNum = arr[i];
//     }
// }
// console.log(largestNum);


// //smallest number:

// let arr = [1,2,323,32,23,-9,-1];
// let smallestNum = 0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]<smallestNum){
//         smallestNum=arr[i]
//     }
// }
// console.log(smallestNum);

// const arr1 = new Array(10);
// for(let i=0; i<arr1.length; i++){
//     arr1[i] = false;
// }

// console.log(arr1);

// const arr2 = new Array(10);
// arr2.fill(1);
// console.log(arr2);


//fill array
// const response = new Array(9);
// response.fill(undefined);
// console.log(response);

// const response = new Array(9);
// response.fill(false);
// for(let i=0; i<response.length; i++){
//     const rand = Math.floor(Math.random()*10+1);
//     response[i] = rand>5?'x':'0';

// }
// console.log(response);

//multi dimentionl:
// const numbers = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// for(let i=0; i<numbers.length; i++){
//     // console.log(numbers[i]);
//     for(let j=0; j<numbers[i].length; j++){
       
//     }
// }


// //matrix 
// const matrixA = [
//     [1,2],
//     [1,0],
//     [1,2]
// ];

// const matrixB = [
//     [0,0],
//     [7,5],
//     [2,1],
// ];

// const matrixSum = (matrixA, matrixB)=>{
//     const result = [];
//     for(let i=0; i<matrixA.length; i++){
//         const row = [];
//         for(let j=0; j<matrixA[i].length; j++){
//             row.push(matrixA[i][j] + matrixB[i][j]);
//         }
//         result.push(row);
//     }
//     return result;
// }
// const matrixA = [
//     [2, 4],
//     [6, 8],
//     [10, 12]
// ]

// const matrixB = [
//     [1, 3],
//     [5, 7],
//     [9, 11]
// ];

// function matrixSum(matrixA, matrixB){
//     if(matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length){
//         throw new Error('matrices must have the same dimension for addittion');
        
//     }
//     const resultMatrix = [];
//     for(let i=0; i<matrixA.length; i++){
//         const newRow = [];

//         for(let j=0; j<matrixA[i].length; j++){
//             newRow.push(matrixA[i][j]+matrixB[i][j])
//         }
//         resultMatrix.push(newRow);
//     }
//     return resultMatrix;
// }

//Delete Element in Array:
// var numbers = [1,2,3,4,5,6,7];
// numbers.shift();
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// var removeLength = numbers.length = numbers.length-1;
// console.log(removeLength);

// numbers.splice(2,3);

// console.log(numbers);

// const toBeDeleted1 =6;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]===toBeDeleted1){
//         numbers.splice(i,1)
//     }
// }
// console.log(numbers);

//concat():

// var arr1 = [1,2,3];
// var arr2 = [4,5,6];

// var arr3= arr1.concat(arr2);
// console.log(arr3);

// var arr4 = [].concat(arr1, arr2,arr3)
// console.log(arr4);



//custom concat method:
//ex-1:

// let myArray = [3,4,5];
// let elementsToAdd = [1,2];

// myArray = [...elementsToAdd, ...myArray];
// console.log(myArray);

//ex-2:




//Slice method:
// const arr = [1,2,3,4,5,6];

// const sliced = arr.slice(1,3);
// console.log(sliced);

// const cloned = arr.slice();
// console.log(arr === cloned);

//custom slice:



//reverse array:
// const text1 = 'hello';
// const jsStack = [];
// for(let i=0; i<text1.length; i++){
//     jsStack.push(text1.charAt(i));
// }

// let result = '';
// while(jsStack.length)result += jsStack.pop();
// console.log(result);

// let names=[
//     'stack learner',
//     'stack school',
//     'stack consultancy',
//     'stack solution',
// ];

// for(let i=0; i<names.length; i++){
//     console.log(names);
// }

// for(let i=0; i<names.length; i++){
//     console.log(`${i+1}: ${names[i]}`);
// }



// custom forEach implementation:
// function myForEach(arr, cb){
//     for(let i=0; i<arr.length; i++){
//         cb(arr[i], i, arr);
//     }
// }

// const nums = [1,2,3,4];
// let sum = 0; 

// myForEach(nums, function(v){
//     sum+=v;
// });
// console.log(sum);

//javascript array method implementation:

// const arr = [1,2,3];
// const newArray = [];

// for(let i=0; i<arr.length; i++){
//     newArray[i] = arr[i]+1;
// }
// return newArray;

 
//custom filter method:

// function customFilter(array, callback){
//     const filteredArray = [];

//     for(let i=0; i<array.length; i++){
//         if(callback(array[i], i, array)){
//             filteredArray.push(array[i])
//         }
//     }
//     return filteredArray; 
// }

// const numbers = [1,2,3,4,5,5,6];
// const evenNumbers = customFilter(numbers, function(element){
//     return element % 2 ===0;
// });
// console.log(evenNumbers);


//ex-2:
// function customFitler (array, callback){
//     const fiteredArray = [];

//     for(let i=0; i<array.length; i++){
//         if(callback(array[i], i, array)){
//             fiteredArray.push(array[i])
//         }
//     }
//     return fiteredArray;
// }

// const arrElm = [1,2,3,4,5,6,7,5];
// const oddNum = customFitler(arrElm, function(element){
//     return element % 2 === 1;
// });

// console.log(oddNum);

// //custom some method:
// function customSome(array, callback){
//     for(let i=0; i<array.length; i++){
//         if(callback(array[i], i, array)){
//             return true;
//         }
//     }
//     return false;
// }

// const numbers = [1,2,3,4,5];

// const hasGreaterThanTree = customSome(numbers, function(element){
//     return element>6;
// });
// console.log(hasGreaterThanTree);


//Every method:
// const num = [23,4,2,3,4];


// const checkNumisgreatenthanZero = num.every(function(elm){
//     return elm>0;
// });
// console.log(checkNumisgreatenthanZero);

//custom reduce:

//ex-1:
// function myReduce(arr, cb, init){
//     let acc= init;
//     start =0;
//     if(!init){
//         acc=arr[0];
//         start =1;
//     }
//     for(let i=0; i<arr.length; i++){
//         acc = cb(acc, arr[i], i, arr);

//     }
//     return acc;
// }

// const arr = [1,2,3,4,5];
// const sum = myReduce(
//     arr,
//     (acc, cur) =>{
//         return acc+cur;
//     },
    
// )
// console.log(sum);

//ex-2:
// function customReduce (array, callback, initialValue){
//     let accumulator = initialValue !== undefined?initialValue:array[0];
// const startIndex = initialValue !== undefined?0:1;

// for(let i=startIndex; i<array.length; i++){
//     accumulator = callback(accumulator, array[i], i, array)
// }
// return accumulator;
// }

// const numbers = [1,2,3,4,5];
// const sum = customReduce(numbers, (acc, current)=>acc+current,0)

// console.log(sum);




//forEach:

// const arr = [1,2,3,4,5];
//  arr.forEach((item)=>{
//     console.log(arr,item);
//  });

//==================Array or Loops=============//

const arr = [1,2,3,4,5];

for(const num of arr){
    // console.log(num);
}


const greetings = 'Hello World';

for(const greet of greetings){
    
    if(greet ===''){
        continue;
    }
    // console.log(`Each char is ${greet}`);
}


//=========Maps============//

// const map = new Map()
// map.set('In', 'India')
// map.set('Usa', 'United States of America');
// map.set('Fr', 'France')
// map.set('In', 'India')//same key, value second time neowa jaina, always give uniqe value

// console.log(map);

// for(const [key, value] of map){
//     // console.log(key, ':', value);
// }


// const myObject = {
//     'game1': 'Nfs',
//     'game2': 'Spiderman'
// }

// for(const [key, value] of myObject){
//     // console.log(key, ':', value);//object not iterable
// }

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }
// for(const key in myObject){
//     console.log(key);
// }


//  const map = new Map()
// map.set('In', 'India')
// map.set('Usa', 'United States of America');
// map.set('Fr', 'France')
// map.set('In', 'India')//same key, value second time neowa jaina, always give uniqe value

// for (const key in map){//not iterable
//     console.log(key);
// }


//forEach:
// const coding = ['js', 'ruby', 'java', 'python'];

// coding.forEach((e) =>{
//     console.log(e);
// })

