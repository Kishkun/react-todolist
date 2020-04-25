import React from "react";
import "./itemStatusFilter.css";
import myEvents from "../../events";

class ItemStatusFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    filterButtons = [
        {name: 'all', title: 'All', type: 'button'},
        {name: 'active', title: 'Active', type: 'button'},
        {name: 'blocked', title: 'Done', type: 'button'}
    ];

    render() {
        let buttons = this.filterButtons.map(item => {
            let isActive = this.props.filter === item.name;
            return (
                <button key={item.name}
                        type={item.type}
                        className={isActive ? "btn btn-info" : "btn btn-outline-secondary"}
                        onClick={()=>myEvents.emit("onChangeStatus", item.name)}
                >
                    {item.title}
                </button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;
