import React from 'react';

import './item-add-form.css';

const ItemAddForm = () => {
    return (
        <div className="item-add-form">
            <button
                className="btn btn-outline-secondary"
                // onClick={() => this.props.onItemAdded('Hello World')}
            >
                Add Item
            </button>
        </div>
    )
};

export default ItemAddForm;