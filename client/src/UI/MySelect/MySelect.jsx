import React from 'react';

const MySelect = () => {
    return (
        <select className="form-select my-2 w-25" aria-label="Default select example">
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    );
};

export default MySelect;