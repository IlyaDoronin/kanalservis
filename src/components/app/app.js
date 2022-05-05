import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Table } from "../table";

import "./app.sass";

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/table/:page" element={<Table />} />

                <Route path="*" element={<Navigate to="/table/1" />} />
            </Routes>
        </div>
    );
};
