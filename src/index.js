import React from 'react';
import ReactDOM from 'react-dom';

/*ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById('root'));

var myNewP = document.createElement("p");
myNewP.innerHTML = "This is a paragraph."*/

/*ReactDOM & JSX Practice
Render an unordered list to the page. The list should contain 3 list items.
*/

/*ReactDOM.render(<ul>
<li>Cat</li>
<li>Dog</li>
<li>Elephant</li>
</ul>, document.getElementById('root'));*/

//Functional Components

function MyApp() {
    return (
    <ul>
        <li>Cat</li>
        <li>Dog</li>
        <li>Elephant</li>
    </ul>);
}

ReactDOM.render(
    <MyApp />, document.getElementById("root")
)