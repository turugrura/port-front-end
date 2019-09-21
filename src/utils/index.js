const getDateTime = (datetime = '') => {
    const dt = new Date(datetime);

    // example: 09:03 2019/09/01
    return (
              dt.getHours().toString().padStart(2,'0') + ':' 
            + dt.getMinutes().toString().padStart(2,'0') + ' '
            + dt.getFullYear() + '/'
            + dt.getMonth().toString().padStart(2,'0') + '/'
            + dt.getDate().toString().padStart(2,'0')
    );
};

const sortByCreatedAtAsc = (x, y) => {
    const dateX = new Date(x.createdAt);
    const dateY = new Date(y.createdAt);

    return (dateX.getTime() - dateY.getTime());
};

const sortByCreatedAtDesc = (x, y) => {
    const dateX = new Date(x.createdAt);
    const dateY = new Date(y.createdAt);

    return -(dateX.getTime() - dateY.getTime());
};

const sortByCustom = (field, asc = 1) => (x, y) => {
    const val1 = x[field];
    const val2 = y[field];

    return asc*(val1 - val2);
};

const getTitleDisplay = (title = '') => {
    return title.substr(0,10);
};

export {
    getDateTime,
    sortByCreatedAtAsc,
    sortByCreatedAtDesc,
    getTitleDisplay,
    sortByCustom
}