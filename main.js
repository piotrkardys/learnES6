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
*/
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
	phone: "456-789-123"},
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