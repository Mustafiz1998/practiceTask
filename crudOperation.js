//Crud operation
// Sample object representing a person
// let person = {
//     id: 1,
//     name: 'John Doe',
//     age: 30,
//     email: 'john@example.com'
// };


// //create:
// function createPerson(newPerson) {
//     // Assuming newPerson is an object with the same structure as the person object
//     person = { ...newPerson, id: Math.floor(Math.random() * 1000) }; // Assign a random id for simplicity
//     console.log('Person created:', person);
// }
// createPerson()

// //Read:
// function readPerson() {
//     console.log('Person details:', person);
// }
// readPerson()

// //Update:
// function updatePerson(updatedInfo) {
//     // Assuming updatedInfo is an object with the properties to be updated
//     person = { ...person, ...updatedInfo };
//     console.log('Person updated:', person);
// }
// updatePerson()

// //Delete:
// function deletePerson() {
//     person = null; // Simply setting to null, you might want to handle deletion differently in a real-world scenario
//     console.log('Person deleted.');
// }
// deletePerson()

//another crud operation

// let car = {
//     id: 1,
//     name: 'audi',
//     model: 2020
// }
// console.log(car);

// //create:
// const newCar = {
//     id: 2,
//     name: 'BMW',
//     model:2017
// };

// car = {...newCar};
// console.log(car);

// //Read: 
// // console.log('Car Details:', car);

// //Update:
// const updateCar = {
//     carType: 'Sports Car'
// }
// car = {...car, ...updateCar};
// // console.log(car);

// //delete:
// const deletElm = delete car.updateCar
// console.log(deletElm);


//============//
// let newItem = {
//     id: 1,
//     name: 'New Item',

// }

// let items = [];
// items.push(newItem);

// for(let i=0; i<items.length; i++){
//     console.log(items);
// }

// items.forEach(item =>{
//     console.log(item);
// });

// let itemToUpdate = items.find(item => item.id === 1);

// if(itemToUpdate){
//     itemToUpdate.name = 'Update Item';

// }

// let itemIdToDelete  = 1; 
// items = items.filter(item => item.id !== itemIdToDelete);


//==========..//
const students = [
	{
		id: 'std-01',
		name: 'Md Al-Amin',
		email: 'alamin@test.com',
	},
	{
		id: 'std-02',
		name: 'Akib Ahmed',
		email: 'akib@test.com',
	},
	{
		id: 'std-03',
		name: 'Elias Emon',
		email: 'elias@test.com',
	},
];


//create a new objecjt:
// const newStudent = {
//     id: 'std-04',
//     name: 'Mostafizur Rahman Monir',
//     email: 'monir@test.com',
// }

// students.push(newStudent);


// //Update :
// const idTobeUpdate = 'std-02';

// const updateIndex = students.findIndex(
//     (student) => student.id === idTobeUpdate
// );

// // console.log(updateIndex);//1

// const updatedEmail= 'akibahme@test.com';

// students[updateIndex] = {
//     ...students[updateIndex],
//     email: updatedEmail,
// };

// //read:
// students[2];
// console.log(students);


// //delete:
// students.splice(updateIndex, 1);
// // console.log(students);


//============Example-2=============//
//array crud operation:


//create:
// let myArray = [1,2,3];
// myArray.push(4);
// // console.log(myArray); //1,2,3,6

// myArray.splice(1,0,5);
// console.log(myArray);



// //Read:
// let elementAtINdexTwo = myArray[2];
// console.log(elementAtINdexTwo);


// //Update;
// myArray[0] = 10;
// console.log(myArray);

// //Delete:
// myArray.pop();
// console.log(myArray);

// myArray.splice(1,1);
// console.log(myArray);


//----------OBJECT CRUD OPERATION---------//

// //Create:
// let myObject = { key1: 'value1', key2: 'value2'};

// //add a new key-vlaue pair
// myObject.key3 = 'value3';
// console.log(myObject);

// //use object.assign() to merge objects
// let newValues = {key4: 'value4', key5: 'value5'};
// Object.assign(myObject, newValues);
// console.log(myObject);

// //Read:
// let valueForkey2 = myObject.key2;
// console.log(valueForkey2);

// let allKeys = Object.keys(myObject);
// console.log(allKeys);

// let allValues = Object.values(myObject);
// console.log(allValues);

// let entries = Object.entries(myObject)
// console.log(entries);

// //Update:
// myObject.key1 = 'new value';
// console.log(myObject);

// delete myObject.key2;
// console.log(myObject);


//=======console.time & console.timeEnd=====//
// console.time('loopTime');
// for(let i=0; i<500000; i++){
    
// }

// console.timeEnd('loopTime');

//create:
let myArray = [];

console.time('createArray');

for(let i=0; i<100000; i++){
    myArray.push(i)
}

