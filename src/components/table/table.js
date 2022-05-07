import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router";
import { Navigate, useNavigate } from "react-router-dom";
import { Record } from "../record";
import { Pagination } from "../pagination";
import { Filtration } from "../filtration";

import { filtration, columns, conditions } from "../../utils/filtration";

import "./table.sass";

export const Table = () => {
    const navigate = useNavigate();
    // Поля таблицы
    const [records, setRecords] = useState([]);
    // Отфильтрованные поля таблицы
    const [filteredRecords, setFilteredRecords] = useState([]);
    // Колличество отображаемых записей на одной странице
    const [recordsAmount, setRecordsAmount] = useState(6);
    // Значение из инпута
    const [value, setValue] = useState("");
    // Состояние хранящие название колонки, по которой будет фильтрация
    const [column, setColumn] = useState(columns.name);
    // Состояние хранящие условие, по которому будет фильтрация
    const [condition, setCondition] = useState(conditions.equals);
    // Берём номер страницы из урла
    const { page } = useParams();

    // Запрос данных таблицы у сервера
    const getData = async () => {
        const { data } = await axios.get("http://localhost:3000/table");
        setRecords(data);
        setFilteredRecords(data);
    };

    useEffect(() => {
        // Проверка корректности запрашиваемой страницы
        if (Number.isInteger(+page)) getData();
    }, []);

    // Если номер не целое число, перенаправляем пользователя на основную страницу
    if (!Number.isInteger(+page)) return <Navigate to="/table/1" />;

    // Фильтрация записей
    const filterRecords = () => {
        const filtered = filtration(records, column, condition, value);
        // Массив отфильтрованных записей
        setFilteredRecords(filtered);
        // Редирект на главную страницу
        navigate(-1);
    };

    return (
        <section>
            <Filtration
                value={value}
                setValue={setValue}
                column={column}
                setColumn={setColumn}
                condition={condition}
                setCondition={setCondition}
                onClick={filterRecords}
            />
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
            {/* Обрезание и перебор массива записей в зависемости от текущей страницы */}
            {filteredRecords
                .slice(
                    (page - 1) * recordsAmount,
                    (page - 1) * recordsAmount + recordsAmount
                )
                .map((record) => (
                    <Record key={record.id} record={record} />
                ))}
            <Pagination
                amount={Math.ceil(filteredRecords.length / recordsAmount)}
                page={page}
            />
        </section>
    );
};
