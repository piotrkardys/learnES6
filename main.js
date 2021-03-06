/* LESSON 1 */ /* ========================================================================================================================
var createGreeting = function (message, name) {				//casual function
	return message + name;
};

var arrowGreeting1 = (message, name) => {					//arrow function
	return message + name;
};

var arrowGreeting2 = (message, name) => message + name;		//if we return simply statement we don't need to use 'return'

var arrowGreeting3 = message => "Hello!"; 					//if there is only one parameter we don't need to use brackets
var squared = x => x * x;
//------------------------------------------------------
var deliveryBoy = {
	name: "John",
	handleMessage: function (message, handler) {
		handler(message);
	},
	receive: function() {
		var that = this;									//we needed to use that to call that.name correctly (this.name returns 'undefined')		
		this.handleMessage("Hello, ", function (message) {	//because it calls the function (message), not the object
			console.log(message + that.name);
		})
	}
}
deliveryBoy.receive();

var deliveryBoy1 = {
	name: "Chuck",
	handleMessage: function (message, handler) {
		handler(message);
	},
	receive: function () {
		this.handleMessage("Hi, ", message => console.log(message + this.name));	//with arrow function we can call this.name and everything is fine
	}
}
deliveryBoy1.receive();
//------------------------------------------------------
*/

/* LESSON 2 */ /* ========================================================================================================================
var message = "hi";
{
	var message = "bye";
}
console.log(message);			//result of console.log -> "bye" (variable was reassigned)

let message1 = "hi";
{
	let message1 = "bye";
}
console.log(message1);			//result of console.log -> "hi" (let is block-sensitive and doesn't change the global variable)
//------------------------------------------------------
var fs = [];					//array of the functions

for (var i = 0; i < 10; i++) {
	fs.push(function() {
		console.log(i);
	})
}
fs.forEach(function (f) {		//result -> 10 times prints number 10 (because var i is already on that number - because of the for loop which pushing functions inside the array)
	f();
})

var fs1 = [];

for (let i = 0; i < 10; i++) {	//result -> prints numbers from 0 to 9 (i isn't overwritten and starts from the top - number 0)
	fs1.push(function() {
		console.log(i);
	})
}
fs1.forEach(function (f) {
	f();
})
//------------------------------------------------------
function varFunc() {			//fields will be overwritten
	var previous = 0;
	var current = 1;
	var i;
	var tmp;

	for (i = 0; i < 10; i += 1) {
		tmp = previous;
		previous = current;
		current = tmp + current;
	}
}

function letFunc() {
	let previous = 0;
	let current = 1;

	for (let i = 0l i < 10; i += 1) {
		let tmp = previous;
		previous = current;
		current = tmp + current;
	}
}
//------------------------------------------------------
*/

/* LESSON 3 */ /* ========================================================================================================================
function greet(greeting, name) {
	console.log(greeting + ", " + name);
}
greet();				//we get 2 times 'undefined'

function greet1(greeting, name = "Peter") {	//sets the default value of the 'name' argument
	console.log(greeting + ", " + name);
}
greet1();				//we get 'undefined, Peter'
greet1("Hi");			//we get 'Hi, Peter'
greet1("Hi", "John");	//we get 'Hi, John' (defaul argument is overwritten)
//------------------------------------------------------
function receive(complete) {
	complete();
}
//receive();				//we get error (because of the empty function)
receive(function() {		//now is ok
	console.log('Working!');
});

function receive1(complete = function() {	//we pass default value of the argument which is a function
	console.log('Working!');
}) {
	complete();
}
receive1();									//so now is ok too

function receive2(complete = () => console.log('Working with ES6 syntax!')) {	//we can change to ES6 syntax
	complete();
}
receive2();

let receive3 = (complete = () => console.log('Everything is working')) => complete();
receive3();
//------------------------------------------------------
*/

