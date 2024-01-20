//custom push method:
//ex-1:
// const arrP1 = [1,2,3];
// arrP1[arrP1.length] = 4;
// console.log(arrP1);

//ex-2:
// var arr1 = [1,2,3];
// var addElm = [...arr1,4];
// console.log(addElm);

//push():
// const arr = [1,2,3];
// arr.push(4);
// console.log(arr);


//custom unshift method:

//ex-1:
// let arr1 = [3,4,5];
// let arr2 = [1,2];

// let newArray = [...arr2, ...arr1];
// console.log(newArray);

// function myUnshift(arr,...elements){
//     const newArray = [...arr];
    
//     for(let i=elements.length-1; i>=0; i--){
//         newArray.unshift(elements[i]);
//     }
//     return newArray;
// }

// const originalArray = [3,4,6];
// const newArray = myUnshift(originalArray, 1,2);
// console.log(originalArray);
// console.log(newArray);

//custom forEach:
// function customForEach (array, callback){
//     for(let i=0; i<array.length; i++){
//         callback(array[i], i, array)
//     }
// }

// let myArray = [1,2,3,4,5,6];
// customForEach(myArray, (value, index)=>{
//     console.log(`Element at index ${index}: ${value}`);
// })

//ex-2:
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

//ex-3:
// function customForEach (array, callback){
//     for(let i=0; i<array.length; i++){
//         callback(array[i], i, array);
//     }
// }

// let myArray = [1,2,3,4,5];
// customForEach(myArray, (value, index)=>{
//     console.log(`Element at index ${index}: ${value}`);
// })


//ex-4:
// function customForEach(array, callback){
//     for(let i=0; i<array.length; i++){
//         callback(array[i], i, array);
//     }
// }

// let myArray = [1,2,3,4];
// customForEach(myArray, (value,index,array)=>{
//     console.log(value,index,array);
// })

//ex-5:
// function customForEach(array,callback){
//     let sum = 0;
//     for(let i=0; i<array.length; i++){
//       sum +=  callback(array[i]);
//     }
//     return sum;
// }

// let myArray=[1,2,3,4,5];
// let totalSum = customForEach(myArray,(value)=>{
//     console.log(value);
// })


//custom map method:
//ex-1:
// function customMap (array, callback){
//     let result = [];
//     for(let i=0; i<array.length; i++){
//         result.push(callback(array[i], i, array));
//     }
//     return result;
// }

// let myArray = [1,2,3,4,5];
// let squareArray = customMap(myArray, (value)=>{
//     return value**2;
// })
// console.log(squareArray);

//ex-2:

// function myMap(arr, fn){
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//         result.push(fn(arr[i], i, arr))
//     }
//     return result;
// }

// let myArray = [1,2,3,4];
// let sumArray = myMap(myArray, (value)=>{
//     return value+=2;
// })
// console.log(sumArray);

//pop method:

//ex-1:
// function customPop(array){
//     if(array.length===0){
//         return undefined;
//     }
//     const popElm = array[array.length-1];//get the last elment

//     array.length = array.length-1; //remove last element

//     return popElm;
    
// }
// let array = [1,2,3,4];
// let popElm = customPop(array);
// console.log(popElm);
// console.log(array);

//ex-2:
// var orgArr = [1,3,4,5];
// var removeElm = orgArr[orgArr.length-1];
// orgArr.length = orgArr.length-1;
// console.log(removeElm);

// console.log(orgArr);

//shift method:

// function customShift (array){
//     if(array.length===0){
//         return undefined;
//     }
//     const shiftElm = array[0];
//     for(let i=0; i<array.length-1; i++){
//         array[i] = array[i+1];
//     }
//     array.length = array.length-1;
//     return shiftElm;
// }
// let myArray = [1,2,3,4,5];
// let shiftElm = customShift(myArray);
// console.log(shiftElm);
// console.log(myArray);


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

//custom some method:
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

//custom Reduce:

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