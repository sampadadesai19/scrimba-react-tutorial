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

//Functional Component Practice
/*Functional Component MyInfo with h1 name, paragraph about self, an ordered or unordered list of top 3 vacation spots
Add some style
*/

const headerStyle = {
    color: 'blue',
    textAlign: 'center'
};

const paraStyle = {
    color: 'gray',
    size:'12px',
    textAlign:'center'
};

const listStyle = {
    color: 'green',
}
function MyInfo() {
    return (
    <div>
        <h1 style={headerStyle}>Sampada Desai</h1>
        <p style={paraStyle}>I am here to learn React</p>
        <ol style={listStyle}>
            <li>Japan</li>
            <li>Switzerland</li>
            <li>Australia</li>
        </ol>
    </div>);
}

ReactDOM.render(
    <MyInfo />, document.getElementById("root")
)