/* LESSON 4 */ /* ========================================================================================================================
var VALUE = 'hello there';
VALUE = 'no more';
console.log('value: ' + VALUE);				//the variable is overwritten

const VALUE2 = 'I said hello!';				//error (VALUE2 is const for read-only)
//VALUE2 = 'nothing I can do';				//so we cannot change its value
console.log('value2: ' + VALUE2);

const VALUE3 = {};
VALUE3.val = 'some field';					//everything is alright (we don't change the whole object)
//VALUE3 = 'some field';					//error (VALUE3 is read-only)
console.log('value3: ' + VALUE3.val);

if (true) {
	const someVar = 'something';
	console.log('some var: ' + someVar);	//returns 'some var: something'
}
console.log('some var: ' + someVar);		//returns nothing (const type is also block-sensitive)
//------------------------------------------------------
*/

/* LESSON 5 */ /* ========================================================================================================================
let name = "Piotr";
let lastName = "Kardyś";
let me = {name, lastName};
console.log(me);

let power = "Invisibility";
let superHero = {me, power};				//construction with the object which we already have (field 'me' of the superHero object is an object too)
console.log(superHero);
//------------------------------------------------------
*/

/* LESSON 6 */ /* ========================================================================================================================
var color = "red";
var speed = 10;
var go = function() {
	console.log('vroom!');
}

var car = {color, speed, go};			//we don't need to declare the fields like color: color (if we have the same variable's name)
var car2 = {
	color, 
	speed, 
	go() {								//that's how we declare functions inside the object in ES6
		console.log('VROOOM!');
	}
};

var d = "drive";
var car3 = {
	color,
	speed,
	["go"]: function() {				//we can also use that method
		console.log('...');
	},
	[d]: function() {					//or even that method
		console.log('ooo');
	}
};

console.log(car.color);
console.log(car.speed);
car.go();
car2.go();
car3.go();
car3.drive();
//------------------------------------------------------
*/

/* LESSON 7 */ /* ========================================================================================================================
console.log([1, 2, 3]);			//returns an array [1, 2, 3]
console.log(...[1, 2, 3]);		//returns 1, 2, 3 (spread array into single elements)
//------------------------------------------------------
let first = [1, 2, 3];
let second = [4, 5, 6];
let third = [7, 8, 9];
let fourth = [10, 11, 12];
first.push(second);
first.push(second);
third.push(...fourth);
third.push(...fourth);

console.log(first);				//returns an array of elements: 1, 2, 3, Array[3], Array[3]
console.log(third);				//returns an array of elements: 7, 8, 9, 10, 11, 12, 10, 11, 12

function addThreeThings(a, b, c) {
	let result = a + b + c;
	console.log(result);
};

addThreeThings(...first);		//returns value 6 (sum of the three top elements of the array [1, 2, 3, Array[3], Array[3]])
addThreeThings(third);			//returns undefined (because we passed only one element - an array)
addThreeThings(...third);		//returns value 24 (7 + 8 + 9 - three elements from the top)
//------------------------------------------------------
*/

/* LESSON 8 */ /* ========================================================================================================================
var salutation = "Hello";
var greeting = salutation + " World";		//casual string
var greeting2 = `${salutation} Peter`;		//string with backward inverted commas  (is white space sensitive)
var greeting3 = `
${salutation}
	Kardys`;

console.log(greeting);
console.log(greeting2);
console.log(greeting3);
//------------------------------------------------------
var x = 1;
var y = 2;
var sum = `${x} + ${y} = ${x + y}`;

console.log(sum);
//------------------------------------------------------
function func(strings, ...values) {			//returns changed values[2] which depends of values[0]
	if (values[0] > 22 || values[0] < 6) values[2] = "sleepy";
	else values[2] = "awake";

	return `${strings[0]}${values[0]}${strings[1]}${values[1]}${strings[2]}${values[2]}`;	//we need to return in right order! (otherwise the string will be shuffled)
}

var message = func`It's ${new Date().getHours()}:${new Date().getMinutes()} - I'm ${""}`;

console.log(message);
//------------------------------------------------------
*/

