/* LESSON 1 */
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