//ReactDOM is the name of a JavaScript library. 
//This library contains several React-specific methods, 
//all of which deal with the DOM in some way or another.

//.render 
//    the most common way to render JSX. It takes a JSX expression, 
//     creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.

ReactDOM.render(<h1>Hello world</h1>, 
document.getElementById('app'));

//In JSX, you can't use the word class! You have to use className instead:
className
!class

&& = will run or not run depending on condition

x ? y : z 

function ? true : false

A key is a JSX attribute. The attribute's name is key. The attribute's 
value should be something unique, similar to an id attribute.

1. The list-items have memory from one render to the next. For instance,
 when a to-do list renders, each item must "remember" whether it was checked off. 
 The items shouldn't get amnesia when they render.
2. A list's order might be shuffled. For instance, a list of search results might
 be shuffled from one render to the next.

 li key

 var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
  // return statement goes here:
return <li key={'person_' + i}>{person}</li>;
});

// ReactDOM.render goes here:
ReactDOM.render(
<ul>{peopleLIs}</ul>
document.getElementById('app')
);

React.createElement(
"div",
null,
"text here"
);

What's a component?

A component is a small, reusable chunk of code that is responsible 
for one job. That job is often to render some HTML.