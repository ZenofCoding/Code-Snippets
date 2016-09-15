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

Document object Model

Element node - p, li, h1
Attribute node - href=, src=
Text node - text

//Creating a varaible (handle)
var myElement = document.getElementById("someId");

var myListItems = document.getElementsByTageName("li");

var mainTitle = document.getElementById("mainTitle");

.nodeType
.innerHTML 
.childNodes.length = childNodes

.getAttribute("align");
.setAttribute("align", "left");
.innerHTML = contents within a tags

1. create the Element
2. add it to the DOM

//Create a new element
var myNewElement = document.createElement("li");
//Appending that element to the child of li
myElement.appendChild(myNewElement);
//Create a new next node
var myText = document.createTextNode("New list item text");
//Append that to the newly made list
myNewElement.appendChild(myText);


//Create the elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");
//add content, using innerHTML
newHeading.innerHTML = "Did you know?";
newParagraph.innerHTML = "Blah blah";

//or
var h1Text = document.createTextNode("did you know?");
var paraText = document.createTextNode("balh blah");
//add them as childe nodes manually
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);



//attaching it to the document
document.getElementByID("trivia").appendChild(newHeading);
document.getElementByID("trivia").appendChild(newParagraph);

//------//
//Alternatives to appendchild
var myNewELement = document.createElement("li");
var secondItem = myElement.getElementsByTagName("li")[1];
myElement.insertBefore(myNewElement, secondItem);

6. Working with Events and Event Listeners

element.Event
window.onload

method 2
myelement.onclick = function(){   
//event handler code
};

method 3

//not IE 9 supported
document.addEventListener('click', myFunction, false);
document.removeEventListener('click', myFunction, false);

Cross Browser Add Event Helper Methods

function addCrossBrowserListener (elementName, eventName, functionName){
	//does the addEventListener function exist?
	if (elementName.addEventListener){
		//yes use it
		element.addEventListener(eventName, functionName, false);
		return true;
	} else {
		//otherwise use attachEvent
		elementName.attachEvent("on" +eventName, functionName);
		return true;
	}
};

document.onclick = function (){
	alert("you clicked");
};

var myImage = document.getElementById("mainImage");
myImage.onclick = function (){
	alert("you clicked an image");
};

//waits for entire page to load before running function
window.onload = function(){

};

var emailField = document.getElementById("email");

emailField.onfocus = function(){
	if (emailField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function(){
	if (emailField.vaue == ""){
		emailField.value = "your email";
	}
};

TIMERS
//runs function after 3 secs
setTimeout(simpleMessage, 3000);
//changes after 3 secs
setInterval(changeimage, 3000);

//gets element mainImage
var myImage = document.getElementById("mainImage");
//array created of pictures
var imageArray = ["_images/overlook.jpg", "_images/hello.jpg" ];
//starting index
var imageIndex = 0;

//runs a loop through the array of images
function changeImage(){
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex >= imageArray.length){
		imageIndex = 0;
	}
};

//on click, stops the interval handle
var intervalHandle = setInterval(changeImage, 5000);
myImage.onclic = function() {
	clearInterval(intervalHandle);
};




//callback function for every index an array
.map

//creates tab (for clean code)-
var tab="\t";








																						
																						