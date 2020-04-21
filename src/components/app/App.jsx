import React from "react";
import "./app.css";
import AppHeader from "../app-header/AppHeader";
import SearchPanel from "../search-panel/SearchPanel";
import TodoList from "../todo-list/TodoList";

function App(props) {
  return (
    <div className="container">
     <div className="row justify-content-center pt-5">
       <div className="col-6">
           <AppHeader toDo={3} done={0}  />
           <SearchPanel />
           <TodoList list={props.list} />
       </div>
     </div>
    </div>
  );
}

export default App;
