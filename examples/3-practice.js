function myCustomPrint1(message) {
	return console.log("test one");
}
myCustomPrint1 // => undefined [although it will do something, i.e. print to the terminal]

////

function myCustomPrint2(message) {
	return console.log("test two");
}
myCustomPrint2()

////

function myCustomPrint3(message) {
	return "test three";
}
myCustomPrint3() 


///

function myCustomPrint4(message) {
	console.log("test four");
}
myCustomPrint4() 