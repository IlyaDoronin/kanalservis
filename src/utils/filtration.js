// Все виды состояний
export const conditions = {
    equals: "equals",
    contain: "contain",
    smaller: "smaller",
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
    // Если есть текст для фильтрации, делаем фильтрацию

    const filteredRecords = [];
    if (value) {
        // Филтрация по заданным условиям
        records.forEach((record) => {
            switch (condition) {
                // Равно
                case conditions.equals:
                    if (record[column] == value)
                        return filteredRecords.push(record);
                    return;
                // Содержит
                case conditions.contain:
                    if (
                        record[column]
                            .toString()
                            .toLowerCase()
                            .includes(value.toLowerCase())
                    )
                        return filteredRecords.push(record);
                    return;
                // Меньше
                case conditions.smaller:
                    if (+record[column] < +value)
                        return filteredRecords.push(record);
                    return;
                // Больше
                case conditions.more:
                    if (+record[column] > +value)
                        return filteredRecords.push(record);
                    return;

                default:
                    return null;
            }
        });
    }

    // Если значение для фильтрации пустое, возвращем все значения
    return value ? filteredRecords : records;
};
