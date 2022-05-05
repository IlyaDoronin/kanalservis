import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

import { Record } from "../record";
import { Pagination } from "../pagination";

import axios from "axios";

import "./table.sass";

export const Table = () => {
    // Поля таблицы
    const [records, setRecords] = useState([]);
    // Колличество отображаемых записей на одной странице
    const [recordsAmount, setRecordsAmount] = useState(4);
    // Берём номер страницы из урла
    const { page } = useParams();

    // Запрос данных таблицы у сервера
    const getData = async () => {
        const { data } = await axios.get("http://localhost:3000/table");
        setRecords(data);
    };

    useEffect(() => {
        // Проверка корректности запрашиваемой страницы
        if (Number.isInteger(+page)) getData();
    }, []);

    // Если номер не целое число, перенаправляем пользователя на основную страницу
    if (!Number.isInteger(+page)) return <Navigate to="/table/1" />;

    return (
        <section>
            <div
                className="record"
                style={{
                    color: "#fff",
                    background: "#7f8c8d",
                    marginBottom: "1rem",
                }}
            >
                <div className="record__item">Дата</div>
                <div className="record__item">Название</div>
                <div className="record__item">Количество</div>
                <div className="record__item">Расстояние</div>
            </div>
            {records
                .slice(
                    (page - 1) * recordsAmount,
                    (page - 1) * recordsAmount + recordsAmount
                )
                .map((record) => (
                    <Record key={record.id} record={record} />
                ))}
            <Pagination amount={(records.length / recordsAmount).toFixed()} />
        </section>
    );
};
