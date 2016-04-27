/* LESSON 1 */ /*
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

/* LESSON 2 */
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
