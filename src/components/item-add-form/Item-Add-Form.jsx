import React from "react";
import "./itemAddForm.css";
import myEvents from "../../events";

class ItemAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            label: "",
            isValid: true
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        let currentLabel = this.state.label;
        if (currentLabel !== '') {
            myEvents.emit("onAddItem", currentLabel);
            this.setState({label: "", isValid: true})
        } else {
            this.setState({isValid: false})
        }
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };


    render() {
        let {isValid} = this.state;
        let inputClass = 'form-control new-todo-label';

        if(!isValid) {
            inputClass += ' invalid';
        }
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                       className={inputClass}
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done?"/>
                <button type="submit"
                        className="btn btn-outline-secondary">Add
                </button>
            </form>
        );
    }
};

export default ItemAddForm;