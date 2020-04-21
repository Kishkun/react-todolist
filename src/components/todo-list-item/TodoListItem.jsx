import React from "react";
import "./todoListItem.css";

function TodoListItem(props) {
    return (
        <span className={"todo-list-item"}>
        <span
            className="todo-list-item-label"
            // onClick={ this.onLabelClick }
        >
          {props.label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                // onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                // onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
}

export default TodoListItem;
