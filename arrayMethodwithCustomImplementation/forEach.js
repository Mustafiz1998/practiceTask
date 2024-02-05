//========Custom forEach() method=========//
//--------Example - 1--------//

// function customForEach(arr, callback){
//     for(i=0; i<arr.length; i++){
//         callback(arr[i], i, arr);
//     }
// }


// //Example usage:
// const numbers = [1,2,3,4,5,6];
// customForEach(numbers, (num, index) =>{
//     console.log(`Element at index ${index}: ${num}`)
// })

//-------------Example-2-----------//
//using function expression:

// const buildOwnForEach = function(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// };

// const fruits = ['apple', 'orange', 'banana', 'mango'];

// buildOwnForEach(fruits, (fruit, index) => {
//     console.log(`Fruit at index ${index}: ${fruit}`);
// });





//===========Build in forEach()method========//