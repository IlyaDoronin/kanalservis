import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./pagination.sass";

export const Pagination = ({ amount }) => {
    // Узнаем текущую страницу из урла
    const { page } = useParams();

    const pageNumbers = [];
    // Создания массива страниц
    for (let i = 1; i <= amount; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map((num) => (
                <Link
                    key={num}
                    className="pagination__item"
                    style={{ background: num == page && "#1dd1a1" }}
                    to={"/table/" + num}
                >
                    {num}
                </Link>
            ))}
        </div>
    );
};
