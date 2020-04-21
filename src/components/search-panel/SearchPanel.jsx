import React from "react";
import "./searchPanel.css";

function SearchPanel() {
  return (
    <div className="input-block">
      <label htmlFor="search">
          <input type="text"
                 id="search"
                 name="search"
                 className="form-control search-input"
                 placeholder="type to search" />
      </label>
    </div>
  );
}

export default SearchPanel;
