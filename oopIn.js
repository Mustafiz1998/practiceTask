//Object Oriented Programming in javascript:

//first introduced basic object:

//object leteral In javascript:
// var rect = {
//     width: 100,
//     height: 50,

//     draw: function() {  // method
//         console.log('I am rectangle');
//         console.log('My width is' + this.width);
//         function num(){ 
//             console.log('this is called inner funtion object method');
//         }
//     }
// }

// rect.draw()


// this:
//this kono object er bitore use korle always sei object ka refer korbe.


// var rect = {
//     width: 100,
//     height: 50,

//     draw: function() {  // method
//         console.log('I am rectangle');
//        this.printPromerties()
//        console.log(this);//rect object
       
//     },
//     printPromerties: function(){
//         console.log('My width is' + this.width);
//         console.log(this.height);
//     }
// }

// rect.draw()

// console.log(this)//output: window object = {}

// function logThis(){
//     console.log(this);
// }
// logThis()// output: window

//object method:
// var person = {
//     name : 'Jhon',
//     greet: function(){
//         console.log('Hello, my name is ' + this.name);
//     }
// };
// person.greet();// helloe, my name is john

//constructor funtion:
// function Dog(name){
//     this.name = name;
//     this.bark = function(){
//         console.log(this.name + ' says woof!');
//     }
// }
// var myDog = new dog('Bubby');
// myDog.bark()//output Bubby says woof!


//another:
// function Cow(name){
//     this.name = name;
//     this.humba = function(){
//         console.log(this.name+' dake humba humba');
//     };
// }

// var myCow = new Cow('Goro');
// myCow.humba( )
// function FirstName(fname){
//     this.fname = fname;
//     this.greet = function() {
//         console.log(this.fname+ ' Monir');
//     };
//     this.greet2 = function(){
//         console.log(this.fname+ ' Monir');
//     }
// }

// let calldedName = new FirstName('Muhammad');
// calldedName.greet();

// let calldedName2 =new FirstName('Mustafiz');
// calldedName2.greet2();

//=======Factory Pattern=========//
function createEmployee(typee,name,salary){
    //Object to be created
    var employee = {};

    //properties
    employee.typee = typee || 'unknown';
    employee.name = name || 'unknown';
    employee.salary = salary || 0;

    //Method 
    employee.describe = function() {
        console.log('I am a ' + this.typee + 'named' + this.name );
    }
    return employee;
}
