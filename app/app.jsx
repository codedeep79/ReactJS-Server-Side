//var hello = require("./component/hello.js");
//hello();
//document.writeln("Hello world");

const React = require("react");
const ReactDOM = require("react-dom");

var List = require("./component/list.jsx");

ReactDOM.render(
    <List/>,
    document.getElementById("root")
);

//reactDOM.render(
//    react.createElement('a', {href: 'https://www.youtube.com'}, 'Click Here Youtube.com'),
//    document.getElementById("root")
//);

