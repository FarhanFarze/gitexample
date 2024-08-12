// // innerHTML
// // get the div element by its ID
// let nameTag = document.getElementById('content');
// // set the inner of the div to a new paragraph
// nameTag.innerHTML = '<p>New Paragraph</p>';

// //textContent
// let headervar = document.getElementById('header');
// headervar.textContent = 'New Header Text';

// ////value
// let input = document.getElementById('username');
// input.value = 'New Username';

// //className :Gets or sets the class attribute of an element
// let div = document.getElementById('myID');
// div.className = 'new-class';

// //// createElement() : Create a new html element.
// let newDiv = document.createElement('div');
// newDiv.textContent = 'Hello, world';
// document.body.appentChild(newDiv);

////appendchild(): adds a new child element to a parent element
var parent = document.getElementById('parent');
var child = document.createElement('p');
child.textContent = 'this is a new paragraph. ';
parent.appendChild(child);


////removeChild()
let parent1 = document.getElementById('parent1');
let child1 = document.getElementById('child1');
parent1.removeChild(child1);

//// replacechild() : replace one child element with another
let parent2 = document.getElementById('parent2');
let oldChild = document.getElementById('child2');
let newChild = document.createElement('p');
newChild.textContent = 'This is a new paragraph. ';
parent2.replaceChild(newChild, oldChild);


 

