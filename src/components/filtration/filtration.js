import React from "react";

import { Dropdown } from "../dropdown";

import { columns, conditions } from "../../utils/filtration";

import "./filtration.sass";

// Конфиги для dropdown меню
const columnItems = [
    { id: 0, param: columns.name, text: "Название" },
    { id: 1, param: columns.count, text: "Количество" },
    { id: 2, param: columns.distance, text: "Расстояние" },
];
const conditionItems = [
    { id: 0, param: conditions.equals, text: "Равно" },
    { id: 1, param: conditions.contain, text: "Содержит" },
    { id: 2, param: conditions.samaller, text: "Меньше" },
    { id: 3, param: conditions.more, text: "Больше" },
];

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
                placeholder="Введите значение..."
                onChange={(e) => setValue(e.target.value)}
            />
            <Dropdown
                title="Колонки"
                name="columns"
                items={columnItems}
                setter={setColumn}
            />
            <Dropdown
                title="Условия"
                name="condition"
                items={conditionItems}
                setter={setCondition}
            />
            <button onClick={onClick}>Отфильтровать</button>
        </div>
    );
};
