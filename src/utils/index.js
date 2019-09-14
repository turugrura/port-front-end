const getDateTime = (datetime = '') => {
    const dt = new Date(datetime);

    // example: 2019/09/01 09:03
    return dt.getFullYear() + '/' 
            + dt.getMonth().toString().padStart(2,'0') + '/' 
            + dt.getDate().toString().padStart(2,'0') + ' ' 
            + dt.getHours().toString().padStart(2,'0') + ':' 
            + dt.getMinutes().toString().padStart(2,'0');
};

const sortByCreatedAt = (x, y) => {
    const dateX = new Date(x.createdAt);
    const dateY = new Date(y.createdAt);

    return -(dateX.getTime() - dateY.getTime());
};

export {
    getDateTime,
    sortByCreatedAt
}