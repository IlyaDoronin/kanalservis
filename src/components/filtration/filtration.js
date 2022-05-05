import React from "react";


import { columns, conditions } from "../../utils/filtration";

import "./filtration.sass";

export const Filtration = ({
    value,
    setValue,
    column,
    setColumn,
    condition,
    setCondition,
    onClick,
}) => {
    return (
        <div className="filtration">
            <input
                className="filtration__input"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};
