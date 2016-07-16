//Arrays// are objects

var arrays = []; 
||
var arrays = new Array ();
||
//create with a size
var arrays = Array(5);

//method is a function that belongs to an object
.reverse();
.join();
.sort();

//Get tags by "a"
var myArrayOfLinks = document.getElementsByTagName("a");

//All javascript numbers are 64-bit floating point numbers

NaN = "Not a Number"

//Tries to convert it to a number
Number();

//Is not a number
isNaN()
//Is NOT NOT a number || is a number
!isNaN();

//Math Object

//Rounds to the nearest number
Math.round();

//Quotes within quotes
var  phrase = "He said \"that's fine,\" and left.";

//String Methods
.toUpperCase(); makes all caps
.split(" "); creates an arrays at the space

.indexOf("1st word"); // position location
.lastIndexof("last occurence");
-1 = "if the term is not found";

//Searches for 1st index of
	if (phrase.indexOf("search") == -1){
		console.log("that word does not occur.");
	}
//Grabs a particular piece of a string
.slice(6,5); = position and amount

//string comparsion

if (str1.toLowerCase() == str2.toLowerCase() ){
	console.log("Yes, equal");
}

//Caps are sorted less then lower case
ABCD < abcd 

 String Reference
 		"http://developer.mozilla.org/en/Javascript/Reference"

//Working with Dates

var today - new Date ();
//year month day, hours, minutes, seconds
var date = new Date (2016, 0, 1);
	MONTHS ARE ZERO BASED!

var today = new Date();

today.getMonth(); //returns 0-11
today.getFullYear(); // YYYY no zero based
today.getDate(); //1-31 day of month
today.getDay(); //0-6 day of the week
today.getHours(); //0-23
today.getTime(); // millisceonds since 1/1/1970

.set ^ month year etc to set

Use .getTime(); to compare Dates

DOM = Document Object Model

//OBject Creation
	//Properties are variables that belong to an object
	//Outside an object = Varaibles 
	//Inside an object = properties
var player = new Object(); //Creates a container
	player.name = "joe";
	player.score = 10000;
	player.rank = 1;

//Short Hand 

var player 1 = {
	name: "Fred",
	score: 10000,
	rank: 1.
};

//this - refers to the current object

function playerDetails(){
	console.log(this.name);
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();


//DOM Code

dom code