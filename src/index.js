import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";

let todoData = [
    {
        id: 1,
        label: "learn HTML",
        important: false,
        done: false,
    },
    {
        id: 2,
        label: "learn CSS",
        important: false,
        done: false,
    },
    {
        id: 3,
        label: "learn JavaScript",
        important: false,
        done: false,
    },
    {
        id: 4,
        label: "learn React",
        important: false,
        done: true,
    }
];

ReactDOM.render(
    <App todos={todoData}/>,
    document.getElementById("root")
);
