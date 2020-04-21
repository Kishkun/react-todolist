import React from "react";
import "./todoList.css";
import TodoListItem from "../todo-list-item/TodoListItem";

function TodoList(props) {
    let elements = props.list.map((item) => {
        let {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item todo-item">
                <TodoListItem {...itemProps} />
            </li>
        )
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;
