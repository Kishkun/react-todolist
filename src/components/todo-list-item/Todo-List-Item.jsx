import React from "react";
import "./todoListItem.css";
import myEvents from "../../events";
import PropTypes from "prop-types";

class TodoListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        important: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {id, label, done, important} = this.props;

        let itemClass = "todo-list-item";

        if (important) {
            itemClass += " important";
        }

        if (done) {
            itemClass += " done";
        }

        return (
            <div className={itemClass}>
                <span className="todo-list-item-label"
                      onClick={() => myEvents.emit("onDoneItem", id)}>
                    {label}
                </span>
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={() => myEvents.emit("onMarkItem", id)}
                >
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => myEvents.emit("onDeleteItem", id)}
                >
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        );
    }
}

export default TodoListItem;
