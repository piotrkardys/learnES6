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
*/
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