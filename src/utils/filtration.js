// Все виды состояний
export const conditions = {
    equals: "equals",
    contain: "contain",
    samaller: "samaller",
    more: "more",
};

// Все колонки, по которым возможна фильтрация
export const columns = {
    name: "name",
    count: "count",
    distance: "distance",
};

/* 
    records - массив записей,
    column - колонка по которой фильтруются записи,
    condition - условие,
    value - текст, по которому фильтруются записи
*/
export const filtration = (
    records = [],
    column = columns.name,
    condition = conditions.equals,
    value = ""
) => {
    return records;
};
