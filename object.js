//===========OBJECT===========//

// in javascript all of things are object


//Creating Objects:
// in javascript we can created object 3 types:
//object literal:

//let empty = {};//an object with no properties
//let point = {x:0, y:0};//two numeric properties
//let p2 = {x: point.x, y:point.y+1};//more complex value
// let book = {
//     'main title': 'javascript',
//     'sub-title': 'the definitive fuide',
//     for: 'all audiences',
//     author: {               // the value of this property is itself an object
//         firstname: 'David',
//         surname: 'Flanagan'
//     }
// };

//get value of an objects:
// console.log(book["main title"]);
// console.log(book.author);

// const obj = new Object()
// const obj2 = {}
// console.log(obj2);
// console.log(obj);

//new keyword:
//creating objects with new:
// let o = new Object();//create an empty object
// let a = new Array(); //create an empty array: same as arra[]
// let d = new Date(); //create a date object representing the current time
// let r = new Map(); //create a map object for key/value mapping

//object.create():


//nested object:
// const user1 ={
//     email: 'monir100@gmail.com',
//     fullName: {
//         userName: {
//             firstName: 'Monir',
//             lastName: 'choudhary'
//         }
//     }
// }
// console.log(user1.fullName.userName.firstName);