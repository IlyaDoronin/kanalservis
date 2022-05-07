import React, { useState } from "react";

import "./dropdownItem.sass";

export const DropdownItem = ({ id, name, getter, param, text, onClick }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="dropdown__item">
            <input
                id={param + id}
                name={name}
                className="dropdown__radio"
                type="radio"
                checked={param === getter ? true : false}
                onChange={() => onClick(param)}
            />
            <label className="dropdown__text" htmlFor={param + id}>
                {text}
            </label>
        </div>
    );
};
