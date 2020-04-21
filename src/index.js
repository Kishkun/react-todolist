import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";
// import 'bootstrap/dist/css/bootstrap.min.css';
let list = [
    {
        id: 1,
        label: "learn HTML",
        important: false
    },
    {
        id: 2,
        label:  "learn CSS",
        important: false
    },
    {
        id: 3,
        label: "learn JavaScript",
        important: true
    },
    {
        id: 4,
        label: "learn React",
        important: true
    }
];

ReactDOM.render(
  <React.StrictMode>
    <App list={list} />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
