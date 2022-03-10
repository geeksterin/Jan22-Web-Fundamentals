Mar-09

1. String Templating (Multi Line vs Literals)
-> This is ES6 introduction.
-> This allows use of variables directly inside a string. The syntax to use a variable is ${<variable_name>}.
-> This also allows use of multiple lines of text in a clean format.
--> To use string templating (we start and end the string with backticks, ``).
--> This is also called as Template Literals / Template Strings.

2. createElement
-> Creates a new Element in the memory.

3. appendChild
-> Appends the element in the DOM (It is shown in the viewport).

4. Changing the src for image.
5. Changing the id for any element.


--> TODO List
-> Add functionality.

Assignment 1:
-> Implement the add todo functionality in YOUR todo list UI.

Assignment 2:
-> Create a Notes taking app.
--> Take inspiration
--> Left side will be the list of all the notes.
--> When I click on any of them, show it on the right side (with description and other data).
--> To add a note, we need more than one input, maybe 1 for note title and one textarea for note description.

container > div > h1 > span

const container = document.getElement...
const div = document.createElement('div');
const h1 = document.createElement('h1');
const span = document.createElement('span');

h1.appendChild(span);
div.appendChild(h1);
container.appendChild(div);