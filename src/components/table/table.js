import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

import { Record } from "../record";

import axios from "axios";

import "./table.sass";

export const Table = () => {
    // Поля таблицы
    const [fields, setFields] = useState([]);
    // Берём номер страницы из урла
    const { page } = useParams();

    // Запрос данных таблицы у сервера
    const getData = async () => {
        const { data } = await axios.get("http://localhost:3000/table/" + page);
        setFields(data);
    };

    useEffect(() => {
        // Проверка корректности запрашиваемой страницы
        if (Number.isInteger(+page)) getData();
    }, []);

    // Если номер не целое число, перенаправляем пользователя на основную страницу
    if (!Number.isInteger(+page)) return <Navigate to="/table/1" />;
    return <div></div>;
};
