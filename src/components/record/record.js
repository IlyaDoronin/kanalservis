import React from "react";
import { format } from "date-fns";

import "./record.sass";

export const Record = ({ record: { name, date, count, distance } }) => (
    <div className="record">
        {/* Конвертирование даты в удобный формат*/}
        <div className="record__item">
            {format(new Date(date), "dd MMMM yyyy")}
        </div>
        <div className="record__item">{name}</div>
        <div className="record__item">{count}</div>
        <div className="record__item">{distance}</div>
    </div>
);
