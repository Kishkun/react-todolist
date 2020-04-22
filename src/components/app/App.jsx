import React from "react";
import PropTypes from "prop-types";
import "./app.css";
import AppHeader from "../app-header/App-header";
import SearchPanel from "../search-panel/Search-Panel";
import TodoList from "../todo-list/Todo-List";
import ItemStatusFilter from "../item-status-filter/Item-Status-Filter";
import myEvents from "../../events";
import ItemAddForm from "../item-add-form/Item-Add-Form";

class App extends React.Component {

    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                label: PropTypes.string.isRequired,
                important: PropTypes.bool.isRequired,
                done: PropTypes.bool.isRequired,
            })
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos,
            doneCount: 0,
            id: this.props.todos.length
        };
    }

    onDeleteItem = (id) => {
        this.setState((state) => {
            let copyList = [...state.todos];
            let newTodo = copyList.filter(item => item.id !== id);
            return {
                todos: newTodo
            }
        });
    };

    onAddItem = (newLabel) => {
        this.setState((state) => {
            let newItem = {
                id: state.id + 1,
                label: newLabel,
                important: false,
                done: false,
            };
            let newTodos = [...state.todos, newItem];
            return {
                todos: newTodos,
                id: state.id + 1
            }
        });
    };

    onDoneItem = (id) => {
        this.setState((state) => {
            let changedArray = this.toggleProperty(state.todos, id, "done");
            return {
                todos: changedArray
            }
        })
    };

    onMarkItem = (id) => {
        this.setState((state) => {
            let changedArray = this.toggleProperty(state.todos, id, "important");
            return {
                todos: changedArray
            }
        })
    };

    toggleProperty(arr, id, propName) {
        let index = arr.findIndex(el => el.id === id);
        let oldItem = arr[index];
        let newItem = {...oldItem,
            [propName]: !oldItem.propName};
        let newTodos = [...arr];
        newTodos[index] = newItem;
        return  newTodos
    }

    componentDidMount() {
        myEvents.on("onDeleteItem", this.onDeleteItem);
        myEvents.on("onAddItem", this.onAddItem);
        myEvents.on("onDoneItem", this.onDoneItem);
        myEvents.on("onMarkItem", this.onMarkItem);
    }

    render() {
        let doneCount = this.state.todos.filter(el => el.done).length;
        let todoCount = this.state.todos.length - doneCount;
        return (
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col col-md-8 col-lg-6">
                        <AppHeader todoCount={todoCount}
                                   doneCount={doneCount}/>
                        <div className="top-panel d-flex align-items-start justify-content-between flex-wrap">
                            <SearchPanel/>
                            <ItemStatusFilter/>
                        </div>
                        <TodoList
                            todos={this.state.todos}
                        />
                        <ItemAddForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
