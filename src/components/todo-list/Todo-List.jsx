import React from "react";
import "./todoList.css";
import TodoListItem from "../todo-list-item/Todo-List-Item";
import PropTypes from "prop-types";

class TodoList extends React.Component {

    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                label: PropTypes.string.isRequired,
                important: PropTypes.bool.isRequired,
                done: PropTypes.bool.isRequired
            })
        ),
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let elements = this.props.todos.map((item) => {
            return (
                <li key={item.id} className="list-group-item todo-item">
                    <TodoListItem
                        {...item}
                    />
                </li>
            )
        });
        return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
        );
    }
}

export default TodoList;