/* LESSON 9 */ /* ========================================================================================================================
var obj = {					//everything is alright
	color: "blue"
};
console.log(obj.color);

var {color, name} = {		//we only want to extract the color and name fields (we are not interested in rest of them)
	color: "blue",
	name: "Peter",
	state: "Ohio",
	position: "forward"
};
console.log(color);			//ok
console.log(name);			//ok
console.log(state);			//shows undefined (because we didn't make the state field available)
//------------------------------------------------------
function generateObj() {	//function which returns the object with some fields
	return {
		color: "blue",
		name: "Peter",
		state: "Ohio",
		position: "forward"
	}
}

var {name, state} = generateObj();		//we are interested only in 2 of them (name, state)
var {position: pos} = generateObj();	//we can rename of the variable
console.log(name);						//ok
console.log(state);						//ok
console.log(pos);						//ok
//console.log(position);				//shows nothing (same reason as above)
//------------------------------------------------------
var [first, , , fo, ] = ["red", "green", "blue", "yellow", "black"];	//we are insteresten only in first and fourth element of the array
console.log(first);						//ok
//console.log(second);					//shows nothing
console.log(fo);						//ok
//------------------------------------------------------
var people = [							//we have got an array of the people
	{firstName: "Peter",
	lastName: "Kardyś",
	phone: "123-456-789"},
	{firstName: "Jack",
	lastName: "Nickis",
	phone: "456-123-789"},
	{firstName: "Neil",
	lastName: "Harr",
	phone: "456-789-123"}
];

people.forEach(({firstName:name}) => console.log(name));	//forEach element (object) in that array show the 'firstName' value
															//it could be also: people.forEach((obj) => console.log(obj.firstName));
															//but we are insterested only in 'firstName' field

function showPhone({phone}) {								//we pass an object to this function (but we are insterested only in the 'phone' field of that object)
	console.log(phone);
};
var [, jack] = people;										//we get second element of the array (variable jack but it could be also variable named 'second')

showPhone(jack);
//------------------------------------------------------
*/

/* LESSON 10 */ /* ========================================================================================================================
//import {sumTwo, sumThree} from './math/addition';				//there is also a few way of importing, there is the first one
//console.log("2 + 3 = ", sumTwo(2, 3));
//console.log("2 + 3 + 4 = ", sumThree(2, 3, 4));

//import {sumTwo as addTwo, sumThree} from './math/addition';	//there is the second one (with the alias)
//console.log("2 + 3 = ", addTwo(2, 3));						//we use the alias if it is specified
//console.log("2 + 3 + 4 = ", sumThree(2, 3, 4));

import * as addition from './math/addition';					//and there is the third one (import everything with the addition alias from the ./math/addition)
import {users} from './data/users';
import * as _ from 'lodash';

console.log("2 + 3 = ", addition.sumTwo(2, 3));
console.log("2 + 3 + 4 = ", addition.sumThree(2, 3, 4));
console.log(users);												//shows all users (all the array of users)
console.log(_.where(users, {age: 36}));							//shows object of the user with age of 36 (barney)
//------------------------------------------------------
*/

/* LESSON 11 */ /* ========================================================================================================================
const products = document.querySelectorAll('.product');					//grabs every element of the 'product' class
console.log(products);													//type of the variable products is NodeList (we cannot use array's methods on it)

const products2 = Array.from(document.querySelectorAll('.product'));	//so we grab and convert into Array
console.log(products2);
products2.filter(product => parseFloat(product.innerHTML) < 10).forEach(product => product.style.color = 'red');
																		//.filter - filtring the results (returns array with elements which value is less than 10)
																		//.forEach - styling that elements which were chosen 
//------------------------------------------------------
*/

/* LESSON 12 */ /* ========================================================================================================================
var d = new Promise((resolve, reject) => {
	setTimeout(() => {										//timeout waits a 2seconds before the body of the function is executed
		if (true) resolve('hello world');
		else reject('false');
	}, 2000);
});

//d.then((data) => console.log('success: ' + data));														//executes when the promise is resolved
//d.catch((error) => console.log('error: ' + error));														//executes when the promise is rejected

//d.then((data) => console.log('success: ' + data), (error) => console.log('new error: ' + error));			//other methods to write that functions

//d.then((data) => console.log('success: ' + data)).catch((error) => console.log('new error: ' + error));

//d.then((data) => console.log('success: ' + data))															//the second 'then' has undefined data (because first 'then' used it)
// .then((data) => console.log('success2: ' + data))
// .catch((error) => console.log('error: ' + error));

//d.then((data) => {																						//now both of them will executed
//	console.log('success: ' + data);
//	return 'still success';
//}).then((data) => console.log('success2: ' + data))
// .catch((error) => console.log('error: ' + error));

d.then((data) => {	
	console.log('success: ' + data);
	throw new Error('thrown!');																				//throw new Error (calls catch method) even though the condition is true
	return 'still success';																					//only the first 'then' is executed and then the 'catch' method
}).then((data) => console.log('success2: ' + data))
 .catch((error) => console.log('error: ' + error));
 //------------------------------------------------------
*/ 

