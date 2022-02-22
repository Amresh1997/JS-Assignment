import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(<HeaderComponent></HeaderComponent>, document.getElementById("root"))

function HeaderComponent(){
    return React.createElement("div",{}, [
      React.createElement("h1",{},"This is the header for the session"),
      React.createElement("h2",{},"This is other header"),
      React.createElement("p",{},"This is sample Paragraph"),
      React.createElement("div",{}, [
        React.createElement("section",{},[
            React.createElement("h1",{},"This is React Component"),
            React.createElement("div",{},[
                React.createElement("h2",{},"This is Another Component")
            ]),
      ]),
        React.createElement("article",{},[
            React.createElement("h1",{},"This is React Component"),
            React.createElement("div",{},[
                React.createElement("h2",{},"This is Another Component")
            ])
        ]),
    ]),
  ])
}

// <div>
//     <h1>This is The Header for the session....</h1>
//     <h2>This is Other Header</h2>
//     <p>This is the Sample Paragraph....</p>
//     <div>
//         <section>
//             <h1>This is React Component</h1>
//             <div>
//                 <h2>This is Another Component</h2>
//             </div>
//         </section>
//         <article>
//             <h1>This is React Component</h1>
//             <div>
//                 <h2>This is Another Component</h2>
//             </div>
//         </article>
//     </div>
// </div>