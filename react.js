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