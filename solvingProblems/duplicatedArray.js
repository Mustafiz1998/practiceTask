//find duplicat value in array:

// const arrNumber = [1,2,3,2,9,3,7,9];

// const duplicates = arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log(duplicates);


//Using Nested Loops:
function findDuplicates(arr){
    let duplicat = [];

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
          
            if(arr[i] === arr[j] && !duplicat.includes(arr[i])){
                duplicat.push(arr[i]);

            }
        }
    }
    return duplicat;
}

const myArray = [1,2,34,5,12,3,12,2];
console.log(findDuplicates(myArray));