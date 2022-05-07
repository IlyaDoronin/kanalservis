import React from "react";

import { DropdownItem } from "./dropdownItem";

import "./dropdown.sass";

// name - называние панели для корректной работы radio-баттонов
// getter - state
// setter - setState
export const Dropdown = ({ title, name, items, getter, setter }) => {
    const clickHandler = (param) => setter(param);

    return (
        <div className="dropdown__wrapper">
            <h5 className="dropdown__title">{title}</h5>
            <div className="dropdown__items">
                {items.map(({ id, param, text }) => (
                    <DropdownItem
                        key={id}
                        id={id}
                        name={name}
                        getter={getter}
                        param={param}
                        text={text}
                        onClick={clickHandler}
                    />
                ))}
            </div>
        </div>
    );
};