/* LESSON 13 */ /* ========================================================================================================================
function* greet() {							//it is like an object (with the 'next' field)
 	console.log(`You called 'next()'`);
 	yield "hello";
};
greet();									//shows nothing
console.log(greet());
let next = greet().next();					//shows `You called 'next()'`
console.log(next);							//it is an object with properties: value &done (value is that what is in the yield variable; the done field shows false)
let done = greet().next();					//shows nothing (because there is no function body after the first yield field)
console.log(done);							//it is an object with value: undefined &done: true
//------------------------------------------------------
function* greet2() {
	console.log("How");
	yield "are";
	console.log("you");
	yield "Peter";
	console.log("?");
	yield " I'm";
	console.log("fine");
};
console.log(greet2().next());				//shows "How" and the values of the yield fields value &done ("are", false)
console.log(greet2().next());				//shows "you" and the values of the yield ("Peter", false)
console.log(greet2().next());				//shows "?" and the values of the yield ("I'm", false)
console.log(greet2().next());				//shows "fine" and the values of the yield (undefined, true)

for (let word of greet2()) {				//we can also show all of the messages by using for loop 
	console.log(word);
};
//------------------------------------------------------
function* greet3() {
	let friendly = yield "How";
	friendly = yield friendly + "are"
	yield friendly + "you?";
};													//shows:
console.log(greet3().next().value);					//How
console.log(greet3().next("the heck").value);		//the heck are
console.log(greet3().next("silly").value);			//silly you?
//------------------------------------------------------
function* graph() {
	let x = 0;
	let y = 0;
	while (true) {
		yield {x:x, y:y}
		x += 2;
		y += 1;
	}
}
													//shows:
console.log(graph().next().value);					//{x: 0, y: 0}
console.log(graph().next().value);					//{x: 2, y: 1}
console.log(graph().next().value);					//{x: 4, y: 2}
													//despite of the infinite loop generators are executing only to the first yield field
//------------------------------------------------------
*/

 /* LESSON 14 */ /* ========================================================================================================================
 */
// M A P   M E T H O D S
// API:  		set()   get()      size      clear()  has()
// ITERATORS: 	keys()  entries()  values()    

var myMap = new Map();
myMap.set('color', 'blue');								//.set(key, value)
myMap.set('hello', 'world');

console.log(myMap.get('color'));						//returns blue
console.log(myMap.get('sth'));							//returns undefined
console.log(myMap.size);								//returns number of the elements in the map
console.log(myMap.has('hello'));						//returns true if that field exists
console.log(myMap.has('sth'));							//returns false otherwise
myMap.clear();											//removes all elements
console.log(myMap.size);
myMap.set('color', 'black');
myMap.set('hi', 'everyone');

for (var key of myMap.keys()) console.log(key);								//keys() returns names of every field in the map 
																			//shows color &hi
for (var value of myMap.values()) console.log(value);						//values() returns values of every field in the map
																			//shows black &everyone
for (var [key, value] of myMap.entries()) console.log(key + " : " + value);	//entries() returns all the fields with values inside the map
																			//shows color : black & hi : everyone
//------------------------------------------------------
var myObj = {};
var myFunc = function() {};
var myMap2 = new Map();
//var myMap2 = new WeakMap();			//we can't use 'string' as a name of the field, and we don't have the access to the entries() method
myMap2.set(myObj, 'yellow');
myMap2.set(myFunc, 'something');
myMap2.set('string', 2);

for (var [key, value] of myMap2.entries()) console.log(key + " : " + value);//everything is fine
																			//shows:
																			// [objectObject] : yellow
																			// function myFunc() {} : something
																			// string : 2
//------------------------------------------------------