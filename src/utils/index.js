const getDateTime = (datetime = '') => {
    const dt = new Date(datetime);
    return dt.getUTCFullYear() + '/' + dt.getMonth() + '/' + dt.getDay() + ' ' + dt.getHours() + ':' + dt.getMinutes();
};

export {
    getDateTime
}