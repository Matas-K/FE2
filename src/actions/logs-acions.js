export const ADD_LOG_EVENT = 'logs:add_log';

const getNowDateString = () => {
    let date = new Date(),
        year = date.getFullYear(),
        month = ('0' + (date.getMonth() + 1)).slice(-2),
        day = ('0' + date.getDate()).slice(-2),
        hours = ('0' + date.getHours()).slice(-2),
        minutes = ('0' + date.getMinutes()).slice(-2),
        seconds = ('0' + date.getSeconds()).slice(-2);

    return [year, month, day].join('-')+' '+[hours, minutes, seconds].join(':');
    //return date.toLocaleString();
};

export const addLogEvent = (message) => {
    let date = getNowDateString();
    let object = {
        type: ADD_LOG_EVENT,
        event: {},
    };
    object.event[date] = message;
    return object;
};