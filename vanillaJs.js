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


//--Switch Case --//

//switch allows you to preset a number of options (called cases), 
//then check an expression to see if it matches any of them. 
//If there's a match, the program will perform the action for the matching case; 
//if there's no match, it can execute a default option

example

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}
																						
//----------------------------------------------------------------------------------------//

//--Logical Operators --//

For this, we'll need logical operators.'
JavaScript has three: and (&&), or (||), and not (!).																						

&& - And

The logical operator and is written in JavaScript like this: &&. 
It evaluates to true when both expressions are true; if they're not, it evaluates to false.'

|| - Or

The logical operator or is written in JavaScript like this: ||. It evaluates to true when one 
or the other or both expressions are true; if they're not, it evaluates to false.'

! - Not

The logical operator not is written in JavaScript like this: !. 
It makes true expressions false, and vice-versa.


//--Javascript Allows Jagged Arrays -- //

Sometimes you want arrays that aren't as nice and even as your 3 x 3 two-dimensional array:'
 you may have three elements in the first row, one element in the second row, and two elements 
 in the third row. JavaScript allows those, and they're called jagged arrays.'

 //-- Objects --//

 Using objects, we can put our information and the functions that use that information in the same place.

 You can also think of objects as combinations of key-value pairs (like arrays), only their keys 
 don't have to be numbers like 0, 1, or 2: they can be strings and variables.'

var myObject = {
    key: value,
    key: value,
    key: value
};

Object Literal notation
-----------------------

var myObj = {
	type: 'fancy',
	disposition:'sunny'
};

Constructor notation
---------------------

var myObj = new Object();

myObj["name"] = "Charlie";
myObj.name = "Charlie";


//--For in Loop -- //

for (var key in object) {
  // Access that key's value
  // with object[key]
}

----------------------------------------------------------------------
We know two ways of storing data types. We can use variables or arrays
------------------------------------------------------------------------

//--Objects, Property, Value --//

var object = {
   //Prop : Value
      age: 21

};


// -- Accessing Properties --//

Properties are like variables that belong to an object, and are used to hold pieces of information. 
Properties can be accessed in two ways:

Dot notation

ObjectName.PropertyName

Bracket notation

ObjectName["PropertyName"]



To access the values for each property we write array.property.

array.property

//-- Methods --//
Methods are like functions that are associated with a particular object.

They are especially helpful when you want to either:

Update the object properties
Calculate something based on an object's properties.'


--Importance--
1. change the object property value
2. used to make calculations based on object property.


//-- This --/
this

 acts as a placeholder, and will refer to whichever object called that method when the method is actually used.

 //-- Objects --//
Custom Constructor 

helpful for two reasons:

We can assign our objects properties through parameters we pass in when the object is created.
We can give our objects methods automatically.

function Person(name,age) {
  this.name = name;
  this.age = age;
}


//Constructors//
Constructors are a way to make objects with the keyword new. 
The most basic constructor is the Object constructor, which will make an object with no methods or properties.

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");


Remember that an object is just another type, like a string or number but more complex. This means that just as 
we can make arrays of numbers and strings, we can also make arrays of objects.

function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();                      <------new Array() //creates a new array
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// add the last family member, "timmy", who is 6 years old

//-- typeof --/

typeof 

 Figure out if it's an object, string, number, boolean'

hasOwnProperty. 
'method called that lets us know if an object has a particular property.'

for(var property in placeholder){
	console.log(property);
};

-------------------------------------------
var dog = {
species: "bulldog",
age: 3,
color: brown
};


First, remember that
dog.species = dog["species"] = "bulldog";

And if we say:

var x = "species";

then

dog[x] = "bulldog";


var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for(var x in nyc){
    console.log(nyc[x]);
    };
----------------------------------------------

//-- Object-Oriented Programming--/

Constructors are a way to make objects
When you make a constructor, you are in fact defining a new class.

A class can be thought of as a type, or a category of objects
kind of like how Number and String are types in JavaScript.


Prototype - keeps track of what a given class can or can't do

In general, if you want to add a method to a class such that all 
members of the class can use it, we use the following syntax to extend
 the prototype:

 //-- DRY -- DON'T REPEAT YOURSELF --//

 Inheritance
 lets us see and use properties and methods from another class. 


 Penguin.prototype = new Animal();

This means that Penguin inherits properties and methods from Animal.

//--Javascript properties --//

In JavaScript all properties of an object are automatically public.
 Public means that they can be accessed outside the class. 
 Think of these properties as the information a class is willing to share.

//--Accessing Private Variables --//

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.getBalance = function() {
      return bankBalance;   
   };
}
var john = new Person('John','Smith',30);
console.log(john.bankBalance);

var myBalance = john.getBalance();
console.log(myBalance);

 An object's private variables can only be accessed by other methods that are'
  part of that same object. So, we just used an object's public method to access a private variable!'

passing an argument
  var myVariable = otherVariable.function(argument);

  -----------------------------

  var john = new Person('John','Smith',30);
console.log(john.bankBalance);

