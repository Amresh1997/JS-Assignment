// import ReactDOM from "react-dom";
// import App from "./Components/Counter";

// var i = 0;

    
// setInterval(function() {
//     debugger;
//     i = i + 1;
//     console.log('Currently at ' + i);
//     ReactDOM.render(<App count={i}></App>, document.getElementById("root"))
// }, 1000);

import ReactDOM from "react-dom";
import App from "./Components/FilterDataComponent";
import empList from "./Data/employeeList"

ReactDOM.render(<App ></App>, document.getElementById("root"))



