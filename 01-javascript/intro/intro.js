var x = "web dev"
var y = "melbourne"
var z = "partners name"
var n = "2"
 
console.log("You will be a " + x + " in "+ y + ", and married to " + z + " with " + n + " kids");

// == != evil twins of === and !==

var year = new Date().getFullYear();
	console.log(year);

if (year === 2015) {
	console.log("I'm in the Present")
}
	else if (year > 2015) {
		console.log("Greetings from the future!")
}
	else if (year < 2015) {
		console.log("Whoa! Blast from the past!")
}