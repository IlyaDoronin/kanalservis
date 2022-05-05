import React from "react";

import "./dropdown.sass";

// name - называние панели для корректной работы radio-баттонов
// setter - setState
export const Dropdown = ({ title, name, items, setter }) => {
    const clickHandler = (param) => setter(param);

    return (
        <div className="dropdown__wrapper">
            <h5 className="dropdown__title">{title}</h5>
            <div className="dropdown__items">
                {items.map(({ id, param, text }) => (
                    <div
                        className="dropdown__item"
                        key={id}
                        onClick={() => clickHandler(param)}
                    >
                        <input
                            id={param + id}
                            name={name}
                            className="dropdown__radio"
                            type="radio"
                        />
                        <label className="dropdown__text" htmlFor={param + id}>
                            {text}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};
