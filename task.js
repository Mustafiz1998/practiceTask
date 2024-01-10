//tas-1:Push and Pop Operations: Create an empty array. Use push to add three elements to the array. Then, use pop to remove elements one by one and display the array after each removal.
var emptyArr = [];
emptyArr.push(1,2,3);
console.log(emptyArr);//[1,2,3]





emptyArr.pop();
console.log(emptyArr);//[1,2]
emptyArr.pop();
console.log(emptyArr);//[1]
emptyArr.pop();
console.log(emptyArr);[]

//task-2:Shift and Unshift Operations: Create an array with three elements. Use unshift to add two more elements to the beginning of the array, then use shift to remove elements one by one and display the array after each removal.
var createArr = [3,4,5];

createArr.unshift(1,2);
console.log(createArr);//[1,2,3,4,5];

createArr.shift()
console.log(createArr);//[ 2, 3, 4, 5 ]

createArr.shift()
console.log(createArr);//[ 3, 4, 5 ]

createArr.shift()
console.log(createArr);//[4,5]

createArr.shift()
console.log(createArr);//[5]

createArr.shift()
console.log(createArr);//[]


//task-3:Slice Method: Create an array with at least 5 elements. Use the slice method to extract a portion of the array (e.g., elements from index 2 to index 4). Display the sliced portion.

var createElm = [1,2,3,4,5];

var sliceArr = createElm.slice(2,4);//3,4
console.log(sliceArr);

//task-4: Splice Method: Create an array with at least 5 elements. Use the splice method to remove two elements starting from index 2 and replace them with two new elements. Display the updated array.
var createElm1 = [1,2,3,4,5,6];

createElm1.splice(2,2,'monir','mizan',)
console.log(createElm1);



//task-5:Iteration with For Loop: Create an array of numbers. Use a for loop to iterate through the array and print each element.
var numberOfArr= [1,2,3,4,5,6,7];

for(let i=1; i<=numberOfArr.length; i++){
   console.log(i);
}

//task-6:Iteration with For...of Loop: Create an array of strings. Use a for...of loop to iterate through the array and print each string.
var strings = 'string';
for(str of strings){
    console.log(str);
}

//task-7:Array Length and Iteration: Create an empty array. Use a for loop to add 5 elements to the array, each element being its index number. Finally, print the array.

var empTyArr= [];
for(let i=1; i<5; i++){
    empTyArr.push(i)
}
console.log(empTyArr);

//task-8:Manipulating Arrays: Create two arrays. Use array methods (such as push, pop, shift, unshift, etc.) to manipulate these arrays separately and then combine them into a single array. Display the combined array.
var arr1= [1,2,3,4,5];
var arr2 = [6,7,8,9];

arr1.pop();
// console.log(arr1);
arr2.push(10);
// console.log(arr2);
arr1.shift()
// console.log(arr1);
arr2.unshift(0)
// console.log(arr2);
var combine = [...arr1+arr2]
console.log(combine);

//task-9:Array Concatenation: Create two arrays with different data types (one with numbers, another with strings). Use the concat method to concatenate them into a single array. Display the combined array.
var numArr= [1,2,3,4,5];
var strArr = ['monir'];



var combineArray = numArr.concat(strArr);
console.log(combineArray);

//task-10:Checking Array Length: Create an array and use the length property to display the number of elements in the array.

var checkLengthOfArr = [1,2,3,4,5,6];

console.log(checkLengthOfArr.length);