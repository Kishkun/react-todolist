import React from "react";
import "./searchPanel.css";
import myEvents from "../../events";

class SearchPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="input-block">
                <label htmlFor="search">
                    <input type="text"
                           id="search"
                           name="search"
                           className="form-control search-input"
                           placeholder="type to search"
                           onChange={(e) => myEvents.emit('onTernChange', e.target.value)}
                    />
                </label>
            </div>
        );
    }
}

export default SearchPanel;