var myBalance = john.getBalance();
console.log(myBalance);

 An object's private variables can only be accessed by other methods that are'
  part of that same object. So, we just used an object's public method to access a private variable!'

passing an argument
  var myVariable = otherVariable.function(argument);

  -------------------------------

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


//--Switch Case --//

//switch allows you to preset a number of options (called cases), 
//then check an expression to see if it matches any of them. 
//If there's a match, the program will perform the action for the matching case; 
//if there's no match, it can execute a default option

example

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}
																						
//----------------------------------------------------------------------------------------//

//--Logical Operators --//

For this, we'll need logical operators.'
JavaScript has three: and (&&), or (||), and not (!).																						

&& - And

The logical operator and is written in JavaScript like this: &&. 
It evaluates to true when both expressions are true; if they're not, it evaluates to false.'

|| - Or

The logical operator or is written in JavaScript like this: ||. It evaluates to true when one 
or the other or both expressions are true; if they're not, it evaluates to false.'

! - Not

The logical operator not is written in JavaScript like this: !. 
It makes true expressions false, and vice-versa.


//--Javascript Allows Jagged Arrays -- //

Sometimes you want arrays that aren't as nice and even as your 3 x 3 two-dimensional array:'
 you may have three elements in the first row, one element in the second row, and two elements 
 in the third row. JavaScript allows those, and they're called jagged arrays.'

 //-- Objects --//

 Using objects, we can put our information and the functions that use that information in the same place.

 You can also think of objects as combinations of key-value pairs (like arrays), only their keys 
 don't have to be numbers like 0, 1, or 2: they can be strings and variables.'

var myObject = {
    key: value,
    key: value,
    key: value
};

Object Literal notation
-----------------------

var myObj = {
	type: 'fancy',
	disposition:'sunny'
};

Constructor notation
---------------------

var myObj = new Object();

myObj["name"] = "Charlie";
myObj.name = "Charlie";


//--For in Loop -- //

for (var key in object) {
  // Access that key's value
  // with object[key]
}

----------------------------------------------------------------------
We know two ways of storing data types. We can use variables or arrays
------------------------------------------------------------------------

//--Objects, Property, Value --//

var object = {
   //Prop : Value
      age: 21

};


// -- Accessing Properties --//

Properties are like variables that belong to an object, and are used to hold pieces of information. 
Properties can be accessed in two ways:

Dot notation

ObjectName.PropertyName

Bracket notation

ObjectName["PropertyName"]



To access the values for each property we write array.property.

array.property

//-- Methods --//
Methods are like functions that are associated with a particular object.

They are especially helpful when you want to either:

Update the object properties
Calculate something based on an object's properties.'


--Importance--
1. change the object property value
2. used to make calculations based on object property.


//-- This --/
this

 acts as a placeholder, and will refer to whichever object called that method when the method is actually used.

 //-- Objects --//
Custom Constructor 

helpful for two reasons:

We can assign our objects properties through parameters we pass in when the object is created.
We can give our objects methods automatically.

function Person(name,age) {
  this.name = name;
  this.age = age;
}


//Constructors//
Constructors are a way to make objects with the keyword new. 
The most basic constructor is the Object constructor, which will make an object with no methods or properties.

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");


Remember that an object is just another type, like a string or number but more complex. This means that just as 
we can make arrays of numbers and strings, we can also make arrays of objects.

function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();                      <------new Array() //creates a new array
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// add the last family member, "timmy", who is 6 years old

//-- typeof --/

typeof 

 Figure out if it's an object, string, number, boolean'

hasOwnProperty. 
'method called that lets us know if an object has a particular property.'

for(var property in placeholder){
	console.log(property);
};

-------------------------------------------
var dog = {
species: "bulldog",
age: 3,
color: brown
};


First, remember that
dog.species = dog["species"] = "bulldog";

And if we say:

var x = "species";

then

dog[x] = "bulldog";


var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for(var x in nyc){
    console.log(nyc[x]);
    };
----------------------------------------------

//-- Object-Oriented Programming--/

Constructors are a way to make objects
When you make a constructor, you are in fact defining a new class.

A class can be thought of as a type, or a category of objects
kind of like how Number and String are types in JavaScript.


Prototype - keeps track of what a given class can or can't do

In general, if you want to add a method to a class such that all 
members of the class can use it, we use the following syntax to extend
 the prototype:

 //-- DRY -- DON'T REPEAT YOURSELF --//

 Inheritance
 lets us see and use properties and methods from another class. 


 Penguin.prototype = new Animal();

This means that Penguin inherits properties and methods from Animal.

//--Javascript properties --//

In JavaScript all properties of an object are automatically public.
 Public means that they can be accessed outside the class. 
 Think of these properties as the information a class is willing to share.

//--Accessing Private Variables --//

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.getBalance = function() {
      return bankBalance;   
   };
}

---------------------------------------------------------------------------------
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

-------------------------------------------
var dog = {
species: "bulldog",
age: 3,
color: brown
};


First, remember that
dog.species = dog["species"] = "bulldog";

And if we say:

var x = "species";

then

dog[x] = "bulldog";


var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for(var x in nyc){
    console.log(nyc[x]);
    };